'use strict'
// DISCLAIMER
// This is a very simple server purely set up to get around the cors issue
// most of the code came from here https://hapijs.com/tutorials#installing
// This is in no way a reflection of what a proper service would look like or be coded like
// as this is a front end task I didn't want to spend too long on this doing it super properly

const Hapi = require('@hapi/hapi')
const axios = require('axios')

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['http://localhost:*'] // Allow localhost to violate cors, in a normal setup this server would also be serving the webPage so cors wouldn't be an issue
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/api/access/{accessKey}/house/{houseId}',
    handler: (request, h) => {
      return axios.get(`http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${request.params.accessKey}/koop/${request.params.houseId}/`)
        .then(function (response) {
          // handle success
          console.log('Recieved data')
          return response.data
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
