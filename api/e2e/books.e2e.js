const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3002);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });
  // });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('Test for GET /api/v1/books', () => {
    it('Should return a books list', async () => {
      //  Arrange
      const seedData = await database.collection('books').insertMany([{
        name: 'Book1',
        year: 1998,
        author: 'Alexis',
      },
      {
        name: 'Book2',
        year: 1999,
        author: 'Jhon',
      }
    ]);
      // ACT
      // Solucion en los comentarios funciona bien usando async/await
      const response = await request(app).get('/api/v1/books');
      console.log('response.body->', response.body);

      // ASSERT
      expect(response.body.length).toEqual(seedData.insertedCount);

      // Solucion propuesta en el curso, no espera la respuesta del endpoint usando forceexit
      // en el package.json
      /* request(app)
        .get('/api/v1/books'')
        .expect(200)
        .then(({body}) => {
          expect(body.length).toEqual(2);
        }); */
    });
  });
});
