import * as React from 'react';
import { Feed } from 'semantic-ui-react';
import dateHelper from '../../Helpers/dateHelper';
import './SubNoteItem.css';

const SubNoteItem = ({
  subNote,
}) => (
  <Feed.Event >
    <Feed.Label>
      <img
        src={subNote.user.image}/>
    </Feed.Label>
    <Feed.Content className="subNote">
      <Feed.Summary>
        <Feed.User>{subNote.user.name}</Feed.User>
        <Feed.Date className="dateSubNote">{dateHelper.formatSubNoteDate(subNote.created_at)}</Feed.Date>
      </Feed.Summary>
      <Feed.Extra text>
        {subNote.body}
      </Feed.Extra>
    </Feed.Content>
  </Feed.Event>
);

export default SubNoteItem;
