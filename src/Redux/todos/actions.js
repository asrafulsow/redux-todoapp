import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionsType"

export const added = (id) => {
    return {
        type: ADDED,
        payload: id
    }
}
export const toggled = (id) => {
    return {
        type: TOGGLED,
        payload: id
    }
}
export const colorselected = (id, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            id,
            color,
        }
    }
}
export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id
    }
}
export const allcompleted = () => {
    return {
        type: ALLCOMPLETED
    }
}
export const clearcompleted = () => {
    return {
        type: CLEARCOMPLETED
    }
}