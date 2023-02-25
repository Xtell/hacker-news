import axios from "../config/axios.js";

async function getMaxItemID() {
  const { data } = await axios.get("/maxitem.json");
  return data;
}

async function getNewStoriesIDs() {
  const { data } = await axios.get("/newstories.json");
  return data;
}

async function getItem(id) {
  const { data } = await axios.get(`/item/${ id }.json`);
  return data;
}

async function getItemList(itemIDs = [], limit = 100) {
  const sliceIDs = itemIDs.slice(0, limit);
  const promises = sliceIDs.map(id => getItem(id));
  return Promise.all(promises)
}

export { getMaxItemID, getItemList, getNewStoriesIDs };