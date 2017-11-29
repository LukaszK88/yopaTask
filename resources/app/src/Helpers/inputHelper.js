import React from 'react';
import { Input, TextArea } from 'semantic-ui-react';

class InputHelper {
  renderField(field) {
    const error = !!(field.meta.touched && field.meta.error);
    return (
      <div>
        <div className={field.labelClass}>{field.label}</div>
        <Input
          {...field.input}
          error={error}
          fluid={field.fluid}
          className={field.className}
          placeholder={field.placeholder}
        />

        <div style={{ color: 'red' }} className="text-help">
          { field.meta.touched ? field.meta.error : '' }
        </div>
      </div>
    );
  }

  renderTextArea(field) {
    const error = !!(field.meta.touched && field.meta.error);
    return (
      <div>
        <div className="form-group">
          <div className={field.labelClass}>{field.label}</div>
          <textarea
            {...field.input}
            className="form-control"
            rows="3"
          >

          </textarea>
        </div>
        <div style={{ color: 'red' }} className="text-help">
          { field.meta.touched ? field.meta.error : '' }
        </div>
      </div>
    );
  }
}

const inputHelper = new InputHelper();

export default inputHelper;
