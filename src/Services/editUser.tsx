import {AxiosRequestConfig} from "axios";
import axios from "axios";



export const editUser = async (name : String,value : String,description : String, id : Number) => {

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
            IDPropiedades: 42,
            Atributo: "sdsd"
            },
            DataBeanName: "com.admin.bean.Propiedades"
            }
            ]
           }
           
            
    
    }

       
  const res = await axios(axiosRequestConfiguration)
  return res.data.DataBeanProperties

}