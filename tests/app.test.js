const request = require('supertest');
const app = require('../lib/app');

describe('application route', () => {
    it('returns an index.html file', () => {
        return request(app)
            .get('/index.html')
            .then(res => {
                expect(res.text).toEqual(expect.stringContaining('you found me'));
            });
    }); 
    it('returns an 404 error if bad path', () => {
        return request(app)
            .get('/badPath')
            .then(res => {
                expect(res.statusCode).toEqual(404);
                expect(res.text).toEqual(expect.stringContaining('Page Not Found'));
            });
    }); 
});
