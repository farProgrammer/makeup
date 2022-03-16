import { Container, Row, Col } from "react-bootstrap";
import styles from "../components/Footer.module.css";
import logo from "../assets/img/logo.png";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { HiMailOpen, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className={`bg-dark pt-4`}>
      <Container className="pl-0 pr-0">
        <Row className={`text-danger mx-auto ${styles.Size}`}>
          <Col>
            <Row className="mb-3" style={{ borderBottom: "1px solid purple " }}>
              <Col sm={4}>
                <Row className="mt-3">
                  <Col xs={4}>
                    <a href="/">
                      <img className={styles.Img} src={logo} alt="logo" />
                    </a>
                  </Col>
                  <Col>
                    <h3 className="font-weight-bold">💅 World Of Cosmetics🛍</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="text-center">
                      <img
                        src="https://cdn.lifestyleasia.com/wp-content/uploads/sites/7/2020/12/22164003/44737027_1988035297909598_5577300803800006656_o.jpg"
                        alt="makeup"
                        width="80px"
                        height="60px"
                      />
                      Makeup Brands For Trendy People
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col className="mb-4" sm={4}>
                <p className="font-weight-bold text-center">
                  Cosmetic Shopping
                </p>
                <p className={`mb-0 pb-0 ${styles.LeftMar}`}>
                  <FaPhoneAlt /> Telephone: 1234567891
                </p>
                <p className={`mb-0 pb-0 ${styles.LeftMar}`}>
                  <HiMailOpen /> Email:makeup@gmail.com
                </p>
                <p className={`mb-0 pb-0 ${styles.LeftMar}`}>
                  <HiLocationMarker />
                  Makeup World ,Makeup City,Fashionable street-1234
                </p>
              </Col>
              <Col className="mb-4" sm={4}>
                <p className="font-weight-bold text-center">Social Network</p>
                <p className={`mb-0 pb-0 ${styles.LeftMar}`}>
                  <FaFacebookSquare /> Facebook:{" "}
                  <a
                    className="text-info"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    Makeup Products
                  </a>
                </p>
                <p className={`mb-0 pb-0 ${styles.LeftMar}`}>
                  <FaTwitter /> Twitter:{" "}
                  <a
                    className="text-info"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    @
                  </a>
                </p>
                <p className={`mb-0 pb-0 ${styles.LeftMar}`}>
                  <FaInstagram /> Instagram:{" "}
                  <a
                    className="text-info"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    @
                  </a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <p>
                  Made by {" Farheena Khan"}
                  <a
                    className="text-info"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  ></a>{" "}
                </p>
                <p className="mb-0">
                  <small>World Of Beautiful People &copy;2022</small>
                  <img
                    src="https://media.istockphoto.com/photos/make-up-products-on-wooden-background-picture-id656296680?b=1&k=20&m=656296680&s=170667a&w=0&h=5ocs91cd-AiPE3sQMb6vpNLylEC78mtAXI_aBfswQoA="
                    alt="makeup"
                    width="300px"
                    height="200px"
                  />
                </p>
                <p>
                  <small>New Makeup Products</small>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
