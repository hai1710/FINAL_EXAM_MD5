import {useNavigate, useParams,} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export function Detail() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [tour, setTour] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/tuors/${id}`).then(response => {
            setTour(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, [id]);

    return (
        <>
            <h1>Thông tin chi tiết tour</h1>
            <ul>
                <li>Tên: {tour.title}</li>
                <li>Giá: {tour.price}</li>
                <li>Chi tiết: {tour.description}</li>
            </ul>
            <button onClick={() =>{navigate('/')}}>Trở lại</button>
        </>
    );
}