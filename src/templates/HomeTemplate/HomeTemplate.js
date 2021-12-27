import React, { useState } from 'react'
import { Route, NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import './HomeTemplate.css'
import ModalSreach from '../../pages/Modal/ModalSreach';
import ModalNewTask from '../../pages/Modal/ModalNewTask';

const { Header, Footer, Sider, Content } = Layout;


export const HomeTemplate = (props) => {
    const [nameLink, setNameLink] = useState('Kanban board');
    const { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <Layout>
                <ModalSreach></ModalSreach>
                <ModalNewTask></ModalNewTask>
                <Header className='py-3' style={{ height: '100vh', width: '4%', backgroundColor: '#0747a6', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <div className='header-top'>
                        <div className="logo">
                            <img src="./img/logo.png" alt="" />
                            <div className='header-top-item'>
                                <a data-toggle="modal" data-target="#modalSearch" href="#" className='text-white'>
                                    <i className="fas fa-search p-2"></i>
                                </a>
                            </div>
                            <div className='header-top-item'>
                                <a data-toggle="modal" data-target="#modalNewTask" className='text-white'>
                                    <i className="fas fa-plus p-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <img src="./img/avatar.jpg" style={{ borderRadius: '50%', width: '30px', height: '30px' }} alt="" />
                        <div className='header-bottom-item'>
                            <a href="#" className='text-white'>
                                <i className="fas fa-question-circle"></i>
                            </a>
                        </div>
                    </div>
                </Header>
                <Sider className='py-3' style={{ backgroundColor: '#F4F5F7', width: '240px' }}>
                    <div className='p-3'>
                        <div className="project-info d-flex">
                            <img style={{ width: '40px', height: '40px' }} src="./img/avatar.jpg" alt="" />
                            <div className='ml-2 pb-1'>
                                <h1>Angular Jira Clone</h1>
                                <p>Software Project</p>
                            </div>
                        </div>
                        <div className='function-item'>
                            <NavLink onClick={() => {
                                setNameLink('Kanban Board')
                            }} to="/homeindex" className='text-dark'>
                                <i className="fas fa-id-card d-inline-block mr-2"></i>
                                <span>Kanban Board</span>
                            </NavLink>
                        </div>
                        <div className='function-item'>
                            <NavLink onClick={() => {
                                setNameLink('Project Setting')
                            }} to="/project" className='text-dark'>
                                <i className="fas fa-cog mr-2"></i>
                                <span>Project Setting</span>
                            </NavLink>
                        </div>
                        <div className='function-item mb-3'>
                            <NavLink onClick={() => {
                                setNameLink('Project Setting')
                            }} to="/projectmanagement" className='text-dark'>
                                <i className="fas fa-cog mr-2"></i>
                                <span>Project Manage</span>
                            </NavLink>
                        </div>
                        <hr className='bg-dark' />
                    </div>
                </Sider>
                <Content style={{ height: '100vh', backgroundColor: 'white', paddingLeft: '30px', paddingRight: '30px', paddingTop: '40px' }}>
                    <div className="link-source" style={{ marginLeft: '5px' }}>
                        <span className='pl-2 pr-2'>Projects</span>/<span className='pl-2 pr-2'>Angular Jira Clone</span>/<span className='pl-2 pr-2'>{nameLink}</span>
                    </div>
                    <Component {...propsRoute} />
                </Content>
            </Layout>
        </>
    }} />

}
