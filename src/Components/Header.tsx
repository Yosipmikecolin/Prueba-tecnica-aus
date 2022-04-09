import {NavLink} from "react-router-dom";
import styled from "styled-components";

function Header(){


    return (

        <Nav>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/elementos">Elementos</NavLink></li>
            </ul>
        </Nav>
    )

}


const Nav = styled.nav`
width:100%;
padding:15px;
background-color:#1B1A17;
display:flex;
justify-content:center;
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

export default Header;