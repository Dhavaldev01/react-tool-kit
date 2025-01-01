import styles from './product-item.module.css';


function ButtonComponent(){
    return <button className={styles.buttonStyle}> Click</button>
}

function ProductItem({singleProductItem , index}){
    return <div style = {{padding:'20px' , border:"2px solid red" , marginBottom:"2px"}} key={index }>
        <p className={styles.productTitle}>{singleProductItem}</p>
        <ButtonComponent/>
    </div>
}

export default ProductItem;