import { getCN } from "./index.js";

function getBaseDefaultProps(baseClass) {
  return {
    baseClass,
    getClassName: getCN(baseClass),
    extraClasses: {},
    extraAttrs: {},
    children: null
  }
}

export default getBaseDefaultProps