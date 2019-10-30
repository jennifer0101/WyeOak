module.exports = {
  development: {
    username: "yrvwzrmalr3f8ul6",
    password: "gk3zmvty9j1nhpef",
    database: "xdmev18w6sytw0vc",
    host: "p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
