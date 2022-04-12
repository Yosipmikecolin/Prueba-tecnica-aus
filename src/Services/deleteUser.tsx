import {AxiosRequestConfig} from "axios";
import axios from "axios";



export const deleteUser = async (id : Number) => {

    const axiosRequestConfiguration : AxiosRequestConfig = {

    baseURL:"http://adminco.orangecloud.com.co/jsserver",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    method:"POST",
    data:{
    IDClient: "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
    ServiceName: "AdminService",
    WSToken: "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
    MethodHash: "boolean_deletePropiedades_Number",
    ArgumentList: [id]
    }}

       
    const res = await axios(axiosRequestConfiguration)
    return res.data.DataBeanProperties

}