const app = require("./src/config/express");
const { MongoConnection } = require("./src/config/database");
const { PORT } = require("./src/config/vars");
(async () => {
  app.listen(PORT, () => {
    console.log("Server Listening at PORT ", PORT);
  });
  try {
    MongoConnection.connectToDB;
    console.log("🙌🤩😊☺🤩");
  } catch (err) {
    console.log("There was some error while connecting to the database");
  }
})();
