import { Fragment, useContext, useEffect, useState } from "react";
import Header from "./Components/Header";
import {Route,Routes} from "react-router-dom";
import Form from "./Views/Form";
import { getUser } from "./Services/getUser";
import { store } from "./Provider/provider";
import {Loading} from "./Styles/";
import TableElements from "./Views/TableElements";


function App():JSX.Element {


  const {SetUser,SetDataUser} = useContext(store);
  const [load,SetLoad] = useState(true);



    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if(username && password){
    loadData(username,password);
    }else{
    SetLoad(false);
    }

    });


    async function loadData(username : String,password : String){
    const {Account} = await getUser(username,password);
    SetLoad(false);
    SetUser(true);
    SetDataUser(Account);
    
    

  }


  return (
    load ? <Loading/>
    :
    <Fragment>
    <Header/>
    <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path="/elementos" element={<TableElements/>}/>
    </Routes>
    </Fragment>
  );
}

export default App;
