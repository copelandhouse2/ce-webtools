var express    = require("express");
 var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : '127.0.0.1',
   user     : 'ceadmin',
   password : 'Cmc131313',
   database : 'copelandeng_dev'
 });
 var app = express();

 connection.connect(function(err){
 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
 });

 app.get("/",function(req,res){
 connection.query('SELECT * from addresses LIMIT 2', function(err, rows, fields) {
 connection.end();
   if (!err)
     console.log('The solution is: ', rows);
   else
     console.log('Error while performing Query.');
   });
 });

 app.listen(3000);