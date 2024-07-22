const request = require('supertest');
const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for GET /', () => {
    it('Should return Hello World!', async () => {
      // Solucion en los comentarios funciona bien usando async/await
      const response = await request(app).get('/');
      console.log('response.body->', response.body);
      expect(response.text).toEqual('Hello World!');

      // Solucion propuesta en el curso, no espera la respuesta del endpoint usando forceexit
      // en el package.json
      /* request(app)
        .get('/')
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual('Hello World');
        }); */
    });
  });
});
