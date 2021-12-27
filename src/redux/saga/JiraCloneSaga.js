
import { call, delay, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects"
import { JiraCloneServices, jiraCloneServices } from "../../services/JiraCloneServices"
import { SIGN_IN_API, THEO_DOI_CREATE_PROJECT_API, THEO_DOI_DELETE_PROJECT_API, THEO_DOI_GET_ALL_PROJECT_API, THEO_DOI_PROJECT_CATEGORY_API, THEO_DOI_UPDATE_PROJECT_API } from "../types/JiraCloneTypes"
import { history } from "../../libs/history"


function* signin_saga(action) {
    const { userLogin } = action

    try {
        const { data, status } = yield call(() => { return jiraCloneServices.signInApi(userLogin) })
        localStorage.setItem("Key token", data.content.accessToken)
        // history.push("/home")
        history.push('/home')
    } catch (err) {
        console.log(err.response.data)
    }



}
export function* theoDoiSignin(action) {
    yield takeLatest(SIGN_IN_API, signin_saga)
}

function* getProjectCategory(action) {
    try {
        const { data, status } = yield call(() => { return jiraCloneServices.getProjectCategory() })
        yield put({
            type: 'THEO_DOI_PROJECT_CATEGORY',
            data: data.content
        })
    } catch (err) {
        console.log(err.response.data)
    }
}
export function* theoDoigetProjectCategory() {
    yield takeLatest(THEO_DOI_PROJECT_CATEGORY_API, getProjectCategory)
}

function* createProject(action) {
    console.log(action)
    try {
        const { data, status } = yield call(() => jiraCloneServices.createProject(action.models))
        console.log(status)
    } catch (err) {
        console.log(err.response.data)
    }
}

export function* theoDoiCreateProject() {
    yield takeLatest(THEO_DOI_CREATE_PROJECT_API, createProject)
}

function* getAllProject(action) {
    try {
        const { data, status } = yield call(() => { return jiraCloneServices.getAllProject() })
        yield put({
            type: 'GET_ALL_PROJECT_API',
            data: data.content,
        })
    } catch (err) {
        console.log(err.response.data)
    }
}
export function* theoDoiGetAllProject() {
    yield takeLatest(THEO_DOI_GET_ALL_PROJECT_API, getAllProject)
}

function* deleteProject(action) {
    console.log(action.projectId)
    try {
        const { data, status } = yield call(() => { return jiraCloneServices.deleteProject(action.projectId) })
        yield put({
            type: 'GET_ALL_PROJECT_API'
        })
    } catch (err) {
        console.log(err.response.data)
    }
}
export function* theoDoiDeleteProject() {
    yield takeLatest(THEO_DOI_DELETE_PROJECT_API, deleteProject)
}

function* updateProject(action) {
    const { projectId, projectUpdate } = action
    console.log(projectId, projectUpdate)
    try {
        const { data, status } = yield call(() => { JiraCloneServices.updateProject() })
        console.log(data)
    } catch (err) {
        console.log(err.response.data)
    }
}
export function* theoDoiUpdateProject() {
    yield takeLatest(THEO_DOI_UPDATE_PROJECT_API, updateProject)
}