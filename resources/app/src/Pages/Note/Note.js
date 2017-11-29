import * as React from 'react';
import { connect } from 'react-redux';
import { getNote } from '../../Actions/notes';
import { ActionButtons, SubNoteItem, NewNote, Header } from '../../Components';
import { Feed, Icon } from 'semantic-ui-react';
import * as _ from 'lodash';

import './Note.css';

class Note extends React.Component {
  componentWillMount() {
    this.props.getNote(this.props.match.params.id);
  }

  renderSubNotes() {
    if (this.props.selectedNote) {
      if(this.props.selectedNote.sub_notes.length > 1) {
        return _.map(_.orderBy(this.props.selectedNote.sub_notes, ['created_at'], ['desc']), subNote => (
          <SubNoteItem key={subNote.id} subNote={subNote}/>
        ));
      }else{
        return(
          <div>No Notes...</div>
        )
      }
    }
  }

  goBack() {
    this.props.history.push('/overview');
  }

  render() {
    const { selectedNote } = this.props;
    return (
      <div className="col-sm-12">
        {selectedNote &&
        <Header text={selectedNote.title} overview={false}/>
        }
        <div className="row">
          <div className="col-sm-8 offset-sm-2 ">
            <ActionButtons
              closeText="Back to overview"
              closeAction={() => this.goBack()}
            >
              <NewNote selectedNote={selectedNote} buttonText="ADD NOTE" />
            </ActionButtons>
          </div>
        </div>
        <hr style={{ width: '70%' }} />
        <div className="row">
          <div className="col-sm-8 offset-sm-2 d-flex justify-content-between ">
            <Feed className="feedContainer">
              {this.renderSubNotes()}
            </Feed>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedNote: state.note.selectedNote };
}

export default connect(mapStateToProps, { getNote })(Note);
