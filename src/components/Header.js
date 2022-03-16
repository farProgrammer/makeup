import { Container, Row, Col } from "react-bootstrap";

import styles from "../components/Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.Bg}>
      <div className={`${styles.BgTop}`}>
        <Container>
          <Row className="pt-4 text-light">
            <Col className={`${styles.Bottom}`}>
              <h1
                className={`
                                    ${styles.Head} 
                                    ${styles.Animated} 
                                    ${styles.AnimatedFadeInUp} 
                                    ${styles.FadeInUp}`}
                style={{ color: "purple" }}
              >
                WELCOME TO MAKEUP WORLD
              </h1>
              <h3
                className={`
                                    ${styles.AnimatedChild} 
                                    ${styles.AnimatedFadeInUp} 
                                    ${styles.FadeInUp}`}
                style={{ color: "green" }}
              >
                "ALL BRANDS IN ONE WEBSITE."
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
