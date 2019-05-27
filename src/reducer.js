
const initialState = {
  currentTraveller: null,
  currentTrip: null,
  posts: [],
  trips: [],
  login: false
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        currentTraveller: action.payload,
        login: true
      }
    case 'LOG_IN':
      return {
        ...state,
        currentTraveller: action.payload,
        login: true
      }
    case 'LOG_OUT':
      return {
        ...state,
        currentTraveller: null,
        login: false
      }
    case 'AUTO_LOGIN':
      return {
        ...state,
        currentTraveller: action.payload,
        login: true
      }
    case 'NEW_TRIP':
      return {
        ...state,
        currentTrip: action.payload
      }
    case 'SET_CURRENT_TRIP':
      return {
        ...state,
        currentTrip: state.trips.map(trip => {
          return trip.id === action.payload.id
        })
      }
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    case 'ADD_POST':
      return {

        ...state,
        posts: [...state.posts, action.payload.post ]
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
    case 'UPDATE_SAD':
      return {
        ...state,
        posts: state.posts.map(post => {
          return post.id === action.payload.id ? { ...post, likes: action.payload.likes } : post
        })
      }
    case 'UPDATE_POST':
      return {
        ...state,
        posts: state.posts.map(post => {
          return post.id === action.payload.id ? action.payload : post
        })
      }
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => {
          return post.id !== action.payload.id
        })
      }
    default:
      return state
  }
}

export default reducer
