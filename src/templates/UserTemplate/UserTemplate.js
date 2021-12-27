import React from 'react'
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

const { Sider, Content } = Layout;


export const UserTemplate = (props) => {
    const { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Layout>
                <Sider style={{ height: '100vh', backgroundImage: 'url(https://i.ytimg.com/vi/XhV66FJl5dw/maxresdefault.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} width={'50%'} ></Sider>
                <Layout>
                    <Content>
                        <Component {...propsRoute} />
                    </Content>
                </Layout>
            </Layout>
        </>
    }} />
}