import {AxiosRequestConfig} from "axios";
import axios from "axios";




export const getUser = async (username :String,password : String) => {

    const axiosRequestConfiguration : AxiosRequestConfig = {

        baseURL:"http://adminco.orangecloud.com.co/jsserver",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        method:"POST",
        data:{
        IDClient: "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
        ServiceName: "AdminService",
        WSToken: "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
        MethodHash: "com.advantage.bean.account.WorkSession_loguinUsuarioWS_String_String", 
        ArgumentList: [
        username, 
        password
        ]
        }}

       
  const res = await axios(axiosRequestConfiguration)
  return res.data.DataBeanProperties.ObjectValue.DataBeanProperties

}