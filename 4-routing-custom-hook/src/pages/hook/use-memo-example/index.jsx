import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseMemoExample(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [flag, setFlag] = useState(false)

    async function dataFech (){
        try {
            const ApiResponse =  await fetch('https://dummyjson.com/products');
            const result =  await ApiResponse.json();

            if(result && result?.products){
                setLoading(false)
                setData(result.products)
            }else{
                setData([]);
                // loading(false);
            }
            // console.log(result?.products);
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); 
        }
    }

    useEffect(()=> {
        dataFech();
    },[]);

    function fillterProductByPrice(getProducts){
        console.log("This Function id Getting Renderd")
        return  getProducts?.length > 0 
        ? getProducts.filter((singleProductItem) => singleProductItem.price > 10) : []
    }

    const memorizedVersion = useMemo(()=> fillterProductByPrice(data),[data] )


    if(loading) return <h1> Loading data Please Wait</h1>


    // console.log(data); 

    return (
        <div>
            <h1 style={{color : flag ? "red" : "black"}}>Use Memo</h1>
            <button onClick={()=> setFlag(!flag)}>Toggle Flag</button>
            <ul>
                {
                    memorizedVersion.map(item => <li>{item.title}</li>)
                }
            </ul>
        </div>
    )
}
export default UseMemoExample;