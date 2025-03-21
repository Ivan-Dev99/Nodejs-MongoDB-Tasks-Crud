import { Schema, model } from "mongoose"; //modelo que se guarad en la base de datos

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    vesrsionkey: false,
  }
);

export default model("task", taskSchema);
