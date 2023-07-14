import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function ListStudent(){
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/tuors').then(res => {
            setList(res.data)
        })
    },[])
    return(
        <>
            <h1>Danh sách tour Du lịch</h1>
            <table border={'1px'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th colSpan={2}></th>
                </tr>
                </thead>
                <tbody>
                {list.map((item,key) => (
                    <tr key={key}>
                        <td>{item.id}</td>
                        <td><Link to={`/detail/${item.id}`}>{item.title}</Link></td>
                        <td>{item.price}</td>
                        <td>
                            <button><Link to={`/edit/${item.id}`}>Edit</Link></button>
                        </td>
                        <td>
                           <button><Link to={`/delete/${item.id}`}>Delete</Link></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}