import PropTypes from "prop-types";

function getBasePropTypes() {
  return {
    baseClass: PropTypes.string,
    getClassName: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }
}

export default getBasePropTypes