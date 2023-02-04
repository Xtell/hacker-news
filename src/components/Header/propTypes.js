import PropTypes from "prop-types";

export const propTypes = {
  baseClass: PropTypes.string.isRequired,
  getClassName: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}