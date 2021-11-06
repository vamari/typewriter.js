const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",  // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connected");// code that does something when the connection is first established
  });



  conn.on('connect', () => {
  conn.write('Name: ABC');
  conn.write('Move: up');
  setInterval(() => {
    conn.write('Move: left')
  }, 3000);
  setTimeout(() => {
    conn.write('Move: down')
  }, 5000)

  });

  
    
    
    return conn;

};

console.log("Connecting ...");
connect();

// module.exports = {
//  host,
//  port, 
// };

module.exports = {
  connect, 
 };