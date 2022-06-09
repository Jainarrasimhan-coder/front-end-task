const GET_ALL_POSTS = "GET_ALL_POSTS";
const CLEAR="CLEAR"
const initialState = {
  post: {}
};

const TestReducer = (state = initialState, action) => {
    console.log("Action",action.type)
  switch (action.type) {
    case GET_ALL_POSTS:
      let newState = { ...state }
      newState = { ...newState, post: action.payload }
      return newState
      case CLEAR:
        return null
    default:
      return state;
  }
}

export default TestReducer