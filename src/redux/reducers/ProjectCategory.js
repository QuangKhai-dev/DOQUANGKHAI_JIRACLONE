

const initialState = {
    arrProjectCategory: [
        1, 2, 2
    ]
}

export const ProjectCategory = (state = initialState, action) => {
    switch (action.type) {
        case 'THEO_DOI_PROJECT_CATEGORY': {
            state.arrProjectCategory = action.data
            return { ...state }
        }

        default:
            return { ...state }
    }
}
