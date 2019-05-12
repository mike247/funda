import axios from 'axios'

const http = axios.create({ // Set up a http connection to our local service
  baseURL: 'http://localhost:3000/api',
  timeout: 8000
})

// Generalizes Get requests for a given http connection
const GET = (http, url) => {
  try {
    return http.get(url).then(res => {
      return res
    }).catch(e => {
      throw e
    })
  } catch (e) {
    throw (e)
  }
}

// Call our small service to get the house data
function getHouseData (accessKey, houseId) {
  return GET(http, `/access/${accessKey}/house/${houseId}`)
}

export default {
  getHouseData
}
