import style from './ProductImage.module.css'


function ProductImage(props) {

    const {title, image} = props

    return (
      <div className={style.image_wrapper}>
        <img className={style.image_size} src={image} alt='image'/>
        <h2 className={style.title_text}>{title}</h2>
      </div>
    );
  }
  
  export default ProductImage;
  