import { useEffect, useState } from "react";
import styled from "styled-components";
import { getElements } from "../Services/getElements";
import {Loading} from "../Styles";
import IconDetail from "../Img/ver.png";
import IconClose from "../Img/close.png";
import { findUser } from "../Services/findUser";


function TableElements(){
    const [data,SetData] = useState([]);
    const [user,SetUser] = useState(undefined);

    useEffect(()=>{
    Load()
    },[]);


    async function Load(){
    const res = await getElements();
    SetData(res);
    }

    async function DetailUser(id){

        const res = await findUser(id);
        console.log(res)
        SetUser(res)
    }


    return (

        user ? 
        <Detail>
            <h4>Nombre : {user.Nombre}</h4>
            <h4>Descripcion : {user.Descripcion}</h4>
            <h4>IDPerfilBanco : null</h4>
            <h4>IDPropiedades : {user.IDPropiedades}</h4>
            <h4>Since : {user.Since}</h4>
            <h4>Valor : {user.Valor}</h4>
            <ButtonClose type="submit" onClick={()=>{SetUser(undefined)}}><img src={IconClose} width="40" alt="close"/> </ButtonClose>
        </Detail>
        :
        data.length ? 
        <Table>
        <thead>
        <tr>
        <td>Descripcion</td>
        <td>Estado</td>
        <td>IDPropiedades</td>
        <td>Nombre</td>
        <td>Since</td>
        <td>Valor</td>
        <td>Ver</td>
        </tr>
        </thead>
        <tbody>

                           

{data.map((item,index)=>{
    return (

        <tr key={index}>
        <td>{item.DataBeanProperties.Descripcion}</td>
        <td>{item.DataBeanProperties.Estado}</td>
        <td>{item.DataBeanProperties.IDPropiedades}</td>
        <td>{item.DataBeanProperties.Nombre}</td>
        <td>{item.DataBeanProperties.Since}</td>
        <td>{item.DataBeanProperties.Valor}</td>
        <td onClick={()=>{DetailUser(item.DataBeanProperties.IDPropiedades)}}><img  style={{cursor:"pointer"}} src={IconDetail} width="70" alt="detail"/></td>
        </tr>
    )
    })}


            
         
            </tbody>
        </Table>

:<Loading/>
    )
}


const Table = styled.table`

margin:auto;
margin-top:50px;
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
    }

  

   
   
}
`;



const Detail = styled.div`
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



const ButtonClose = styled.button`
position:absolute;
right:5px;
top:5px;
background:none;
border:none;
cursor:pointer;
`;
export default TableElements;