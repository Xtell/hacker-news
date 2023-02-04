import { getCN } from "../../js/utils/index.js";

const baseClass = "header"
export const defaultProps = {
  baseClass,
  getClassName: getCN(baseClass),
  children: null
}