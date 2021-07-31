describe('Conference.attendeeCollection', () => {
  describe('contains(attendee)', () => {
    // contains 테스트
  });

  describe('add(attendee)', () => {
    // add 테스트
  });

  describe('remove(attendee)', () => {
    // remove 테스트
  });

  describe('iterate(callback', () => {
    let collection, callbackSpy;

    const addAttendeesToCollection = (attendeeArray) => {
      attendeeArray.forEach((attendee) => collection.add(attendee));
    };

    const verifyCallbackWasExecutedForEachAttendee = (attendeeArray) => {
      // 각 원소마다 한 번씩 스파이가 호출되었는지 확인한다.
      expect(callbackSpy.calls.count()).toBe(attendeeArray.length);

      // 각 호출마다 spy에 전달한 첫 번째 인자가 해당 attendee인지 확인한다.
      const allCalls = callbackSpy.calls.all();
      for (let i = 0; i < allCalls.length; i++) {
        expect(allCalls[i].args[0]).toBe(attendeeArray[i]);
      }
    };

    beforeEach(() => {
      collection = Conference.attendeeCollection();
      callbackSpy = jest.spyOn();
    })

    it('빈 컬렉션에서는 콜백을 실행하지 않는다.', () => {
      collection.iterate(callbackSpy);
    
      expect(callbackSpy).not.toHaveBeenCalled();
    });


    it('원소가 하나뿐인 컬렉션은 콜백을 한 번만 실행한다.', () => {
      let attendees = [
        Conference.attendee('윤지', '김');
        
        addAttendeesToCollection(attendees);
      ]
    });


  });
});
