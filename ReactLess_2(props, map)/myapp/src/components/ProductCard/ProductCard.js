import ProductImage from "../ProductImage/ProductImage";
import ProductInfo from "../ProductInfo/ProductInfo";
import style from './ProductCard.module.css'

// Импорт картинки (с иконкой можно также)
import cartImage from './media/images/cartImage.jpg'


function ProductCard(props) {

    const {title, image, price, brand, description} = props

    return (
      <div className={style.product_card_wrapper}>
        {/* Image */}
        <img width='40' src={cartImage}/>

        <ProductImage title={title} image={image}/>
        <ProductInfo price={price} brand={brand} description={description}/>
      </div>
    );
  }
  
  export default ProductCard;
  