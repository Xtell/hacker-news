import { defaultProps } from "./defaultProps.js";
import { propTypes } from "./propTypes.js";

function StoryItem(props) {
  const { itemId, title, url, author, creationDate, getCN } = props;

  return (
      <div className={ getCN() }>
        <div className={ getCN("title") }>{ title }</div>
      </div>
  );
}

StoryItem.defaultProps = defaultProps;
StoryItem.propTypes = propTypes;