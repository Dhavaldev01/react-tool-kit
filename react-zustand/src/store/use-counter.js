import {create} from 'zustand';

const useCounter = create((set) => {

    return {
        count : 0,
        listofProducts : [],
        actions : {
            handleIncrementCount : () => 
                set((state) => (
                {
                    count : state.count + 1 ,
    
                }
            )),
            fetchListofProducts : async () =>{
                const ApiResponse =  await fetch ('https://dummyjson.com/products');
                const Response =  await ApiResponse.json()
    
                set({
                    listofProducts : Response?.products,
                })
            }

        },

        // handleIncrementCount : () => 
        //     set((state) => (
        //     {
        //         count : state.count + 1 ,

        //     }
        // )),
        // fetchListofProducts : async () =>{
        //     const ApiResponse =  await fetch ('https://dummyjson.com/products');
        //     const Response =  await ApiResponse.json()

        //     set({
        //         listofProducts : Response?.products,
        //     })
        // }
    }
});

export const useActions = () => useCounter(state => state.actions);

export default useCounter;