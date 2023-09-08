import { NavLink } from "react-router-dom";
import style from './CardPokemon.module.css';

const CardPokemon = ({ name, id, image, height, weight, life, attack, defense, speed, types })=>{
    return (
    <div className={style.container}>
        <h4>Nombre: {name}</h4>
        <h4>Tipo: {types}</h4>
        <h4>Ataque: {attack}</h4>
        <NavLink to={`/detail/:${id}`}>
           <img className={style.img} src={image} alt={name} />
        </NavLink>
    </div>
    )
}


export default CardPokemon;