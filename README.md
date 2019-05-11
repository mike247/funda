# funda_code_challange
This is my code example for the funda demo

## Project setup
To install the npm dependencies run command
```
npm install
```

This app uses google maps and therefore requires a google maps api Key.

For security reasons this is not stored in the repo

To set this up complete the following steps

 1) Create a '.env.development' file at the root level of the repo
 2) add 'VUE_APP_GOOGLE_API_KEY=' to the first line
 3) Paste an api Key with permissions to access the google maps JS api after the '='

```
VUE_APP_GOOGLE_API_KEY=123awkn1231
```

### To Run
After going through project setup, to compile and hot load the front end run
```
npm run serve
```

To run the back end, in a seperate terminal run
```
npm run start-server
```


### Lints and fixes files
```
npm run lint
```

