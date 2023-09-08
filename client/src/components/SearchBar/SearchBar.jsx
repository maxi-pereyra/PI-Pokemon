const SearchBar = ({ onSearch , handleChange}) => {
    return (
        <form>
            <input onChange={handleChange} placeholder='Buscar pokemon' type="text" />
            <button onClick={onSearch} ></button>
        </form>
    )   
}

export default SearchBar;