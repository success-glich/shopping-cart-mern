const mongoose = require("mongoose");
const { MONGODB_URL } = require("./vars");
class Connection {
  connectToDb() {
    throw new Error("Cannot implement this method on parent class");
  }
}
class MongoConnection extends Connection {
  async connectToDB() {
    //  mongoose.connect(vars.MONGODB_URL);
    await mongoose.connect(MONGODB_URL);
  }
}
class MySQLConnection extends Connection {
  async connectToDb() {
    return "Connected successfully";
  }
}

module.exports = { MongoConnection, MySQLConnection };
