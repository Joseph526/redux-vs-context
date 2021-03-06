import Food from "./foods";
import { SEARCH_INPUT_CHANGED } from "./actions";

const initialState = {
    food: Food,
    searchTerm: ""
};

function reducer(state = initialState, action) {
    // Switch between the action type
    switch (action.type) {
        case SEARCH_INPUT_CHANGED:
            const { searchTerm } = action.payload;
            return {
                ...state,
                searchTerm: searchTerm,
                food: searchTerm ? Food.filter(
                    (food) => (food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
                ) : Food
            };
        default:
            return state;
    }
}

export default reducer;
