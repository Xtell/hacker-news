import './style.pcss'
import { propTypes } from "./propTypes.js";
import { defaultProps } from "./defaultProps.js";
import { Container, Logo } from "../index.js";

function Header({ getClassName }) {
  return (
      <div className={ getClassName() }>
        <Container>
          <div className={ getClassName("inner") }>
            <div className={ "logo" }>
              <Logo/>
            </div>
          </div>
        </Container>
      </div>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header