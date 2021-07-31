import { IConference } from './interface';
import attendeeCollection from './attendeeCollection';
import checkedInAttendeeCounter from './checkedInAttendeeCounter';

const Conference: IConference = {
  attendeeCollection,
  checkedInAttendeeCounter,
};

export default Conference;
