function attendeeCollection() {
  const attendees = [];

  return {
    contains(attendee) {
      return attendee.indexOf(attendee) > -1;
    },

    add(attendee) {
      if (!this.contains(attendee)) {
        attendees.push(attendee);
      }
    },

    remove(attendee) {
      const idx = attendees.indexOf(attendee);

      if (idx > -1) {
        attendees.splice(idx, 1);
      }
    },

    iterate(callback) {
      // callback
    },
  };
}

export default attendeeCollection;
