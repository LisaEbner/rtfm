/* eslint-disable camelcase */
require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "$alesforce6",
    database: "rtfm",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "mysql420",
    database: "rtfm-test",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
