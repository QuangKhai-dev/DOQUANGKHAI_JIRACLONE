const initialState = {
    visible: false,
    callbackFunction: () => { alert('chào con quýt') },
    arrDrawer: {
        id: '',
        projectName: '',
        creator: '',
        description: '',
        categoryId: ''
    }
}

export const DrawerProjectReducer = (state = initialState, action) => {
    switch (action.type) {

        case "OPEN_DRAWER": {
            state.arrDrawer = action.arr[action.id]
            console.log(state.arrDrawer)
            return { ...state, visible: true }
        }
        case "CLOSE_DRAWER": {
            return { ...state, visible: false }
        }

        default:
            return state
    }
}
