import { useEffect, useState } from "react"



export default function Users(){

    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false)

    async function fetchAllUsers(){
        try {
            setLoading(true)
            const ApiResponse = await fetch('https://dummyjson.com/users');
            const result = await ApiResponse.json();

            if(result?.users){
                setUserList(result?.users);
                setLoading(false)
            }else{
                setUserList([])
                setLoading(false)
            }
            // console.log(result)
        } catch (error) {
            console.log(error);
        }
    }

// function handleFetchUser(){
//     fetchAllUsers()

// }

    // useEffect(()=>{
    //     fetchAllUsers()
    // },[]);

    console.log(userList);

    if(loading){
        return <h1>Fetching user Plaese wait</h1>
    }

    return <div>
        <h2>All Users Lists</h2>
        <button onClick={fetchAllUsers}>Fetch User List</button>
        <ul>
            {
                userList && userList?.length > 0 ?
                (
                    userList.map((userItem) => 
                    <li key={userItem?.id}> {userItem.firstName}</li>
                )
                ) : (<h1>No Users found Please Try Again</h1>)
            }
        </ul>
    </div>
}