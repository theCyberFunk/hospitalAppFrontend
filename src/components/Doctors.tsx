import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

export default function Doctors() {
  return (
    <div>
      <Navbar user={{ name: "user", username: "adfaadf" }} />
      <div className="banner section">
        <p>
          Hospitals in{" "}
          <span>
            <u>Delhi</u>
          </span>
        </p>
      </div>

      <div className="main section">
        <div className="header">
          <h3>Home / Doctor List</h3>
          <button>Sort by</button>
        </div>

        <div className="lists">
          <div className="list">
            <div className="head">
              <h4>Location</h4>
              <div className="icons">
                <i className="fas fa-search"></i>
                <i className="fas fa-minus"></i>
              </div>
            </div>
            <div className="options">
              <div className="option"><input type="checkbox"/><label htmlFor="">DLF Cyber City</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Dwaraka</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Lajpat Nagar</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Palam Vihar</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Punjabi Baag</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Pusa Road</label></div>
            </div>
            <button>+ Show more</button>
          </div>

          <div className="list">
            <div className="head">
              <h4>Treatments</h4>
              <div className="icons">
                <i className="fas fa-search"></i>
                <i className="fas fa-minus"></i>
              </div>
            </div>
            <div className="options">
              <div className="option"><input type="checkbox"/><label htmlFor="">Multi Organ Transplant</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Orthopedic Surgery</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Infertility Treatment</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Dentistry</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Cardiology</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Cancer</label></div>
            </div>
            <button>+ Show more</button>
          </div>

          <div className="list">
            <div className="head">
              <h4>Hospitals</h4>
              <div className="icons">
                <i className="fas fa-search"></i>
                <i className="fas fa-minus"></i>
              </div>
            </div>
            <div className="options">
              <div className="option"><input type="checkbox"/><label htmlFor="">Apollo Hospital</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Manipal North Side Hospital</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Northstar</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">AIIMs</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Fortis Hospital</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">Elbit Diagnostics</label></div>
            </div>
            <button>+ Show more</button>
          </div>

          <div className="list">
            <div className="head">
              <h4>Years of Experience</h4>
              <div className="icons">
                <i className="fas fa-search"></i>
                <i className="fas fa-minus"></i>
              </div>
            </div>
            <div className="options">
              <div className="option"><input type="checkbox"/><label htmlFor="">30+</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">25+</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">20+</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">15+</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">10+</label></div>
              <div className="option"><input type="checkbox"/><label htmlFor="">5+</label></div>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="info">
              <h4 id="name">Duke Sanson</h4>
              <div className="details">
                <div>
                  <i className="fas fa-certificate"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="fas fa-award"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="far fa-clock"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="far fa-hospital"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>asdf</p>
                </div>
              </div>
              <a href="/appointment"><button>Book an appointment</button></a>
            </div>
            <div className="image">
              <img src="/images/image--002.jpg" alt="Duke Sanson"/>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h4 id="name">Georgia Peter</h4>
              <div className="details">
                <div>
                  <i className="fas fa-certificate"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="fas fa-award"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="far fa-clock"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="far fa-hospital"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>asdf</p>
                </div>
              </div>
              <button>Book an appointment</button>
            </div>
            <div className="image">
              <img src="/images/image--004.jpg" alt="Georgia Peter"/>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h4 id="name">Charlie Moon</h4>
              <div className="details">
                <div>
                  <i className="fas fa-certificate"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="fas fa-award"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="far fa-clock"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="far fa-hospital"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>asdf</p>
                </div>
              </div>
              <button>Book an appointment</button>
            </div>
            <div className="image">
              <img src="/images/image--005.jpg" alt="Charlie Moon"/>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h4 id="name">Rose Moon</h4>
              <div className="details">
                <div>
                  <i className="fas fa-certificate"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="fas fa-award"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="far fa-clock"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="far fa-hospital"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>asdf</p>
                </div>
              </div>
              <button>Book an appointment</button>
            </div>
            <div className="image">
              <img src="/images/image--003.jpg" alt="Rose Moon"/>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h4 id="name">Shubham Shinde</h4>
              <div className="details">
                <div>
                  <i className="fas fa-certificate"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="fas fa-award"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="far fa-clock"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="far fa-hospital"></i>
                  <p>asdf</p>
                </div>
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>asdf</p>
                </div>
              </div>
              <button>Book an appointment</button>
            </div>
            <div className="image">
              <img src="/images/image--006.jpg" alt="Shubham Shinde"/>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
