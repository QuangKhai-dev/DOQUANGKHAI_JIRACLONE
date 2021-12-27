import React, { useEffect } from 'react'
import { Table, Space, Tag, } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { deleteProject_action, getAllProject_action } from '../../redux/actions/JiraCloneActions';
import { useSelector } from 'react-redux';
import DrawerPjManagement from './DrawerPjManagement';



// function onChange(pagination, filters, sorter, extra) {
//     console.log('params', pagination, filters, sorter, extra);
// }

export default function ProjectManagement() {
    const { visible } = useSelector(state => state.DrawerProjectReducer)
    // Của Drawer


    const showDrawer = (id) => {
        dispatch({
            type: "OPEN_DRAWER",
            id,
            arr: arrAllProject
        }
        )
        // console.log(id)
    };

    //Của table
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            sorter: {
                compare: (a, b) => a.id - b.id,
            },
            sortDirection: ['descend'],
        },
        {
            title: 'Project Name',
            dataIndex: 'projectName',
            sorter: {
                compare: (a, b) => {
                    let item1 = a.projectName?.trim().toLowerCase()
                    let item2 = b.projectName?.trim().toLowerCase()
                    if (item2 < item1) {
                        return -1;
                    }
                    return 1;
                },

            },
        },
        {
            title: 'Category Name',
            dataIndex: 'categoryName',
            sorter: {
                compare: (a, b) => {
                    let item1 = a.categoryName?.trim().toLowerCase()
                    let item2 = b.categoryName?.trim().toLowerCase()
                    if (item2 < item1) {
                        return -1;
                    }
                    return 1;
                },
            },
        },
        {
            title: 'Creator',
            key: 'creator',
            render: (text, record, index) => (
                < Space >
                    <Tag color="red">{record.creator?.name}</Tag>
                </Space >
            ),
            sorter: {
                compare: (a, b) => {
                    let item1 = a.creator.name?.trim().toLowerCase()
                    let item2 = b.creator.name?.trim().toLowerCase()
                    if (item2 < item1) {
                        return -1;
                    }
                    return 1;
                },
            },
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'id',
            render: (text, record, index) => (
                <Space>
                    <a className='p-2 bg-primary text-white' onClick={() => { showDrawer(index) }}><EditOutlined /></a>
                    <a className='p-2 bg-danger text-white' onClick={() => {
                        dispatch(deleteProject_action(record.id))
                    }}><DeleteOutlined /></a>
                </Space >
            ),
            sortDirection: ['descend'],
        },
    ];

    const dispatch = useDispatch();

    const { arrAllProject } = useSelector(state => state.GetAllProject)

    // console.log(visible)
    useEffect(() => {
        dispatch(getAllProject_action());
    }, [arrAllProject])




    return (
        <div>
            <div className='d-flex justify-content-between' style={{ marginLeft: '7px', paddingTop: '10px' }}>
                <h3>Project Management</h3>
            </div>
            <Table columns={columns} rowKey={"id"} dataSource={arrAllProject} />
            <DrawerPjManagement ></DrawerPjManagement>
        </div>
    )
}
