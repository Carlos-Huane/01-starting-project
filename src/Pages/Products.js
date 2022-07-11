import { Link } from "react-router-dom";
const Products = () => {
    return (
        <div>
            <h1>The Products Page</h1>
            <ul>
                <Link to="/product/book"> <li>A Book</li> </Link>
                <Link to="/product/carpet"><li >A Carpet</li> </Link>
                <Link to="/product/course-online"><li>A Course Online</li> </Link>
            </ul>  
        </div>
    ) 
}
export default Products;