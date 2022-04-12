import { createContext, useState } from "react";

const store = createContext();


function Provider({children}){
    const [user,SetUser] = useState(false);
    const [dataUser,SetDataUser] = useState({});

    return (
    <store.Provider value={{user,dataUser,SetUser,SetDataUser}}>
    {children}
    </store.Provider>
    )
    }  


export {Provider,store};