import Navbar from "./partials/Navbar";

export default function Appointment() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main">
        <div className="box">
          <div className="head">
            <h4>Book an Appointment</h4>
          </div>
          {/* <form action="/appointment" method="POST" enctype="multipart/form-data"> */}
          <form action="/appointment" method="POST">
            <div className="form-section">
              <p>Select Appointment Date*</p>
              {/* <input className="input1" type="date" name="date"> */}
            </div>
            <div className="form-section">
              <p>Time Interval*</p>
              <ul>
                {/* <div className="option"><input type="radio" name="time" id="morning" value="Morning"><label for="morning">Morning</label></div> */}
                {/* <div className="option"><input type="radio" name="time" id="afternoon" value="Afternoon"><label for="afternoon">Afternoon</label></div> */}
                {/* <div className="option"><input type="radio" name="time" id="evening" value="Evening"><label for="evening">Evening</label></div> */}
              </ul>
            </div>
            <div className="form-section">
              <p>Appointment Status / Urgency*</p>
              <ul>
                {/* <div className="option"><input type="radio" name="status" id="routine" value="Routine Check-up"><label for="routine">Routine Check-up</label></div> */}
                {/* <div className="option"><input type="radio" name="status" id="non-urgent" value="Non Urgent Check-up"><label for="non-urgent">Non Urgent Check-up</label></div> */}
                {/* <div className="option"><input type="radio" name="status" id="urgent" value="Urgent Check-up"><label for="">Urgent Check-up</label></div> */}
                {/* <div className="option"><input type="radio" name="status" id="surgical" value="Surgical Appointment"><label for="surgical">Surgical Appointment</label></div> */}
              </ul>
            </div>
            <div className="form-section">
              <p>Upload Previous Health Record</p>
              {/* <input type="file" name="image" id="image"> */}
            </div>
            <div className="form-section">
              <p>Appointment Details</p>
              {/* <textarea name="details" id="" cols="30" rows="10"></textarea> */}
            </div>
            <button className="button">
              B O O K <span>A P P O I N T M E N T</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>

        <div className="footer">
          <p>All Rights Reserved. © tvastra 2020</p>
        </div>
      </div>
    </div>
  );
}
