import { useLocation } from "react-router-dom";


function ReceipeList(){

    const loaction = useLocation();
    console.log(loaction)
    return (
        <div>
            <h1>Receipe List Page</h1>
        </div>
    )
}

export default ReceipeList;