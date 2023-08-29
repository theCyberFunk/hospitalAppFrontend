import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

export default function Index() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="banner section">
        <main>
          <h1>Living healthy matters.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ullam
            repudiandae incidunt, laborum soluta fugit?
          </p>
        </main>
      </div>

      <div className="main section">
        <div className="text">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            magnam aut! Vel, unde fugit. Inventore, accusamus nesciunt.
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem in dolorum, sint voluptatum repudiandae labore est
            reprehenderit delectus officiis, dolores earum dignissimos ipsam
            expedita dolor veritatis autem dolore
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem in dolorum, sint voluptatum repudiandae labore est
            reprehenderit delectus officiis, dolores earum dignissimos ipsam
            expedita dolor veritatis autem dolore
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem in dolorum, sint voluptatum repudiandae labore est
            reprehenderit delectus officiis, dolores earum dignissimos ipsam
            expedita dolor veritatis autem dolore
          </p>
        </div>
        {/* <div className="sign"><img src="/images/signature.png" alt=""></div> */}
        {/* <div className="image"><img src="/images/femaleDoctor.png" alt=""></div> */}
      </div>

      <div className="stats section">
        <div className="text">
          <h1>Your wellness builds upon the medical daily.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
            qui! Aperiam nobis delectus modi suscipit autem nulla obcaecati
            praesentium voluptate?
          </p>
          <button>Get a Free Checkup</button>
        </div>
        <div className="tiles">
          <div className="tile">
            <h1>12M</h1>
            <p>Happy Patients</p>
          </div>
          <div className="tile">
            <h1>5K</h1>
            <p>Medical Assistants</p>
          </div>
          <div className="tile">
            <h1>9.8</h1>
            <p>Alexa Score</p>
          </div>
          <div className="tile">
            <h1>3.2K</h1>
            <p>Doctors Available</p>
          </div>
          <div className="tile">
            <h1>45K</h1>
            <p>Cure Rate</p>
          </div>
          <div className="tile">
            <h1>75</h1>
            <p>Health Points</p>
          </div>
        </div>
      </div>

      <div className="joinus section">
        <div className="text">
          <h1>Join our team</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <button>Submit your CV</button>
      </div>
      <Footer></Footer>
    </div>
  );
}
