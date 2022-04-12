import {AxiosRequestConfig} from "axios";
import axios from "axios";



export const createUser = async (name : String,value : String,description : String,state : String) => {

    const axiosRequestConfiguration : AxiosRequestConfig = {

    baseURL:"http://adminco.orangecloud.com.co/jsserver",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    method:"POST",
    data:{
    IDClient: "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
    ServiceName: "AdminService",
    WSToken: "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
    MethodHash: "com.admin.bean.Propiedades_updatePropiedades_com.admin.bean.Propiedades",
    ArgumentList: [
    {
    DataBeanProperties: {
    Nombre: name,
    Valor: value,
    Descripcion: description,
    IDPropiedades: null,
    Estado:state,
    },
    DataBeanName: "com.admin.bean.Propiedades"
    }
    ]
    }}

       
    const res = await axios(axiosRequestConfiguration)
    return res.data.DataBeanProperties

}