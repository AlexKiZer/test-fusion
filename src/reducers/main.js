const initialState = {
    desk: {},
};

const checkStorage = (desk) => {
    const localStorageData = JSON.parse(localStorage.getItem("desk")),
        data = desk ? desk : localStorageData || {};

    return data;
};

const removeBoard = (desk, id) => {
    delete desk[id];

    return desk;
};

export default function mainReducer(state = initialState, { type, ...action }) {
    switch (type) {
        case "GET_STORAGE":
            return { ...state, desk: checkStorage(state.desk) };

        case "ADD_BOARD":
            return {
                ...state,
                desk: {
                    ...state.desk,
                    [action.payload.id]: action.payload.values,
                },
            };

        case "REMOVE_BOARD":
            return {
                ...state,
                desk: removeBoard(state.desk, action.payload),
            };

        default:
            return state;
    }
}
