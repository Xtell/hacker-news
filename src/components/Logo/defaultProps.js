import { getCN } from "../../js/utils/index.js";

const baseClass = "logo"
export const defaultProps = {
  baseClass,
  getClassName: getCN(baseClass),
  className: null,
  children: null
}