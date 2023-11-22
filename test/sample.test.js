import request from 'supertest';
import app from '../src/index.js';

describe('Mocked Endpoint Sample', () => {
    it('should test the sample mock response', async () => {
        const response = await request(app).get('/api/sample');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ foo: 'bar' });
    });
    it('should test the sample error response', async () => {
        const response = await request(app).post('/api/sample');
        expect(response.status).toBe(500);
        expect(response.text).toEqual('internal server error');
    });
});
