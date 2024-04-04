import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
function Test(){
    return(
        <div>
            <FaHouseChimneyUser size={32} color="green"/>
            <FaFacebook size={40} color="blue" />
            <h1 className="text-danger bg-success ">this is a component</h1>
            <h5>this is h5</h5>
        </div>
    )
}

export default Test;