'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');


test('groot endpoint', t => {
  // TODO: implement it
  request(app)
    .get('/groot?message=dsfdf')
    .set('Accept', 'application/json')
    .expect('content-type', 'application/json; charset=utf-8')
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 200);
      t.same(resp.body, { received: 'dsfdf', translated: 'I am Groot!' });
      t.end();
    });
});

test('groot endpoint', t => {
request(app)
.get('/groot?message')
.set('Accept', 'application/json')
.expect('content-type', 'application/json; charset=utf-8')
.end((err, resp) => {
  if (err) throw err;
  t.equal(resp.status, 200);
  t.same(resp.body, { error: 'I am Groot!' });
  t.end();
});
});


/* 
Write a test where you check:
With giving a parameter the status is ok,
and the given response is the same as expected
Without giving a parameter the status is not ok,
and the given error response is the same as expected */
