import { Link } from "react-router-dom";

const NavigationHeader = () => {
    return (
        <div className="container col-lg-12">
            <div className="container row mt-3 bg-dark p-3">
                <div className="pr-3">
                    <Link to="/" className="text-white"> STUDENT </Link>
                </div>
                <div className="pr-3">
                    <Link to="/payment" className="text-white"> PAYMENT </Link>
                </div>
                <div className="pr-3">
                    <Link to="/report" className="text-white"> REPORT </Link>
                </div>
            </div>
        </div>
    )
}

export default NavigationHeader;