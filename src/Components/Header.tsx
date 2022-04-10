import { useContext } from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { store } from "../Provider/provider";

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


const Nav = styled.nav`
width:100%;
padding:15px;
background-color:#1B1A17;
display:flex;
justify-content:space-between;
align-items:center;
font-size:20px;


a.active{
color:#332FD0;
}

ul > li{
    display:inline-block;
    margin:0px 10px;
}

a{
    color:#fff;
}

`;

const ButtonClose = styled.button`
padding:10px;
background-color:#332FD0;
border:none;
font-size:18px;
border-radius:5px;
color:#fff;
cursor:pointer;
`;

export default Header;