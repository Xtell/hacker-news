import "./style.pcss"
import { propTypes } from "./propTypes.js";
import { defaultProps } from "./defaultProps.js";
import classNames from "classnames";
function Logo({ getClassName, className }) {
  return (
      <a className={classNames(className, getClassName())} href="/">
        <img className={getClassName("img")} src="/logo.svg" alt="" width={48} height={48}/>
        <p className={getClassName("text")}>Hacker news</p>
      </a>
  )
}

Logo.propTypes = propTypes
Logo.defaultProps = defaultProps

export default Logo