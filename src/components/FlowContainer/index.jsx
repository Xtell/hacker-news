import './style.pcss'
import { propTypes } from "./propTypes.js";
import { defaultProps } from "./defaultProps.js";

function FlowContainer({ children }) {
  return (
      <div className="flow-container">
        { children }
      </div>
  )
}

FlowContainer.propTypes = propTypes
FlowContainer.defaultProps = defaultProps

export default FlowContainer