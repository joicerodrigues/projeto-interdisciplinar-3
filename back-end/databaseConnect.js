const mariadb = required('mariadb');
const pool = mariadb.createPool({
    host: 'mydb.com',
    user: $bduser,
    password: $bdpassword,
    connectionLimit: 5
});

pool.getConnection()
.then(conn => {
    conn.query("Selec 1 as val")
    .then((rows) => {
        console.log(rows);
        return conn.query("Insert INTO tableName value (valueOne, valueTwo)", [1, "teste"]);
    })
    .then((res) => {
        console.log(res);
        conn.end();
    })
    .catch(err => {
        console.log
    })
})
