import { useEffect } from "react";
import useCounter, { useActions } from "../store/use-counter";


function Products () {

    // const fetchProducts = useCounter(state => state.fetchListofProducts);
    const ProductsList = useCounter(state => state.listofProducts);

    const {fetchListofProducts , } = useActions()
    // console.log(stateValue);

    useEffect(()=>{
        // fetchProducts()
        fetchListofProducts()
    },[]);
    // console.log(ProductsList)

    return (
        <div style={{border : "1px solid balck" , padding : "20px "}}>
            <h1>List of Products</h1>
            <ul style={{display : 'flex' , flexWrap : "wrap" , listStyle : "none" , padding : 0}}>{
                ProductsList?.length > 0 ?
                ProductsList.map(singleProductItem => 
                    <div 
                     key = {singleProductItem?.id}
                     style={{
                        border : "1px solid gray",
                        borderRadius : "8px",
                        margin : "10px",
                        padding: "10px",
                        width : "200px",
                        textAlign : "center"
                     }}
                     
                     >
                        <p>{singleProductItem?.title}</p>
                        <img 
                        src = {singleProductItem?.thumbnail}
                        style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                ) : <h3>No products available</h3>
                }</ul>
        </div>
    );

}
export default Products;