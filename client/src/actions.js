// Action types
export const SEARCH_INPUT_CHANGED = "SEARCH_INPUT_CHANGED";

// Action creators
function searchTermChanged(searchTerm) {
    return {
        type: SEARCH_INPUT_CHANGED,
        payload: { searchTerm }
    };
}

export default { searchTermChanged };
