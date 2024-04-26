const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$tatnpv8Du5yEMLRqOvUEQ.keVVqDvDad3HaGIZOcewzK1h4h8.8Zm';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();