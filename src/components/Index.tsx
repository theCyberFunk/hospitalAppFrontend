import Navbar from "./partials/Navbar";
import Help from "./partials/Help";
import Footer from "./partials/Footer";

export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="banner section">
        <h1>Find Affordable Healthcare</h1>
        <p>
          Join the thousands of others who have exercised their right to quality
          healthcare at a price you can afford.
        </p>
        <form action="/" method="POST">
          {/* <div className="loc"><img src="/images/loc.jpg" alt=""></div> */}
          <div className="loc"></div>
          <div className="location">
            {/* <input type="text" name="location" placeholder="Ahmedabad"> */}
          </div>
          {/* <div className="gps"><img src="/images/gps.png" alt=""></div> */}
          <div className="gps"></div>
          <div className="search autocomplete">
            {/* <input type="text" name="search" placeholder="Search for doctors, hospitals and treatment"> */}
          </div>
          <div className="btn">
            <button>Search</button>
          </div>
        </form>
      </div>

      <div className="process section">
        <div className="container">
          <div className="heading">
            <h1>How it works</h1>
          </div>
          <div className="paragraph">
            <p>
              Various facilities are provided here. But there is a protocol
              which needs to be followed so that you may get the service at its
              best.
            </p>
          </div>
          <div className="grid">
            <div className="list">
              <div className="list-item">
                <p>01</p>
                <p className="option">Fix Consultation</p>
              </div>
              <div className="list-item">
                <p>02</p>
                <p className="option">Upload Medical Reports</p>
              </div>
              <div className="list-item">
                <p>03</p>
                <p className="option">Consult with doctor</p>
              </div>
              <div className="list-item">
                <p>04</p>
                <p className="option">Fix Surgery</p>
              </div>
              <div className="list-item">
                <p>05</p>
                <p className="option">Hospital sent estimates</p>
              </div>
              <div className="list-item">
                <p>06</p>
                <p className="option">Payment</p>
              </div>
              <div className="list-item">
                <p>07</p>
                <p className="option">Surgery Completed</p>
              </div>
            </div>
            <div className="details">
              <div className="" id="details">
                {/* <img src="images/img1.png"> */}
                <h2>Fix Consultation</h2>
                <p>
                  This depicts that user will have to fix appointment first when
                  it selects a particular doctor.
                </p>
              </div>
              <div className=" hidden" id="details">
                {/* <img src="images/img2.png"> */}
                <h2>Upload Medical Reports</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, velit!
                </p>
              </div>
              <div className=" hidden" id="details">
                {/* <img src="images/img3.jpeg"> */}
                <h2>Consult with doctor</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, velit!
                </p>
              </div>
              <div className="hidden" id="details">
                {/* <img src="images/img4.jpeg"> */}
                <h2>Fix Surgery</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, velit!
                </p>
              </div>
              <div className="hidden" id="details">
                {/* <img src="images/img5.jpg"> */}
                <h2>Hospital sent estimates</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, velit!
                </p>
              </div>
              <div className="hidden" id="details">
                {/* <img src="images/img6.jpg"> */}
                <h2>Payment</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, velit!
                </p>
              </div>
              <div className="hidden" id="details">
                {/* <img src="images/img7.jpeg"> */}
                <h2>Surgery Completed</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, velit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="doctors section">
        <h1>World className expert doctors!</h1>
        <p>
          The University of Texas Southwestern Medical Center has long been a
          world-renowned research hospital. But until the '80s, you couldn't go
          there. Now, with the addition of the Aston center and Zale Lipshy
          hospital, UT Southwestern is also a mecca for patient care.
        </p>
        <div className="holder">
          <div className="card">
            {/* <div className="image"><img src="/images/image--002.jpg" alt="Duke Sanson"></div> */}
            <div className="info">
              <h4 id="name">Duke Sanson</h4>
              <p id="designation">Neuro Surgeon</p>
              <p id="department">Chain Department Of Neurological Surgery</p>
              <p id="country">Australia</p>
            </div>
          </div>
          <div className="card">
            {/* <div className="image"><img src="/images/image--004.jpg" alt="Georgia Peter"></div> */}
            <div className="info">
              <h4 id="name">Georgia Peter</h4>
              <p id="designation">Breast Cancer Surgeon</p>
              <p id="department">Director, UT Southwest</p>
              <p id="country">London</p>
            </div>
          </div>
          <div className="card">
            {/* <div className="image"><img src="/images/image--005.jpg" alt="Charlie Moon"></div> */}
            <div className="info">
              <h4 id="name">Charlie Moon</h4>
              <p id="designation">Cardiac Surgeon</p>
              <p id="department">MBBS, MD, FRCP, MRCP, Fellowship</p>
              <p id="country">New Delhi, India</p>
            </div>
          </div>
          <div className="card">
            {/* <div className="image"><img src="/images/image--003.jpg" alt="Rose Moon"></div> */}
            <div className="info">
              <h4 id="name">Rose Moon</h4>
              <p id="designation">Plastic Surgeon</p>
              <p id="department">
                Department of Plastic and Reconstructive Surgery
              </p>
              <p id="country">Dubai</p>
            </div>
          </div>
        </div>
      </div>

      <div className="treatments section">
        <h1>Featured Medical Treatments</h1>
        <p>
          The hospital provides various medical treatments done by expert
          doctors. Your health is our priority.
        </p>
        <div className="holder">
          <div className="card card-1">
            <p className="name">Cancer</p>
            <p className="number">50+ Specialists</p>
          </div>
          <div className="card card-2">
            <p className="name">Dentistry</p>
            <p className="number">50+ Specialists</p>
          </div>
          <div className="card card-3">
            <p className="name">Orthopedics Surgery</p>
            <p className="number">50+ Specialists</p>
          </div>
          <div className="card card-4">
            <p className="name">Cardiology Treatment</p>
            <p className="number">50+ Specialists</p>
          </div>
          <div className="card card-5">
            <p className="name">Infertility Treatment</p>
            <p className="number">50+ Specialists</p>
          </div>
          <div className="card card-6">
            <p className="name">Multi Organ Transplant</p>
            <p className="number">50+ Specialists</p>
          </div>
        </div>
      </div>

      <div className="misc section">
        <h1>Exclusive Services</h1>
        <p>
          We want you to be comfortable and thus apart from treating your
          illness, we provide you with Contact Us that can ease you.
        </p>
        <div className="grid">
          <div className="item">
            {/* <img src="/images/Icons-01.png"> */}
            <h4>Travel</h4>
          </div>
          <div className="item">
            {/* <img src="/images/Icons-02.png"> */}
            <h4>Food</h4>
          </div>
          <div className="item">
            {/* <img src="/images/Icons-03.png"> */}
            <h4>Accomodation</h4>
          </div>
          <div className="item">
            {/* <img src="/images/Icons-07.png"> */}
            <h4>Labs</h4>
          </div>
          <div className="item">
            {/* <img src="/images/Icons-10.png"> */}
            <h4>Reports</h4>
          </div>
          <div className="item">
            {/* <img src="/images/Icons-06.png"> */}
            <h4>Ambulance</h4>
          </div>
        </div>
      </div>
      <Help />
      <Footer />
    </div>
  );
}
