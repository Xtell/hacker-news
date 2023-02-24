import axios from "../config/axios.js";

async function getMaxItemID() {
  return await axios.get("/v0/maxitem.json");
}

export { getMaxItemID };