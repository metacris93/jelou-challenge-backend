const jwt = require('jsonwebtoken');

const secret = 'secret';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE0MTU3MTM1fQ.6iSAwfGx99J2C1jGc8w299tRqxOJ2SHjPstUywgIwtA';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);