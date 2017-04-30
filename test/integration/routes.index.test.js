// process.env.NODE_ENV = 'test'

// const chai = require('chai');
// const should = chai.should();
// const chaiHTTP = require('chai-http')
// chai.use(chaiHTTP);

// const app = require('../../server');

// describe('routes : index', () => {
//     beforeEach((done) => { done(); });
//     afterEach((done) => { done(); });

//     describe('GET /', () => {
//         it('should render the app', (done) => {
//             chai.request(app)
//             .get('/')
//             .end((err, res) => {
//                 res.redirects.length.should.equal(0);
//                 res.status.should.equal(200);
//                 res.type.should.equal('text/html');
//                 done();
//             })
//         })
//     })

//     describe('GET /404', () => {
//         it('should throw an error', (done) => {
//             chai.request(app)
//             .get('/404')
//             .end((err, res) => {
//                 res.redirects.length.should.equal(0);
//                 res.status.should.equal(404);
//                 res.type.should.equal('application/json');
//                 done();
//             })
//         })
//     })
// })