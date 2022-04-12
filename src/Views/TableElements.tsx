import { Fragment, useEffect, useState } from "react";
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
import {Button,Button2,ButtonClose,CreateUser,Detail,Error,Form,Input,Table} from "../Styles/Table.styles";



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


    //AUTHENTICATE USER
    useEffect(()=>{
    if(!auth.user){
    navigation("/")
    }},[auth,navigation])


    //GET ITEMS
    async function Load(){
    const res = await getElements();
    SetData(res);
    }

    //GET ITEMS
    async function DetailUser(id :Number){
    const res = await findUser(id);
    SetUser(res)
    }

    //DELETE USER
    async function DeleteUser(id :Number){
    await deleteUser(id);
    SetDetect(!detect);
    }


    //EDIT USER
    async function EditUser(e : any){
    e.preventDefault();
    const {name,description,value,state,id} = values;
    await editUser(name,value,description,state,Number(id));
    SetDetect(!detect);
    SetShow(false);
    SetEdit(false);
    SetValues({name:"",value:"",description:"",id:"",state:""});
    }


    //CREATE A USER
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



export default TableElements;