# funda_code_challange
This is my code example for the funda demo

## Project setup
To install the npm dependencies run command
```
npm install
```
### Api Keys
This app uses google maps and the funda API - it therefore requires a google maps api Key and a funda access key.

For security reasons these are not stored in the repo

To set this up complete the following steps

 1) Create a '.env.development' file at the root level of the repo
 2) add 'VUE_APP_GOOGLE_API_KEY=' to the first line
 3) add 'VUE_APP_FUNDA_API_ACCESS_KEY=' to the second line
 4) Paste in a google api Key with permissions to access the google maps JS API for the first env var
 5) Past in a funda access key with permissions to access the funda api for the second env var

 (If you are recieving this at Funda, I will have emailed over the two required keys)

```
VUE_APP_GOOGLE_API_KEY=googleApiKey
VUE_APP_FUNDA_API_ACCESS_KEY=fundaAccessKey
```

## To Run
After going through project setup, to compile and hot load the front end run
```
npm run serve
```

To run the back end, in a seperate terminal run
```
npm run start-server
```

Then proceed to http://localhost:8080/ to view the site (or whatever address and port the front end service is using)


### Lints and fixes files
```
npm run lint
```

### Tests

While the scaffolding is set up for testing, no tests were written as I didn't want to spend more than about 8 hours working on this as specced in the instructions

