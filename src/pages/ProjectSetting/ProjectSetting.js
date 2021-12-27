import React from 'react'
import { Form, Input, Select, Button } from 'antd';
const { Option } = Select;

export default function ProjectSetting(props) {

    return (
        <div>
            <div className='d-flex justify-content-between' style={{ marginLeft: '7px', paddingTop: '10px' }}>
                <h3>Project Setting</h3>
            </div>
            <Form layout="vertical">
                <Form.Item label="Name">
                    <Input style={{ width: '40%' }} placeholder="Project Name" />
                </Form.Item>
                <Form.Item label="Name">
                    <Input style={{ width: '40%' }} placeholder="Project URL" />
                </Form.Item>
                <Form.Item name="" label="Category">
                    <Select defaultValue="Bussiness" style={{ width: '40%' }}>
                        <Option value="male">Bussiness</Option>
                        <Option value="female">Marketing</Option>
                        <Option value="other">Software</Option>
                    </Select>
                </Form.Item>
                <Form.Item style={{ width: '40%' }} name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item >
                    <Button>
                        Save
                    </Button>
                    <Button className='ml-3'>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
