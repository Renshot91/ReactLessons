import style from './ProductInfo.module.css'

function ProductInfo(props) {

    const {price, brand, description} = props

    return (
      <div className={style.product_info_wrapper}>
        <p>Price: {price}$</p>
        <p>Brand: {brand}</p>
        <p>Description: {description}</p>
      </div>
    );
  }
  
  export default ProductInfo;
  