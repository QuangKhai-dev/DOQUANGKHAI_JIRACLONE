import { SIGN_IN_API, THEO_DOI_CREATE_PROJECT_API, THEO_DOI_DELETE_PROJECT_API, THEO_DOI_GET_ALL_PROJECT_API, THEO_DOI_PROJECT_CATEGORY_API, THEO_DOI_UPDATE_PROJECT_API } from "../types/JiraCloneTypes";


export const signin_action = (email, password) => {
    return {
        type: SIGN_IN_API,
        userLogin: {
            email: email,
            passWord: password
        }
    }
}
export const getProjectCategory_action = () => {
    return {
        type: THEO_DOI_PROJECT_CATEGORY_API
    }
}
export const createProject_action = (values) => {
    console.log(values)
    return {
        type: THEO_DOI_CREATE_PROJECT_API,
        models: values
    }
}
export const getAllProject_action = () => {
    return {
        type: THEO_DOI_GET_ALL_PROJECT_API
    }
}
export const deleteProject_action = (id) => {
    return {
        type: THEO_DOI_DELETE_PROJECT_API,
        projectId: id
    }
}
export const updateProject_action = (values) => {
    console.log(values)
    return {

    }
}


