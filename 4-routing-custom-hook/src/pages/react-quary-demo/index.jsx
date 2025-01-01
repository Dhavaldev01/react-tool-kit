import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import { addNewProduct, fetchListOfProduct } from "./api";
import { useState } from "react";


function ReactQuaryDemo (){

    const [productTitle, setProductTitle] = useState('');

    const getQueryClient = useQueryClient()

    const {data : ProductList, isLoading} = useQuery({
        queryKey : ['productList'],
        queryFn : () => fetchListOfProduct()
    });

    const {mutateAsync : handleAddNewProductMutation} = useMutation({
        mutationFn : addNewProduct,
        onSuccess : ()=> {
            getQueryClient.invalidateQueries(['productList']);
        }
    })

    async function handleAddNewProduct(){
        await handleAddNewProductMutation(productTitle)
        setProductTitle("");
    }

    if(isLoading) return <h1>Loading Products ! Please wait </h1>
// console.log(ProductList)
    return (
        <div>
            <h1>React Quary Demo</h1>
            <div>
                <input 
                name ="name" 
                value={productTitle} 
                onChange={(event) => setProductTitle(event.target.value)} 
                placeholder="Enter Product title"
                />
                <button 
                onClick={handleAddNewProduct}
                disabled={productTitle.trim() === ""} 
                type="button"
                >
                    Add New Product
                </button>
            </div>
            <ul>{
                ProductList?.length > 0 ? 
                ProductList.map(product => <li key={product.id}>{product.title}</li>)
                : <h3>No Product Found</h3>
                }</ul>
        </div>
    )
}

export default ReactQuaryDemo;