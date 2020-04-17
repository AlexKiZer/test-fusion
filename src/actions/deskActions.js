import { dispatch } from "../store";

export function getStorage(data) {
    return { type: "GET_STORAGE", payload: data };
}

export function addBoard(data) {
    return { type: "ADD_BOARD", payload: data };
}

export function removeBoard(data) {
    return { type: "REMOVE_BOARD", payload: data };
}
