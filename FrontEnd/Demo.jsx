function BookingInfo({ availability, time, timezone, duration }) {
  return (
    <div className="booking-info-container">
      <h6 className="mb-2">couse</h6>
      <ul>
        {availability.map((day) => (
          <li key={day}>{day}</li>
        ))}
        <li>{time}</li>
        <li>{timezone}</li>
        <li>Duration {duration}</li>
      </ul>
      <button className="mb-2" aria-label="Book Yoga Session Now">
        Enroll here
      </button>
    </div>
  );
}

function Demo() {
  const availability = ["Monday - Friday"];
  const time = "9:00am - 10:00am";
  const timezone = "Eastern Time";
  const duration = "1hour";

  return (
    <div className="demo">
      <h2 className="mb-2 demo-heading">Webinar  Session</h2>
      <div className="demo-container">
        <div className="demo-session-description">
          <p>
          In this session including testimonials from current students, alumni, or faculty members can provide valuable insights into the educational experience and outcomes. Success stories can inspire and motivate prospective students.
          </p>
          <BookingInfo
            availability={availability}
            time={time}
            timezone={timezone}
            duration={duration}
          />
        </div>
      </div>
    </div>
  );
}

export default Demo;
