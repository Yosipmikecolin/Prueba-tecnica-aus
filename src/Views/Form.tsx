import {FormLogin,Button,Input,Error,Loading,FormData,Label} from "../Styles/Form.styles";
import { Formik } from "formik";
import { getUser } from "../Services/getUser";
import { useContext, useState } from "react";
import { store } from "../Provider/provider";






function Form (){


    const [load,SetLoad] = useState(false);
    const [message,SetMessage] = useState("");
    const {user,dataUser,SetUser,SetDataUser} = useContext(store);
  
    
  


 

return(


user ?
<FormData>
<h1>Datos de usuario</h1>
<Label>Edad: {dataUser.DataBeanProperties.Age}</Label>
<Label>EntityName: {dataUser.DataBeanProperties.EntityName}</Label>
<Label>IDAccount: {dataUser.DataBeanProperties.IDAccount}</Label>
<Label>IDFunctionalLn: {dataUser.DataBeanProperties.IDFunctionalLn}</Label>
<Label>Name1: {dataUser.DataBeanProperties.Name1}</Label>
<Label>Nit: {dataUser.DataBeanProperties.Nit}</Label>
<Label>RoleID: {dataUser.DataBeanProperties.RoleID}</Label>
<Label>Since: {dataUser.DataBeanProperties.Since}</Label>
<Label>Surname1: {dataUser.DataBeanProperties.Surname1}</Label>
<Label>eMail: {dataUser.DataBeanProperties.eMail}</Label>
<Label>Msg:  {dataUser.DataBeanProperties.msg}</Label>
</FormData>
:

<Formik 

initialValues={{username:"capacitacion@gmail.com",password:"Brunofernando123*"}}

onSubmit={async (values,{resetForm})=>{

    if(!values.username || !values.password){
    SetMessage("llena todos los campos")
    }else{
    resetForm();
    SetLoad(true)
    const {msg,Account} = await getUser(values.username,values.password);
    SetLoad(false);
    if(Account){
    localStorage.setItem("username",values.username);
    localStorage.setItem("password",values.password);
    SetUser(true);
    SetDataUser(Account);
    }else{
    SetMessage(msg)
    }
    }}



}>

{({handleSubmit,handleChange,values})=>(

<FormLogin onSubmit={handleSubmit}>
<h1>Iniciar sesión</h1>
<Input type="text" name="username" placeholder="username" value={values.username} onChange={handleChange}/>
<Input type="password" name="password" placeholder="password" value={values.password} onChange={handleChange}/>
<Error>{message}</Error>
<Button type="submit">{load ? <Loading/> : "Iniciar sesión"}</Button>
</FormLogin>


)}

</Formik>

       
    )

}





export default Form;