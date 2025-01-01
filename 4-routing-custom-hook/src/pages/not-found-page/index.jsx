import { Link } from "react-router-dom";



function NotFoundPage(){
    return(
        <div>
            <h3>This Page doesn't exist</h3>
            <Link to ="/recipe-list">Go TO Recipe List Page</Link>
        </div>
    )
}

export default NotFoundPage;