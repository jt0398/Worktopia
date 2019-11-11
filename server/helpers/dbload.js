var mysql = require("mysql2");
var fs = require("fs");
var filename = __dirname + "/seeds.sql";
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "worktopia_db",
  multipleStatements: true
});

function runSingleQuery(sql) {
  connection.query(sql, function(err, res) {
    if (err) throw err;
    console.log(res);
  });
}

function runSqlFile(filename) {
  fs.readFile(filename, "utf8", function(err, data) {
    if (err) throw err;
    runSingleQuery(data);
  });
  //   connection.end();
  return this;
}

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  runSqlFile(filename);

  //   afterConnection();
});
