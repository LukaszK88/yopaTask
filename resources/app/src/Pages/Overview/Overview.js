import * as React from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../../Actions/notes';
import { logout } from '../../Actions/user';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import { NewNote, Header } from '../../Components';
import * as _ from 'lodash';
import dateFormat from 'dateformat';

import './Overview.css';

class Overview extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }

  renderNotes() {
    return _.map(_.orderBy(this.props.notes, ['created_at'], ['desc']), note => (
      <List.Item key={note.id}>
        <Link to={`note/${note.id}`}>
          <div className="row">
            <div className="col-sm-3 col-4">
              <span style={{marginRight:5}} className="badge badge-success"> { note.sub_notes.length }</span>
              {note.user.name}
            </div>
            <div className="col-sm-3 col-4">
              {note.title}
            </div>
            <div className="col-sm-3 col-4 offset-sm-3">
              {`${dateFormat(note.created_at, 'd/m/yy')} at ${dateFormat(note.created_at, 'HH:MM')}`}
            </div>
          </div>
        </Link>
      </List.Item>
    ));
  }

  logout() {
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="col-sm-12">
        <Header logout={() => this.logout()} text="Notes overview" overview />
        <div className="row">
          <div className="col-sm-8 offset-sm-2 d-flex justify-content-between ">
            <div className="card overviewCard">
              <div className="card-block">
                <List celled relaxed size="large">
                  <List.Item style={{borderTop:0}}>
                    <div className="row">
                      <div className="col-sm-3 col-4">
                        <div className="columnHeader"> Created By </div>
                      </div>
                      <div className="col-sm-3 col-4">
                        <div className="columnHeader">Title</div>
                      </div>
                      <div className="col-sm-3 col-4 offset-sm-3">
                        <div className="columnHeader">Date</div>
                      </div>
                    </div>
                  </List.Item>
                  {this.renderNotes()}
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 offset-sm-2 ">
            <NewNote selectedNote={null} buttonText="CREATE A NEW NOTE" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { notes: state.note.notes };
}

export default connect(mapStateToProps, { getNotes, logout })(Overview);
