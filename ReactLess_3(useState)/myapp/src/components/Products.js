import { useState } from "react"



function Products(){

    const data = [
        {id: 1, title: 'Самокат', price: 3000},
        {id: 2, title: 'Велосипед', price: 5000},
        {id: 3, title: 'Ролики', price: 400},
        {id: 4, title: 'Телевизор', price: 6000},
    ]

    const [products, setProducts] = useState(data)


    function delFirstProduct(){
        // Решение 1
        // let copy = [...products]
        // copy.shift()
        // setProducts(copy)

        // Решение 2
        // const filtered = products.filter((elem, ind) => ind !== 0)
        // setProducts(filtered)

        // Решение 3
        setProducts(products.slice(1))
    }

    function delLastProduct(){
        setProducts(products.slice(0,-1))
    }

    function sortProducts(){
        // 1 решение
        // let copy = [...products]
        // copy.sort((a,b) => a.price - b.price)
        // setProducts(copy)

        // 2 решение
        // setProducts([...products].sort((a,b) => a.price - b.price))

        // 3 решение
        setProducts(products.slice().sort((a,b) => a.price - b.price))
    }

    function changePrice(){
        // Решение 1
        // let changed_products = products.map(elem => ({...elem, price: Math.round(elem.price * 1.1)}))

        // Решение 2
        let changed_products = products.map(elem => {
            elem.price = Math.round(elem.price * 1.1)
            return elem
        })
        setProducts(changed_products)
    }

    function delProductById(id){
        const filtered = products.filter(elem => elem.id !== id)
        setProducts(filtered)
    }

    function addNewProduct(){
        const new_product = {
            id: Date.now(),
            title: prompt('Укажите имя товара'),
            price: +prompt('Укажите стоимость')
        }
        setProducts([...products, new_product])
    }

    function resetPrice(id){
        let changed_products = products.map(elem => {
            if (elem.id === id){
                elem.price = 0
            }
            return elem
        })
        setProducts(changed_products)
    }

    return(
        <div>
            <h1>Products</h1>
            <div>
                <button onClick={delFirstProduct}>Del First Product</button>
                <button onClick={delLastProduct}>Del Last Product</button>
                <button onClick={changePrice}>Change price</button>
                <button onClick={sortProducts}>Sort By Price</button>
                <button onClick={addNewProduct}>Add new product</button>
            </div>
            <div>
                {products.map(elem => 
                    <div key={elem.id} onClick={() => resetPrice(elem.id)} onDoubleClick={() => delProductById(elem.id)}>
                        <h4>{elem.title}</h4>
                        <p>{elem.price}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products