import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({onSearch, handleChange, loadAllPokemon}) => {

    return (
        <nav>
            <div>
                <button onClick={loadAllPokemon} > reset pokemon</button>
                <div>
                    <Link to='/create'><button>crear</button></Link>
                    <SearchBar onSearch={onSearch} handleChange={handleChange}></SearchBar>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;