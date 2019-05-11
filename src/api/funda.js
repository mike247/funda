import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 8000
})

const GET = (http, url) => {
  try {
    return http.get(url).then(res => {
      return res
    }).catch(e => {
      console.error(e)
      throw e
    })
  } catch (e) {
    console.error(e)
    throw (e)
  }
}

function getHouseData (accessKey, houseId) {
  return GET(http, `/access/${accessKey}/house/${houseId}`)
}

export default {
  getHouseData
}
