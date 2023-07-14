import Nav from "../comp/Nav";
import {Link, Outlet} from "react-router-dom";
import {Sidebar} from "../comp/Sidebar";

export function Home(){

    return(
        <>
            <Nav></Nav>
            <hr/>
            <Link to={'/'}>Danh Sách Tour</Link> |
            <Link to={'/create-student'}>thêm tour mới</Link> |
            <hr/>
            <Outlet>
            </Outlet>
            <hr/>
            <Sidebar></Sidebar>
        </>
    )
}