import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <div>
            <h1>POKEMON!</h1>
            <button>
                <Link to='/home'>ingresar</Link>
            </button>
        </div>
    )
};

export default LandingPage;