import React from 'react';
import { Button } from 'reactstrap';

/** -------Props--------
 * isSmall: dictates display of text field
 * icon: desired icon (i.e. <FontAwesomeIcon icon={...} />)
 * text: the text label for the button
 */
/** --------Optional props--------
 * any props you would apply to a reactstrap Button.
 */
const ViewportAwareButton = function (props) {
  // extract icon and text from props.
  const {
    icon, text, isSmall, ...remainder
  } = props;

  // render icon always, text only if not small.
  return (
    <Button {...remainder}>
      {icon}

      {!isSmall && (
        <span className="viewport-aware-button-text">
          {text}
        </span>
      )}
    </Button>
  );
};

export default ViewportAwareButton;
