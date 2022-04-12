import { useContext } from "react";
import {NavLink} from "react-router-dom";
import { store } from "../Provider/provider";
import {ButtonClose,Nav} from "../Styles/Header.styles";

function Header(){

    const {user,SetUser,SetDataUser} = useContext(store);

    function CloseSesion(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    SetUser(false);
    SetDataUser({});
    window.location.reload();
    }


    return (

    <Nav>
    <ul>
    <li><NavLink to="/">Inicio</NavLink></li>
    {user && <li><NavLink to="/elementos">Elementos</NavLink></li>}      
    </ul>
    {user && <ButtonClose onClick={CloseSesion}>Cerrar sesión</ButtonClose>}
    </Nav>
    )

}




export default Header;