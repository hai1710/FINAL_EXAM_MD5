import {useNavigate} from "react-router-dom";

export  function Login(){
    const navigate = useNavigate();
    return(
        <>
            <button onClick={() =>{ navigate('/')}}> chim cut</button>|
            <button onClick={() =>{ navigate('/register')}}>làm thành viên</button>
            <h1>login</h1>
        </>
    )
}