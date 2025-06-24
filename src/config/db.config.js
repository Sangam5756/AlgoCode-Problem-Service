const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("../config/server.config");

const dbconnect = async () => {
    
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(ATLAS_DB_URL);
    }

    console.log("connected to the database");
  } catch (error) {
    console.log("unable to connect to the database");
    console.log(error);
  }
};

module.exports = dbconnect;
