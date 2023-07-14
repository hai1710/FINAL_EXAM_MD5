import {useParams, Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export function DeleteStudent() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState({});
    const handleDelete = () => {
        axios.delete(`http://localhost:3001/tuors/${id}`).then(response => {
            console.log(response.data);
            alert("Success");
            // Redirect to student list page after deleting
        navigate("/")
        }).catch(error => {
            console.log(error);
        });
    };
    useEffect(() => {
        axios.get(`http://localhost:3001/tuors/${id}`).then(response => {
            setTour(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, [id]);

    return (
        <>
            <h1>Xác nhận xóa Tour</h1>
            <p>Bạn có chắc chắn muốn xóa tour này?</p>
            <ul>
                <li>Tên: {tour.title}</li>
                <li>Giá: {tour.price}</li>
                <li>Chi tiết: {tour.description}</li>
            </ul>
            <button onClick={handleDelete}>Xóa</button>
            <button onClick={() => {navigate("/")}}>Hủy</button>
        </>
    );
}