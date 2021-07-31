function checkedInAttendeeCounter() {
  let checkedInAttendees = 0;

  return {
    increment() {
      return checkedInAttendees++;
    },
    getCount() {
      return checkedInAttendees;
    },
    countIfCheckedIn(attendee) {
      if (attendee.isCheckedIn()) {
        this.increment();
      }
    },
  };
}

export default checkedInAttendeeCounter;
