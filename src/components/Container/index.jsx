import "./style.pcss"
import { propTypes } from "./propTypes.js";
import { defaultProps } from "./defaultProps.js";
import classNames from "classnames";
function Container({ getClassName, children, className }) {
  return (
      <div className={classNames(className, getClassName())}>
        { children }
      </div>
  )
}

Container.propTypes = propTypes
Container.defaultProps = defaultProps

export default Container