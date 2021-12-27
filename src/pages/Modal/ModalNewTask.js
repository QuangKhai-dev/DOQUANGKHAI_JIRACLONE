import React, { useEffect, useRef } from 'react'
import { Form, Input, Select, Button } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createProject_action, getProjectCategory_action } from '../../redux/actions/JiraCloneActions';
const { Option } = Select;

export default function ModalNewTask(props) {
    const arrProjectCategory = useSelector(state => state.ProjectCategory.arrProjectCategory)
    const dispatch = useDispatch()



    const editorRef = useRef(null);
    const formik = useFormik({
        initialValues: {
            projectName: '',
            description: '',
            categoryid: 1,
        },
        onSubmit: values => {
            dispatch(createProject_action(values))
        },
    });
    useEffect(() => {
        dispatch(getProjectCategory_action())
    }, [])

    return (
        <div show="false" className="modal fade pt-3" id="modalNewTask">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                        <h4 className="modal-title">Create issue</h4>
                        <Button danger type="primary" data-dismiss="modal">x</Button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                        <Form onFinish={formik.handleSubmit} layout="vertical">
                            <Form.Item label="PROJECTNAME">
                                <Input onChange={formik.handleChange} onBlur={formik.handleBlur} name="projectName" placeholder="Project Name" />
                            </Form.Item>
                            <Form.Item label="DESCRIPTION">
                                <Editor name="description"
                                    apiKey="swwa9xliphk6eyhb3wegeuf39jsdmrgmnhkzd8r8khij1zgp"
                                    onInit={(editor) => editorRef.current = editor}
                                    onEditorChange={(value) => { formik.setFieldValue("description", value) }}
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
                            <Form.Item label="CATEGORYID">
                                <Select onChange={(value) => { formik.setFieldValue('categoryid', value) }} name="categoryid" defaultValue="Dự Án Web">
                                    {arrProjectCategory.map((project, index) => {
                                        return (<Option value={project.id} key={index}>{project.projectCategoryName}</Option>)
                                    })
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item label="PRIORITY">
                                <Select onSelect={formik.handleChange} name="priority" defaultValue="MEDIUM">
                                    <Option value="male">MEDIUM</Option>
                                    <Option value="female">LOWEST</Option>
                                    <Option value="4">LOW</Option>
                                    <Option value="3">HIGH</Option>
                                    <Option value="2">HIGHEST</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType='submit' type='primary'>
                                    Save
                                </Button>
                                <Button danger type="primary" data-dismiss="modal" className='ml-3'>
                                    Cancel
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div >
    )
}