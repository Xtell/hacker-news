import { getBasePropTypes } from "../../js/utils/index.js";
import PropTypes from "prop-types";

export const propTypes = {
  ...getBasePropTypes(),
  itemId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  creationTime: PropTypes.number,
}