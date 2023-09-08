import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, pokemonDetail, getPokemonName } from "../../redux/actions";
import CardPokemon from "../Card/CardPokemon";
import Navbar from "../Navbar/Navbar"; 


const Pokemon = () => {
    const  dispatch = useDispatch();
    const [name,setName] = useState('');
    const pokemons = useSelector((state)=>state.Pokemon)

    const handleChange = (event) => {
        setName(event.target.value.toLowerCase());
    };

    const onSearch = async (event) => {
        event.preventDefault();
        dispatch(getPokemonName(name))
    };

    const loadAllPokemon = () => {
        dispatch(getPokemon());
        setName('');
    };


    useEffect(()=>{
        dispatch(getPokemon());

    },[dispatch])//array de dependencias 


    return(
        <div>
            <Navbar  handleChange={handleChange} onSearch={onSearch} loadAllPokemon={loadAllPokemon}></Navbar>
            <h1>personajes!!</h1>
            {
                <div>
                {
                    pokemons?.map(({ name, id, image, height, weight, life, attack, defense, speed, types }) => {
                    return (
                        <CardPokemon
                        key={id}//condicional chaining
                        id={id}
                        name={name}
                        image={image}
                        height={height}
                        weight={weight}
                        life={life}
                        attack={attack}
                        defense={defense}
                        speed={speed}
                        types={types}
                        />
                    )
                    })
                }
            </div>
            }
        </div>
    )
};

export default Pokemon;