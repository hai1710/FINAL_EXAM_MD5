
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./page/Home";
import {Login} from "./page/Login";
import {Register} from "./page/Register";
import {ListStudent} from "./page/List";
import {Detail} from "./page/Detail";
import EditStudent from "./page/edit-student";
import CreateStudent from "./page/create-student";
import {DeleteStudent} from "./page/delete-student";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home/>}>
          <Route path={'/'} element={<ListStudent/>}/>
          <Route path={'/detail/:id'} element={<Detail/>}/>
          <Route path={'/create-student'} element={<CreateStudent/>}/>
          <Route path={'/edit/:id'} element={<EditStudent/>}/>
          <Route path={'/delete/:id'} element={<DeleteStudent/>}/>
        </Route>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
