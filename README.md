
## Testing with JEST (Monorepo with 3 testing node projects):

### Pre-requisites:

***- Node.js***

***- Docker***

***
### Stack used:

***- Javascript***

***- Jest***

***- Dockerized Mongo database***

***- Express.js server***

***

### Other dependencies included:

***- Playwright***

***- Eslint***

***- Supertest***

***nodemon***

***faker.js***

***

### Others:

***- Github actions***

***

### Disclaimer:
This project is intented to perform testing excercises using the technologies mentionen above, i make it just to practice, however if anybody finds it useful feel free to use it as you need it.
***


### Current features:
The current project includes 3 different node projects:

***demos:*** To perform unit testing in differente javascript elements.

***api:*** To perform testing in a api based project, we use here unit testing and mockings, we also make integration test and e2e test. We use a dockerized mongo db here.

***webapp:*** To perform a very basic usage of playwright as testing mechanism for UI.

***

Working actually:

***endpoint to retrieve books from DB (/api/v1/books)***
This endpoint can be requested by postman or browser.


***endpoint to post books to DB (/api/v1/books)***

Send an object using a valid Mongo ObjectId for posting. ie:

{
    "_id": "669eba8f0a8329ad9b15fb8c",
    "name": "The Kybalion"
  },

Or you can create books directly in mongo's database using compass gui.

***Working github action:*** We use the file .github/workflows/api.ci.yml to program a github action any time api folder receives a push in github repository, this action execute the unit testing, an static testing (linter) and the e2e testing.

***

### Steps to install/usage:

1)  git clone

2)  cd testing-js

***

3) cd demos

4) npm install

5) npm run test (to run unit testing)

***

6) back to root and cd api

7) npm install

8) npm run start

9) npm run test (to run unit testing)

10) npm run test:integration (to run integration testing)

11) npm run test:e2e (to run e2e testing) - this one creates two new records for books collection in mongo db and delete them after testing (taki it into account). See package.json from api folder to check what are you executing if any doubt.

***

12) back to root and cd webapp

13) npm install

14) npx playwright test

15) npx playwright show-report (to show the output report in web browser)

