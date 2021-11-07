// const net = require("net");

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost",  // IP address here,
//     port: 50541// PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");
//   conn.on("connect", () => {
//     console.log("Connected");// code that does something when the connection is first established
//   });
//   return conn;
// };

// console.log("Connecting ...");
// connect();
// const { host, port} = require("./client.js");

const { connect } = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
 
  const handleUserInput = function () {
    stdin.on("data", handleUserInput);// your code here
  };
  

  return stdin;
};

setupInput();




