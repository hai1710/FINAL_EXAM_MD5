import {Link, useNavigate} from "react-router-dom";

export function Register() {
    const navigate = useNavigate();
    return (
        <>
            <h1>đăng kí</h1>
            <button onClick={() => {navigate('/')}}>chim cút</button>
        </>
    )
}