const USER_DETAIL = "USER_DETAIL"
const CLEAR="CLEAR"
const initialState = {
  user: {}
};

const TestReducer = (state = initialState, action) => {
    console.log("Action",action.type)
  switch (action.type) {
    case USER_DETAIL:
      let newState = { ...state }
      newState = { ...newState, user: action.payload }
      return newState
      case CLEAR:
        return null
    default:
      return state;
  }
}

export default TestReducer