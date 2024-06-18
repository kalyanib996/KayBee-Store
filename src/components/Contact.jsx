import React from "react";
import styled from "styled-components";
import { Button } from "../Styles/Button";

const Contact = () => {
  return (
    <Container>
      <h3 className="common-heading">Contact</h3>
      <iframe
      title="Calgary"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.504591614652!2d-114.08532612382596!3d51.043770071711585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe0e68917b7%3A0xc0476a28caa8e123!2sVersus!5e0!3m2!1sen!2sca!4v1718686743659!5m2!1sen!2sca"
        width="100%"
        height="350"
        style={{ border: '0', width:'100%', height:350 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mjvnndlw" method="POST" className="contact-inputs">
            <input
              type="text"
              name="Username"
              placeholder="Username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="email"
              placeholder="email"
              required
              autoComplete="off"
            />

            <textarea
              name="msg"
              placeholder="Enter your message here"
              required
              autoComplete="off"
              rows={10}
              cols={25}
            ></textarea>

            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
export default Contact;
