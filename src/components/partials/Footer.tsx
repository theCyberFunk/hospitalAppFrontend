export default function Footer() {
  return (
    <div className="footer section">
      {/* <img src="/images/footer.png" onclick="window.location.href = '/';">   */}
      <h2>TVASTRA</h2>
      <ul className="links">
        <li>
          <a href="/doctors">Doctors</a>
        </li>
        <li>
          <a href="/hospitals">Hospitals</a>
        </li>
        <li>
          <a href="/treatment">Treatment</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li>
          <a href="/faq">FAQs</a>
        </li>
      </ul>
      <div className="icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-google-plus"></i>
        <i className="fab fa-instagram"></i>
      </div>
      <div className="follow">
        <h2>FOLLOW US</h2>
        <ul>
          <li>Facebook</li>
          <li>Pinterest</li>
          <li>Twitter</li>
          <li>
            Google<sup>+</sup>
          </li>
          <li>Instagram</li>
        </ul>
      </div>
      <p>All Rights reserved. © tvastra 2018</p>
    </div>
  );
}
