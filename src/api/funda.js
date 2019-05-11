import axios from 'axios'

const http = axios.create({
  baseURL: 'http://partnerapi.funda.nl',
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
  return GET(http, `/feeds/Aanbod.svc/json/detail/${accessKey}/koop/${houseId}/`)
}

export default {
  getHouseData
}
