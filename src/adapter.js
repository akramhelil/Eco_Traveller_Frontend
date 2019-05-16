const newTravellerURL = 'http://localhost:4000/travellers'
const travellerLoginURL = 'http://localhost:4000/login'

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
  }

}// end of the Adapter
