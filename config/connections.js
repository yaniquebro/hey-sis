const Sequalize = require("sequalize")
require("dotenv").config()

let sequalize;

if (process.env.JAWSDB_URL) {
    sequalize = new Sequalize(process.env.JAWSDB_URL) 
} else {
    sequalize = new Sequalize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost", 
            dialect: "mysql",
            port: 3306
        }
    )
}


module.exports = sequalize;