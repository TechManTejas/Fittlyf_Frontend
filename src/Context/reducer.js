export const actionType = {
    SET_ID: "SET_ID",
    SET_PACK: "SET_PACK",
    SET_PAGE1: "SET_PAGE1",
    SET_PAGE2: "SET_PAGE2",
    SET_PAGE3: "SET_PAGE3"
};

const reducer = (state, action) => {

    // console.log(action);

    switch (action.type) {
        case actionType.SET_ID:
            return { ...state, id: action.id };

        case actionType.SET_PACK:
            return { ...state, pack: action.pack };

        case actionType.SET_PAGE1:
            return { ...state, page1Data: action.page1Data };

        case actionType.SET_PAGE2:
            return { ...state, page2Data: action.page2Data };

        case actionType.SET_PAGE3:
            return { ...state, page3Data: action.page3Data };

        default:
            return state;
    }
};

export default reducer;