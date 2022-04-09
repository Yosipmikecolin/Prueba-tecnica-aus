import styled from "styled-components";


export const FormLogin = styled.form`
width:350px;
padding:20px;
background-color:#1B1A17;
margin:auto;
margin-top:100px;
border-radius:5px;

h1{
color:#fff;
}

@media (max-width:350px){
width:100%;
h1{
text-align:center;
}
}
`;


export const Input = styled.input`
width:100%;
border:none;
border-radius:5px;
padding:15px;
font-size:18px;
margin-top:30px;
`;



export const Button = styled.button`
width:100%;
font-size:20px;
padding:15px;
background-color:#332FD0;
color:#fff;
border:none;
border-radius:5px;
margin-top:50px;
cursor:pointer;
transition:500ms ease;
display:flex;
justify-content:center;

&:hover{
  background-color:#4b48f8;
}

`;


export const Error = styled.p`
color:#B20600;
font-size:15px;
margin-top:3px;
`;

export const Loading = styled.div`
border: 5px solid #332FD0;
border-radius: 50%;
border-top: 5px solid #ffff;
width: 30px;
height: 30px;
-webkit-animation: spin 1s linear infinite; 
animation: spin 1s linear infinite;
@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
`;


export const Alert = styled.div`

background-color:red;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 800px;
margin: auto;

top:100px;
width:300px;
height:60px;
border-radius:5px;
padding:10px;
text-align:center;
color:#fff;
font-size:18px;
`;