import { applyMiddleware, combineReducers, createStore } from "redux";

//middleware saga
import createMiddlewareSaga from 'redux-saga';
import { DrawerProjectReducer } from "./reducers/DrawerProjectReducer";

import { GetAllProject } from "./reducers/GetAllProject";


import { ProjectCategory } from "./reducers/ProjectCategory";
import { rootSaga } from './saga/rootSaga';
const middleWareSaga = createMiddlewareSaga();

const rootReducer = combineReducers({
    // nơi đặt reducer
    ProjectCategory,
    GetAllProject,
    DrawerProjectReducer
})

export const store = createStore(rootReducer, applyMiddleware(middleWareSaga));
//Gọi saga'
middleWareSaga.run(rootSaga)
