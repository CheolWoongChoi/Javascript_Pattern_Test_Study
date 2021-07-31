function attendee(firstName: string, lastName: string) {
  const first = firstName || 'None';
  const last = lastName || 'None';

  let checkedIn = false;

  return {
    getFullName() {
      return first + ' ' + last;
    },

    isCheckedIn() {
      return checkedIn;
    },

    checkIn() {
      checkedIn = true;
    },
  };
}

export default attendee;
