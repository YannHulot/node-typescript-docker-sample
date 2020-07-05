import app from '../src/application';

const request = require('supertest');

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/book/add')
      .send({
        name: 'The book of love',
        author: 'Yann Hulot'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('post');
  });
});
