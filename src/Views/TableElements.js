import { useEffect, useState } from "react";
import styled from "styled-components";
import { getElements } from "../Services/getElements";
import {Loading} from "../Styles";
import IconDetail from "../Img/ver.png";

function TableElements(){
    const [data,SetData] = useState([]);

    useEffect(()=>{
    Load()
    },[]);


    async function Load(){
    const res = await getElements();
    SetData(res);
    }

    function DetailUser(id){

        console.log(id)
    }


    return (
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
        <td onClick={()=>{DetailUser(item.DataBeanProperties.IDPropiedades)}}><img  style={{cursor:"pointer"}} src={IconDetail} width="50" alt="detail"/></td>
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

export default TableElements;