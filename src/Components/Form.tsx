import {FormLogin,Button,Input,Error,Loading} from "../Styles/Form.styles";
import { Formik } from "formik";
import { getUser } from "../Services/getUser";
import { useState } from "react";



function Form (){


    const [load,SetLoad] = useState(false);
    const [message,SetMessage] = useState("");

return(


<Formik 

initialValues={{username:"",password:""}}

onSubmit={async (values,{resetForm})=>{

    if(!values.username || !values.password){
    SetMessage("llena todos los campos")
    }else{
    resetForm();
    SetLoad(true)
    const {msg,Account} = await getUser(values.username,values.password);
    SetLoad(false);
    if(Account){
    console.log(Account)
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