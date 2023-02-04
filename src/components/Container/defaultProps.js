import { getCN } from "../../js/utils/index.js";

const baseClass = "container"
export const defaultProps = {
  baseClass,
  getClassName: getCN(baseClass),
  className: null,
  children: null
}