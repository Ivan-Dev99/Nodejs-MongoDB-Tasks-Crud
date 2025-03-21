import { connect } from "mongoose";
import { MONGODB_URI } from "./config";




(async () => {
  try {
    const db = await connect(MONGODB_URI);//Cambiar localhost por 127.0.0.1
    console.log("DB connected to", db.connection.name); // db.connection.name te da el nombre de la base de datos
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();
