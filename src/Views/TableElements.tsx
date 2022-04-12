import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { getElements } from "../Services/getElements";
import {Loading} from "../Styles";
import IconDetail from "../Img/ver.png";
import IconClose from "../Img/close.png";
import { findUser } from "../Services/findUser";
import { deleteUser } from "../Services/deleteUser";
import { createUser } from "../Services/createUser";
import { editUser } from "../Services/editUser";
import IconDelete from "../Img/delete.png";
import IconEdit from "../Img/editar.png";
import { useContext } from "react";
import { store } from "../Provider/provider";
import { useNavigate } from "react-router-dom";



function TableElements(){
    const [data,SetData] = useState([]);
    const [user,SetUser] = useState({Nombre:"",Descripcion:"",IDPropiedades:"",Since:"",Valor:""});
    const [detect,SetDetect] = useState(false);
    const [show,SetShow] = useState(false);
    const [values,SetValues] = useState({name:"",value:"",description:"",id:"",state:""});
    const [error,SetError] = useState(false);
    const [edit,SetEdit] = useState(false);
    const auth = useContext(store);
const navigation = useNavigate();

    useEffect(()=>{
    Load()
    },[detect]);



    useEffect(()=>{
    if(!auth.user){
    navigation("/")
    }
    },[auth,navigation])


    async function Load(){
    const res = await getElements();
    SetData(res);
    }


    async function DetailUser(id :Number){
    const res = await findUser(id);
    SetUser(res)
    }


    async function DeleteUser(id :Number){
    await deleteUser(id);
    SetDetect(!detect);
    }

    async function EditUser(e : any){
        e.preventDefault();
        SetShow(false);
        const {name,description,value,state,id} = values;
        const res = await editUser(name,value,description,state,Number(id));
        console.log(res)
        SetDetect(!detect);
        SetShow(false);
        SetValues({name:"",value:"",description:"",id:"",state:""});
    }


    async function saveUser(e : any){
        e.preventDefault();
       if(!values.name || !values.description || !values.state || !values.id || !values.value){
        SetError(true);
       }else{
        const {name,description,value,state} = values;
        await createUser(name,value,description,state);
        SetDetect(!detect);
        SetShow(false);
        SetValues({name:"",value:"",description:"",id:"",state:""});
       }
    }


    return (

        
       
        (user.Nombre || user.Descripcion || user.Since || user.Valor) ? 
        <Detail>
            <h4>Nombre : {user.Nombre}</h4>
            <h4>Descripcion : {user.Descripcion}</h4>
            <h4>IDPerfilBanco : null</h4>
            <h4>IDPropiedades : {user.IDPropiedades}</h4>
            <h4>Fecha de creación : {user.Since}</h4>
            <h4>Valor : {user.Valor}</h4>
            <ButtonClose type="submit" onClick={()=>{SetUser({Nombre:"",Descripcion:"",IDPropiedades:"",Since:"",Valor:""})}}><img src={IconClose} width="40" alt="close"/> </ButtonClose>
        </Detail>
        :

        
      
        data.length ? 
        <Fragment>
        {show ?
        <Form onSubmit={(e)=>{edit ? EditUser(e) : saveUser(e)}}>
            <h1>{edit ? "Editar usuario" : "Crear usuario"}</h1>
            <Input type="text" name="name" value={values.name} placeholder="Nombre" onChange={(e)=>{SetValues({...values,name:e.target.value})}}/>
            <Input type="text" name="value" value={values.value} placeholder="Valor" onChange={(e)=>{SetValues({...values,value:e.target.value})}}/>
            <Input type="text" name="description" value={values.description} placeholder="Descripción" onChange={(e)=>{SetValues({...values,description:e.target.value})}}/>
            <Input type="number" name="id" value={values.id} placeholder="ID" onChange={(e)=>{SetValues({...values,id:e.target.value})}}/>
            <Input type="number" name="state" value={values.state} placeholder="Estado" onChange={(e)=>{SetValues({...values,state:e.target.value})}}/>
             {error && <Error>llena todos los campos</Error>}
            <Button>{edit ? "Editar usuario" : "Crear usuario"}</Button>
            <Button2 onClick={()=>{SetShow(false);SetEdit(false);SetValues({name:"",value:"",description:"",id:"",state:""})}}>Cerrar</Button2>
        </Form>
        :

        <Table>
        <thead>
        <tr>
        <td>ID</td>
        <td>Descripcion</td>
        <td>Estado</td>
        <td>Nombre</td>
        <td>Fecha de creación</td>
        <td>Valor</td>
        <td>Detalle</td>
        <td>Editar</td>
        <td>Delete</td>
        </tr>
        </thead>
        <tbody>

                           

{data.map((item,index)=>{
    const {DataBeanProperties} = item;
    const {Descripcion,Estado,IDPropiedades,Nombre,Since,Valor} = DataBeanProperties;
    return (

        <tr key={index}>
            
        <td>{IDPropiedades}</td>
        <td>{Descripcion}</td>
        <td>{Estado}</td>
        <td>{Nombre}</td>
        <td>{Since}</td>
        <td>{Valor}</td>
        <td onClick={()=>{DetailUser(IDPropiedades)}}><img  style={{cursor:"pointer"}} src={IconDetail} width="40" alt="detail"/></td>
        <td onClick={()=>{SetValues({name:Nombre,value:Valor,description:Descripcion,id:IDPropiedades,state:Estado});SetEdit(true);SetShow(true)}}><img  style={{cursor:"pointer"}} src={IconEdit} width="40" alt="edit"/></td>
        <td onClick={()=>{DeleteUser(IDPropiedades)}}><img  style={{cursor:"pointer"}} src={IconDelete} width="40" alt="delete"/></td>
        </tr>
        )
        })}

         </tbody>
        </Table>
        }
        
        {!show && <CreateUser onClick={()=>{SetShow(true)}}>Crear nuevo usuario</CreateUser>}
       
</Fragment>
:<Loading/>

    )
}


const Table = styled.table`

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



const CreateUser = styled.button`
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



 const Form = styled.form`
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


 const Input = styled.input`
width:100%;
border:none;
border-radius:5px;
padding:15px;
font-size:18px;
margin-top:30px;
`;



 const Button = styled.button`
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

const Button2 = styled.button`
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
export default TableElements;