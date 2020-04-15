import { createStore } from "redux";
import rootReducer from "../reducers";

var currentStore;

export function configureStore (initialState) {
    const store = createStore(
        rootReducer,
        initialState,
    );
    currentStore = store;
    return store;
}

export function dispatch () {
    return currentStore.dispatch.apply(currentStore, arguments);
}

export function getCurrentState () {
    return currentStore.getState();
}

