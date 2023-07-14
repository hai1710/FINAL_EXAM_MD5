import {Link, useNavigate} from "react-router-dom";


export default function Nav() {
    const navigate = useNavigate();
    return (
        <>
            Nav |
            <button onClick={() => {
                navigate('/login')
            }}>login</button>
        </>
    )
}