import * as React from 'react';
import { Button } from 'semantic-ui-react';

const ActionButtons = ({
  closeAction,
  closeText,
  children
}) => (
  <div className="row">
    <div className="col-sm-12 d-flex justify-content-between">
      <Button
        onClick={closeAction}
        color="black"
        style={{alignSelf:'flex-end'}}
        content={closeText}
      />
      {children}
    </div>
  </div>
);

export default ActionButtons;

