const newTravellerURL = 'http://localhost:4000/travellers'
const travellerLoginURL = 'http://localhost:4000/login'
const newPostURL = 'http://localhost:4000/posts'
const newTripURL = 'http://localhost:4000/trips'
const autoLogin = 'http://localhost:4000/auto_login'
const postsURL = 'http://localhost:4000/posts'
const tripsURL = 'http://localhost:4000/trips'

export const adapter = {
  createTraveller: travellerData => {
    return fetch(newTravellerURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ traveller: travellerData })
    }).then(res => res.json())
  },

  travellerLogin: (loginData) => {
    return fetch(travellerLoginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(res => res.json())
  },

  autoLogin: (token) => {
    // console.log(token)
    return fetch(autoLogin, {
      headers: {
        'Authorization': token
      }
    })
      .then(res => res.json())
  },

  createPost: (postData) => {
    return fetch(newPostURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
  },

  createTrip: (tripDate) => {
    return fetch(newTripURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(tripDate)
    })
      .then(res => res.json())
  },

  deletePost: (id) => {
    return fetch(`http://localhost:4000/posts/${id}`, {
      method: 'delete'
    })
      .then(res => res.json())
  },

  deleteTraveller: () => {
    // fetch to the delete traveller action
  },
  getPosts: () => {
    return fetch(postsURL)
      .then(res => res.json())
  },
  getTrips: () => {
    return fetch(tripsURL)
      .then(res => res.json())
  },
  upateTraveller: (data, id) => {
    return fetch(`http://localhost:4000/travellers/${id}`, {
      method: 'PATCH',
      headers:
          { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        profile_photo: data.profile_photo,
        email: data.email,
        about: data.about
      })
    })
      .then(res => res.json())
  },
  updateLikes: (id, likes) => {
    return fetch(`http://localhost:4000/posts/${id}`, {
      method: 'PATCH',
      headers:
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'likes' },
      body: JSON.stringify({
        likes: likes++
      })
    })
      .then(res => res.json())
  },
  updatePost: (id, data) => {
    // console.log(data)
    return fetch(`http://localhost:4000/posts/${id}`, {
      method: 'PATCH',
      headers:
          { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        title: data.title,
        content: data.content
      })
    })
      .then(res => res.json())
      // .then(res => console.log('Adapter', res))
  }

}// end of the Adapter
