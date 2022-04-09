import { Fragment } from "react";
import Header from "./Components/Header";
import {Route,Routes} from "react-router-dom";
import Form from "./Components/Form";


function App():JSX.Element {
  return (

    <Fragment>
    <Header/>

    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/elementos" element={<h1>Elementos</h1>}/>
    </Routes>
    
    </Fragment>
  );
}

export default App;
