const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin 123 .202';
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

hashPassword();
// $2b$10$tatnpv8Du5yEMLRqOvUEQ.keVVqDvDad3HaGIZOcewzK1h4h8.8Zm