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
        src="https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjE_vSouuTXAhVeGsAKHRIdCjoQjRwIBw&url=https%3A%2F%2Fpixabay.com%2Fen%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw0dAo0O_KPkV2EVyN0ZZYqB&ust=1512067980846166"/>
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

