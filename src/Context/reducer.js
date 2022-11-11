export const actionType = {
    SET_ID: "SET_ID",
    SET_PACK: "SET_PACK"
};

const reducer = (state, action) => {

    // console.log(action);

    switch (action.type) {
        case actionType.SET_ID:
            return { ...state, id: action.id };

        case actionType.SET_PACK:
            return { ...state, pack: action.pack };

        default:
            return state;
    }
};

export default reducer;