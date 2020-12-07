const con = require('dbConnect')
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected !");
    const sql = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255))";
    
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("Table user created");
    });
});

app.post('/email', (req, res, next)=>{
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected !");

        const emailSend = req.body.email;

        const sql = "INSERT INTO users ( email ) VALUES ?";
        
        con.query(sql, emailSend, function (err, result){
            if (err) throw err;
            console.log("User created");
        });
    });
})

