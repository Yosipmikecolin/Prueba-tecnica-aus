import {AxiosRequestConfig} from "axios";
import axios from "axios";



export const getElements = async () => {

    const axiosRequestConfiguration : AxiosRequestConfig = {

        baseURL:"http://adminco.orangecloud.com.co/jsserver",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        method:"POST",
        data:{
            IDClient: "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
            ServiceName: "AdminService",
            WSToken: "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
            MethodHash: "java.util.List_getPropiedadesCatalogPorPropiedad_String_Object_Number", 
            ArgumentList: [
            null, 
            null, 
            null
            ]
            }
            
    
    }

       
  const res = await axios(axiosRequestConfiguration)
  return res.data.DataBeanProperties.ObjectValue

}