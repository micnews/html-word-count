var test = require('tape');
var wordCount = require('./');

test('simple', function (t) {
  t.equal(wordCount('<p>Hello <b>world!</b></p>'), 2);
  t.end();
});

test('should include link text', function (t) {
  t.equal(wordCount('<p><a href="/hello-world">Hello <b>world!</b></a></p>'), 2);
  t.end();
});

test('should ignore attributes', function (t) {
  t.equal(wordCount('<span a1="Hello World" b2="b" title="nd">Text 1 2 3<span>'), 4);
  t.end();
});

test('should ignore images', function (t) {
  t.equal(wordCount('<img src="/hello" alt="Some text" />Hello'), 1);
  t.end();
});

test('should correctly count words', function (t) {
  t.equal(wordCount('Hello!!!! Comma, question?!'), 3);
  t.end();
});
