
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
    case 'AUTO_LOGIN':
      return {
        ...state,
        currentTraveller: action.payload
      }
    case 'NEW_TRIP':
      return {
        ...state,
        currentTrip: action.payload
      }
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    case 'UPDATE_PROFILE':
      return {
        ...state,
        currentTraveller: action.payload
      }
    case 'FETCH_TRIPS':
      return {
        ...state,
        trips: action.payload
      }
    default:
      return state
  }
}

export default reducer
