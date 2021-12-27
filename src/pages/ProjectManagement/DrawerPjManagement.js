import React, { useEffect, useState } from 'react'
import { Space, Drawer, Form, Button, Col, Row, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { getProjectCategory_action, updateProject_action } from '../../redux/actions/JiraCloneActions';
import { useFormik } from 'formik';

const { Option } = Select;

export default function DrawerPjManagement() {
    // Của Drawer
    const arrProjectCategory = useSelector(state => state.ProjectCategory.arrProjectCategory)
    const { visible, arrDrawer } = useSelector(state => state.DrawerProjectReducer)
    const { id, projectName, creator, description, categoryId } = arrDrawer
    const dispatch = useDispatch();
    const [state, setstate] = useState(false)

    const onClose = () => {
        dispatch({ type: "CLOSE_DRAWER" })
        // window.location.reload()

        return visible

    };

    const formik = useFormik({
        initialValues: {
            id: id,
            projectName: projectName,
            creator: creator,
            description: description
        },
        onSubmit: values => {
            dispatch(updateProject_action(values))
            console.log(values)
        },
    });

    useEffect(() => {
        dispatch(getProjectCategory_action())

    }, [])


    return (
        <div>
            <Drawer
                title="Create a new account"
                width={720}
                onClose={() => { onClose() }}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <Form layout="vertical" hideRequiredMark onFinish={formik.handleSubmit}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                name="id"
                                label="Id"
                                initialValue={id}
                            // rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </Form.Item>
                            {/* <input type="text" value={id} /> */}
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="projectName"
                                label="Project Name"
                                initialValue={projectName}
                            // rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="creator"
                                label="creator"
                                initialValue={creator?.name}
                            // rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Description"
                            >
                                <Editor name="description"
                                    apiKey="swwa9xliphk6eyhb3wegeuf39jsdmrgmnhkzd8r8khij1zgp"
                                    onEditorChange={(value) => { formik.setFieldValue("description", value) }}
                                    initialValue={description}
                                    init={{
                                        height: 250,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar: 'undo redo | formatselect | ' +
                                            'bold italic backcolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                            </Form.Item>
                            <Form.Item label="CATEGORYID"

                            >
                                <Select onChange={(value) => { formik.setFieldValue('categoryid', value) }} name="categoryid" defaultValue={categoryId} >
                                    {arrProjectCategory.map((project, index) => {
                                        return (<Option value={project.id} key={index}>{project.projectCategoryName}</Option>)
                                    })
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col>
                            <Form.Item>
                                <Space>
                                    <Button onClick={() => { onClose() }}>Cancel</Button>
                                    <Button htmlType='submit' type="primary">
                                        Submit
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </div >
    )
}
