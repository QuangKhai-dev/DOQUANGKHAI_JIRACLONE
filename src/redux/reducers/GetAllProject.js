import { THEO_DOI_GET_ALL_PROJECT_API } from "../types/JiraCloneTypes"

const initialState = {
    arrAllProject: []
}

export const GetAllProject = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PROJECT_API': {
            state.arrAllProject = action.data
            return { ...state }
        }
        default:
            return { ...state }
    }
}
