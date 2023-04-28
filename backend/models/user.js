const db = require('../util/database');

module.exports = class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static find(email) {
    return db.execute('SELECT * FROM clientes WHERE correo = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO clientes (nombre, correo, contrasena) VALUES (?, ?, ?)',
      [user.name, user.email, user.password]
    );
  }
};