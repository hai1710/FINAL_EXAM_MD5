import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function CreateStudent(){
    const navigate = useNavigate();
    return(
        <>
            <h1>Create new Student</h1>
            <Formik initialValues={{
                name: '',
                price: '',
                description: '',
            }} onSubmit={(values) => {
                axios.post('http://localhost:3001/tuors',values).then(()=>{
                    alert('success');
                    navigate('/')
                })
            }}>
                <Form>
                    <label id={'title'}>Tên: </label>
                    <Field name={'title'}></Field><br/>
                    <label id={'price'}>Giá: </label>
                    <Field name={'price'}></Field><br/>
                    <label id={'description'}>Mô tả: </label><br/>
                    <Field as={'textarea'} name={'description'}></Field><br/>
                    
                    <button>Thêm mới</button>
                    <button><Link to={'/'}>Hủy</Link></button>

                </Form>
            </Formik>
        </>
    )
}