import styled from "styled-components";


export const Table = styled.table`

margin:auto;
margin-top:50px;
text-align:center;
*{
padding:10px;
}

thead{
background-color:#1B1A17;
color:#fff;
}

tbody{
background-color:#332FD0;
color:#fff;
   
}

td{
border:solid 2px #000;
}


@media (max-width:700px){
    
width:100%;
thead{
display:none;
}

tbody{
background:none;
}
   
tr {
display:flex;
flex-direction:column;
margin:40px 0px;  
}

td{
border:none;
border-bottom:solid 2px #000;
margin-top:20px;
}

tr{
background-color:#332FD0;
font-size:20px;
border-radius:5px;
}}
`;



export const Detail = styled.div`
width:500px;
padding:20px;
border-radius:5px;
background-color:orange;
margin:auto;
margin-top:100px;
font-size:20px;
color:#fff;
background-color:#332FD0;
position:relative;
`;



export const ButtonClose = styled.button`
position:absolute;
right:5px;
top:5px;
background:none;
border:none;
cursor:pointer;
`;



export const CreateUser = styled.button`
background-color:#1B1A17;
color:#fff;
padding:20px;
margin:auto;
font-size:18px;
border:none;
border-radius:5px;
display:block;
margin-top:40px;
cursor:pointer;
`;



export const Form = styled.form`
width:400px;
padding:20px;
background-color:#1B1A17;
margin:auto;
margin-top:40px;
border-radius:5px;

h1{
color:#fff;
}

@media (max-width:500px){
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

export const Button2 = styled.button`
width:100%;
font-size:20px;
padding:15px;
background-color:#332FD0;
color:#fff;
border:none;
margin-top:20px;
border-radius:5px;
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