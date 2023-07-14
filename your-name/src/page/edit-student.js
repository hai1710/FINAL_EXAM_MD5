import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function EditStudent(){
    const {id} = useParams();
    const [tour, setTour] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/tuors/${id}`).then(response => {
            setTour(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, [id]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setTour(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3001/tuors/${id}`, tour).then(response => {
            console.log(response.data);
            navigate("/")
        }).catch(error => {
            console.log(error);
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Tên:</label>
                <input type="text" id="name" name="name" value={tour.title} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="price">Giá:</label>
                <input type="text" id="price" name="price" value={tour.price} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="description">Mô Tả:</label><br/>
                <input type="textarea" id="description" name="description" value={tour.description} onChange={handleInputChange} />
            </div>

            <button type="submit">Update</button>
            <button onClick={() =>{navigate('/')}}>Hủy</button>
        </form>
    )
}