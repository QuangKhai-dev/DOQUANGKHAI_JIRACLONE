import React from 'react'
import './HomeIndex.css'
import BoardJira from '../../component/BoardJira/BoardJira';
import { Input, Space } from 'antd';
import { Button } from 'antd';
const { Search } = Input;
export default function HomeIndex() {

    return (
        <div >
            <div className='d-flex justify-content-between' style={{ marginLeft: '7px', paddingTop: '10px' }}>
                <h3>Kanban board</h3>
                <div>
                    <Button type='primary' className='mx-1'>Support</Button>
                    <Button type='primary' className='mx-1'>Spotify</Button>
                    <Button type='primary' className='mx-1'>Tertis</Button>
                    <Button type='primary' className='mx-1'>Storybook</Button>
                    <Button type='primary' className='mx-1'>Tweet</Button>
                    <Button type='primary' className='mx-1'>Source Code</Button>
                </div>
            </div>
            <div className='d-flex align-items-center' style={{ marginLeft: '9px' }}>
                <Space direction="vertical">
                    <Search placeholder="input search text" style={{ width: 200 }} />
                </Space>
                <div className='ml-2'>
                    <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src="./img/avatar.jpg" alt="" />
                </div>
                <div className='ml-2'>
                    <Button className='mr-3' type="primary">Only My Issues</Button>
                    <Button type="primary">Ignore Resolved</Button>
                </div>
            </div>
            <div className='mt-3'>
                <BoardJira />
            </div>
        </div>
    )
}
