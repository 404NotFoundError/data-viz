const getData = () => {    
    const mysql = require('mysql');

    const con = mysql.createConnection({
        host: "localhost",
        database: "winotek",
        user: "root",
        password: "root"
    });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    
    con.query('SELECT `id_vin`, `nom_vin`, `points` FROM vin', (err, results) => {
        if (err)
            throw err;
        return results;
    });
}

export default getData();