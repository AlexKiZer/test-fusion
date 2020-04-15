const initialState = {
    desk: {},
};

const checkStorage = () => {
    //localStorage.setItem("desk", '[{"test":"test"}]');

    const localStorageData = JSON.parse(localStorage.getItem("desk"));

    return localStorageData || {};
};

export default function mainReducer(state = initialState, { type, ...action }) {
    switch (type) {
        case "GET_STORAGE":
            return { ...state, desk: checkStorage() };

        case "ADD_BOARD":
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}
