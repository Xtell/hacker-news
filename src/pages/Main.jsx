import { useSelector, useDispatch } from "react-redux";
import { set, add } from "../features/items/itemsSlice.js";
import { useEffect } from "react";
import { getItemList, getMaxItemID, getNewStoriesIDs } from "../api/itemsApi.js";
import getCN from "../js/utils/getCN.js";
const getClassName = getCN("main-page");

function MainPage() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items)

  useEffect(() => {
    const fetchNewStoriesIDs = async () => {
      return await getNewStoriesIDs();
    };

    const fetchItems = async () => {
      const newStoriesIDs = await fetchNewStoriesIDs();
      const newStoriesList = await getItemList(newStoriesIDs);
      dispatch(set({ items: newStoriesList }));
    };

    fetchItems();
  }, []);

  console.debug(items)
  return (
    <div className={getClassName()}>
      {!!items.length &&
        <ul className={getClassName("list")}>
          {items.map((item, index) => {
            return (
              <li className={getClassName("list-item")} key={item.id}>
                <article className="item">
                  <p className="item__index">{index}</p>
                  <div className="item__title">{item.title}</div>
                  <div className="item__date"></div>
                </article>
              </li>
            )
          })}
        </ul>
      }
    </div>
  );
}

export default MainPage;