// TODO: Refactor, how to test request to geocode and if that fails?

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../../server')

describe('routes : weather', () => {
    describe('POST /api/weather', () => {
        it('should return current conditions for a valid location', (done) => {
            chai.request(app)
            .post('/api/weather')
            .send({
                location: 'Boulder CO'
            })
            .end((err, res) => {
                should.not.exist(err)
                res.redirects.length.should.equal(0);
                res.status.should.equal(200);
                res.type.should.equal('application/json');
                res.body.should.include.keys('conditions', 'status')
                res.body.status.should.equal('success')
                done();
            })
        })
        it('should not return current conditions for a invalid location', (done) => {
            chai.request(app)
            .post('/api/weather')
            .send({
                location: '$'
            })
            .end((err, res) => {
                should.exist(err);
                res.status.should.equal(500);
                res.type.should.equal('application/json');
                res.body.status.should.equal('error');
                done();
            })
        })
    })
})