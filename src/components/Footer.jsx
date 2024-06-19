import React from "react";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
const Footer = () => {
  return (
    <Container>
            <section className="contact-short">
        <div classname="grid grid-two-column">
          <div>
            <h3>Need Help ? Connect with me !</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Contact KayBee Store</NavLink>
            </Button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container  grid grid-four-column">
          <div className="footer-about">
            <h3>Kalyani Bedre--KayBee Store</h3>
            <p>random text random text random text</p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://www.linkedin.com/in/kalyani-bedre-224b444b"
                  target="_blank"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>

              <div>
                <a href="https://github.com/kalyanib996" target="_blank">
                  <FaGithubSquare className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <h3>kalyanib996@gmail.com</h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column ">
            <p>@{new Date().getFullYear()} KayBee Store. Practise Project.</p>
            <div>
              <p>Made With <BsFillHeartFill style={{paddingTop:"0.25rem"}}/>  By-</p>
              <p>Kalyani Bedre</p>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};
const Container = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
export default Footer;
