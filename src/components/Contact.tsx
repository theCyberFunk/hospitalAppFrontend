import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="banner section">
        <h1>Contact Us</h1>
        <p>Home / Contact Us</p>
      </div>

      <div className="main section">
        <div className="map"></div>

        <div className="message">
          <div className="details">
            <div className="detail">
              <i className="fas fa-home"></i>
              <div>
                <h4>Noida, India</h4>
                <p>Sector 45</p>
              </div>
            </div>
            <div className="detail">
              <i className="fas fa-phone"></i>
              <div>
                <h4>00 (440) 9547 611</h4>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="detail">
              <i className="fas fa-home"></i>
              <div>
                <h4>support@tvastra.com</h4>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>

          {/* <form action="/contact" method="POST">
                    <input className="input1" type="text" name="name" placeholder="Enter your name">
                    <input className="input2" type="text" name="email" placeholder="Enter email address">
                    <input className="input3" type="text" name="subject" placeholder="Enter subject">
                    <textarea name="message" id="input4" cols="30" rows="20" placeholder="Enter Message"></textarea>
                    <button>Send Message</button>
                </form> */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
