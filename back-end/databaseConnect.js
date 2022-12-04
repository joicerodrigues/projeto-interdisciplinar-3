// Use the MariaDB Node.js Connector
import { createPool } from 'mariadb';
 
// Create a connection pool
var pool = 
  createPool({
    host: '127.0.0.1',
    user: 'julia',
    password: '30112002',
    database: 'sucatia',
    connectionLimit: 5
  });
 
// Expose a method to establish connection with MariaDB SkySQL
export default Object.freeze({
  pool: pool
});