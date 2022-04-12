import styled from "styled-components";

export  const Nav = styled.nav`
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

export const ButtonClose = styled.button`
padding:10px;
background-color:#332FD0;
border:none;
font-size:18px;
border-radius:5px;
color:#fff;
cursor:pointer;
`;