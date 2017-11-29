import React from 'react';
import dateFormat from 'dateformat';

class DateHelper {
  formatSubNoteDate(date) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    if (Date.parse(date) <= Date.parse(end) && Date.parse(date) >= Date.parse(start)) {
      return `Today at ${dateFormat(date, 'HH:MM')}`;
    }
    const yesterday = new Date(end.setDate(end.getDate() - 1));

    const yesterdayStart = yesterday.setHours(0, 0, 0, 0);

    const yesterdayEnd = yesterday.setHours(23, 59, 59, 999);

    if (Date.parse(date) <= yesterdayEnd && Date.parse(date) >= yesterdayStart) {
      return `Yesterday at ${dateFormat(date, 'HH:MM')}`;
    }

    if (Date.parse(date) < yesterdayStart) {
      return `${dateFormat(date, 'd/m/yy')} at ${dateFormat(date, 'HH:MM')}`;
    }
  }
}

const dateHelper = new DateHelper();

export default dateHelper;
