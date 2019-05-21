
const initialState = {
  currentTraveller: null,
  currentTrip: null,
  posts: [],
  trips: []
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        currentTraveller: action.payload
      }
    case 'LOG_IN':
      return {
        ...state,
        currentTraveller: action.payload
      }
    case 'NEW_TRIP':
      return {
        ...state,
        currentTrip: action.payload
      }
    default:
      return state
  }
}

export default reducer
