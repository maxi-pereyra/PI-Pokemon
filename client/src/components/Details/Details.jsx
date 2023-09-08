import { pokemonDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import CardPokemon from "../Card/CardPokemon";

const Detail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
   // const { name, image, height, weight, life, attack, defense, speed, types } = useSelector(state => state.pokemon);
   /*  const pokemon = useSelector((state)=> state.pokemonDetail);
    console.log(pokemon); */
    const {pokemons} = useSelector((state)=>state.Pokemon)
    

    useEffect(()=>{
        dispatch(pokemonDetail(id))

    },[dispatch,id])

    return(
        <div>
            <Navbar/>
            <div>
            <h1>nombre:{pokemons?.name}</h1>
                
            </div>
        </div>
    );
}
export default Detail;