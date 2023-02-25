import { useSelector, useDispatch } from "react-redux";
import { set, add } from "../features/items/itemsSlice.js";
import { useEffect } from "react";
import { getItemList, getMaxItemID, getNewStoriesIDs } from "../api/itemsApi.js";

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchNewStoriesIDs = async () => {
      return await getNewStoriesIDs();
    };

    const fetchItems = async () => {
      const newStoriesIDs = await fetchNewStoriesIDs();
      const newStoriesList = await getItemList(newStoriesIDs);
      dispatch(set({ payload: newStoriesList }));
    };

    fetchItems();
  }, []);
  return (
      <div className="main-page">

      </div>
  );
}

export default MainPage;