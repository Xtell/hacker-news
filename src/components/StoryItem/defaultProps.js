import { getBaseDefaultProps } from "../../js/utils/index.js";

const baseClass = "story-item";
export const defaultProps = {
  ...getBaseDefaultProps(baseClass),
  itemId: null,
  title: null,
  url: null,
  creationTime: null,
};