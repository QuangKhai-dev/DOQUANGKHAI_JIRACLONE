import React from 'react'
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined, GithubOutlined, FacebookOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { signin_action } from '../../redux/actions/JiraCloneActions';


export default function Login(props) {
    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required("vui lòng nhập email").email("email chưa đúng định dạng"),
            password: Yup.string().required("vui lòng nhập mật khẩu").min(6, "vui lòng nhập từ 6 ký tự trở lên").max(11, "vui lòng không nhập quá 11")
        }),
        onSubmit: (values) => {
            const { email, password } = values
            dispatch(signin_action(email, password))
        },
    });

    return (
        <form className='Container' onSubmit={formik.handleSubmit} >
            <div style={{ height: '100vh' }} className='d-flex flex-column align-items-center justify-content-center'>
                <h3 className="text-center">Login Jira</h3>
                <div className="form-group">
                    <Input type="text" onChange={formik.handleChange} size="large" onBlur={formik.handleBlur} name='email' placeholder="Email" prefix={<UserOutlined />} />
                    {formik.errors.email && formik.touched.email ? (
                        <div className='text-danger text-center mt-2' style={{ fontSize: '16px' }}>{formik.errors.email}</div>) : ''}
                </div>

                {formik.errors.username && formik.touched.username ? <div>{formik.errors.username}</div> : null}
                <div className="form-group">
                    <Input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' size="large" placeholder="Password" prefix={<LockOutlined />} />
                    {formik.errors.password && formik.touched.password ? (
                        <div className='text-danger text-center mt-2' style={{ fontSize: '16px' }}>{formik.errors.password}</div>) : null}
                </div>
                <div className="form-group">
                    <Button htmlType='submit' type="primary" size="large">Login</Button>
                </div>
                <div className="social">
                    <Button size='large' icon={<GithubOutlined />} style={{ fontSize: '30px', padding: '10px', borderRadius: '50%', margin: '10px' }}>
                    </Button>
                    <Button size='large' icon={<FacebookOutlined />} style={{ fontSize: '30px', padding: '10px', borderRadius: '50%', margin: '10px' }}>
                    </Button>
                </div>
            </div>

        </form >
    )
}




