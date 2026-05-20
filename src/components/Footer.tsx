import { Container, Row, Col } from 'react-bootstrap';
import {
  EnvelopeFill,
  Facebook,
  GeoAltFill,
  Instagram,
  TelephoneFill,
} from 'react-bootstrap-icons';

const Footer = () => (
  <footer className="molokai-footer">
    <Container>
      <Row className="g-5">
        <Col md={3}>
          <h5 className="molokai-footer-heading">Follow on Social Media</h5>

          <div className="molokai-footer-line" />

          <div className="molokai-footer-link-list">
            <a href="https://www.instagram.com/molokai_plumerias/" 
               className="molokai-footer-link">
              <Instagram className="molokai-footer-icon" />
              Instagram
            </a>

            <a href="https://www.facebook.com/moloplum" 
               className="molokai-footer-link">
              <Facebook className="molokai-footer-icon" />
              Facebook
            </a>
          </div>
        </Col>

        <Col md={3}>
          <h5 className="molokai-footer-heading">Hours</h5>

          <div className="molokai-footer-line" />

          <div className="molokai-footer-text-block">
            <p>Monday – Friday</p>
            <p>9am – 12pm</p>
          </div>
        </Col>

        <Col md={3}>
          <h5 className="molokai-footer-heading">Contact</h5>

          <div className="molokai-footer-line" />

          <div className="molokai-footer-text-block">
            <p className="molokai-footer-business-name">Molokai Plumerias</p>

            <p>
              <GeoAltFill className="molokai-footer-icon" />
              1342 Maunaloa Hwy
            </p>

            <p>P O BOX 557, Kaunakakai</p>
            <p>HI 96748, US</p>

            <a href="mailto:moloplum@gmail.com" className="molokai-footer-link">
              <EnvelopeFill className="molokai-footer-icon" />
              moloplum@gmail.com
            </a>

            <a href="tel:8082919772" className="molokai-footer-link">
              <TelephoneFill className="molokai-footer-icon" />
              (808) 291-9772
            </a>
          </div>
        </Col>

        <Col md={3}>
          <h5 className="molokai-footer-heading">Featured On</h5>

          <div className="molokai-footer-line" />

          <a
            href="https://www.kayak.com/Kaunakakai.6093.guide"
            className="molokai-kayak-badge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Molokai Plumerias on Kayak Guides"
          >
            <span>Featured on</span>
            <strong>Kayak</strong>
            <span>Guides</span>
          </a>
        </Col>
      </Row>

      <div className="molokai-footer-bottom">
        © 2026 Molokai Plumerias
      </div>
    </Container>
  </footer>
);

export default Footer;
