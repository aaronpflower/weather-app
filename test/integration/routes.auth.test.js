// process.env.NODE_ENV = 'test';

// const chai = require('chai');
// const should = chai.should();
// const chaiHTTP = require('chai-http');
// chai.use(chaiHTTP);

// const app = require('../../server');
// const knex = require('../../server/db/connection');

// describe('routes : auth', () => {

//     beforeEach(() => {
//         return knex.migrate.rollback()
//         .then(() => { return knex.migrate.latest(); })
//         .then(() => { return knex.seed.run(); });
//     });

//     afterEach(() => {
//         return knex.migrate.rollback();
//     });

//     describe('POST /api/users/add', () => {
//         it('should register a new user', (done) => {
//             chai.request(app)
//             .post('/api/users/add')
//             .send({
//                 username: 'aaron',
//                 password: 'pass'
//             })
//             .end((err, res) => {
//                 should.not.exist(err);
//                 res.redirects.length.should.equal(0);
//                 res.status.should.equal(200);
//                 res.type.should.equal('application/json');
//                 res.body.should.include.keys('status', 'token');
//                 res.body.status.should.equal('success');
//                 done();
//             });
//         });
//     });

//     describe('POST /api/users/login', () => {
//         it('should login a user', (done) => {
//             chai.request(app)
//             .post('/api/users/login')
//             .send({
//                 username: 'jeremy',
//                 password: 'johnson123'
//             })
//             .end((err, res) => {
//                 should.not.exist(err)
//                 res.redirects.length.should.equal(0)
//                 res.status.should.equal(200)
//                 res.type.should.equal('application/json');
//                 res.body.should.include.keys('status', 'token');
//                 res.body.status.should.equal('success');
//                 should.exist(res.body.token);
//                 done();
//             });
//         });
//         it('should not login in an unregistered user', (done) => {
//             chai.request(app)
//             .post('/api/users/login')
//             .send({
//                 username: 'sirmixalot',
//                 password: 'something'
//             })
//             .end((err, res) => {
//                 should.exist(err);
//                 res.status.should.equal(500);
//                 res.type.should.equal('application/json');
//                 res.body.status.should.equal('error');
//                 done();
//             });
//         });
//     });
//     // TODO: Add current user route
//     // describe('GET /api/user', () => {
//     //     it('should return a success', (done) => {
//     //         chai.request(app)
//     //         .get('/api/user')
//     //         .send({
//     //             username: 'jeremy',
//     //             pass: 'johnson123'
//     //         })
//     //         .end((err, res) => {
//     //             should.not.exist(err)
//     //             res.status.should.equal(200);
//     //             res.type.should.equal('application/json');
//     //             res.body.status.should.equal('success');
//     //             done();
//     //         });
//     //     });
//     //     it('should throw an error if a user is not logged in', (done) => {
//     //         chai.request(app)
//     //         .get('/api/user')
//     //         .end((err, res) => {
//     //             should.exist(err);
//     //             res.status.should.equal(400);
//     //             res.type.should.equal('application/json');
//     //             res.body.status.should.equal('Please log in')
//     //             done();
//     //         });
//     //     });
//     // });

// })