# clin-mocks-api

## Description

This **Node.js/Express** app. provides a minimalist implementation of an API with custom endpoints behaviors to mock external APIs.

## How to add a mock
- add a new file such as `src/mocks/myApi.js`
- copy/paste content of `src/mocks/sample.js`
- add the mock inside `src/index.js` like bellow:
```js
import myApiMocks from './mocks/myApi.js';
...
logger.info('Add mocks endpoints: MyAPI');
app.use('/api/sample', myApiMocks);
...
```
- run the mocks API in `dev` mode
```
npm run start
```
- modify the content as you need to produce the expected mock behavior. The API will automatically reboot after changes.

## How to run 

If you want to run the API only, can do either:

```
run run start:prod
```

or
```
docker-compose up --build
```

*The docker-compose file can be used to test the docker file validity and also provides a closer K8S environment of execution by reducing cpu/ram*

## Deployment

This mock purpose is to be deployed on QA only. Every PRs will be checked and once merged in `main` will build a new docker image based on SHA commit code. K8S is in charge to deploy the new image automatically.