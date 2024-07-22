const mockGetAll = jest.fn();

const request = require('supertest');
const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fakes/book.fake,');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for GET /api/v1/books', () => {
    it('Should return a books list', async () => {
      //  Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);

      // ACT
      // Solucion en los comentarios funciona bien usando async/await
      const response = await request(app).get('/api/v1/books');
      console.log('response.body->', response.body);

      // ASSERT
      expect(response.body.length).toEqual(3);

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
