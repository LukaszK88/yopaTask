import * as React from 'react';
import { connect } from 'react-redux';
import { addNote, addSubNote } from '../../Actions/notes';
import { Modal, Icon, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import inputHelper from '../../Helpers/inputHelper';
import {ActionButtons} from "../index";

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }
  onSubmit(values) {
      values.user_id = this.props.user.user.id;
    if(!this.props.selectedNote) {
      this.props.addNote(values);
    }else{
      values.note_id = this.props.selectedNote.id;
      this.props.addSubNote(values);
    }
    this.handleClose();
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const handleSubmit = this.props.handleSubmit;
    console.log(this.props);
    return (
      <Modal style={{height:300}} closeIcon size="tiny" open={this.state.modalOpen}  onClose={this.handleClose}  trigger={<Button
        onClick={this.handleOpen}
        className="loginButton"
        color="teal"
        labelPosition="right"
        icon="right chevron"
        type="submit"
        content={this.props.buttonText}
      />}>
        <Modal.Header>New Note</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className="row">
                <div className="col-sm-12">
                  {!this.props.selectedNote &&
                  <Field
                    label="Title"
                    name="title"
                    fluid={true}
                    type="text"
                    component={inputHelper.renderField}
                  />
                  }
                  <Field
                    label="Note"
                    name="body"
                    component={inputHelper.renderTextArea}
                  />
                </div>
              </div>
              <ActionButtons closeText="Close" closeAction={this.handleClose}>
                <Button
                  className=""
                  color="teal"
                  labelPosition="right"
                  icon="right chevron"
                  type="submit"
                  content="ADD NOTE"
                />
              </ActionButtons>
            </form>

          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title cannot be empty';
  }

  if (!values.body) {
    errors.body = 'Note text should not be empty';
  }

  return errors;
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default reduxForm({ validate, form: 'addNoteForm' })(connect(mapStateToProps, { addNote, addSubNote })(NewNote));
