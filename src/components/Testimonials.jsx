import React from 'react';
import styled from 'styled-components';
import avatarImage1 from "../assets/avatarImage1.jpg";
import avatarImage2 from "../assets/avatarImage2.jpg";
import avatarImage3 from "../assets/avatarImage3.jpg";

export default function Testimonials() {
    return (
        <Section id="testimonials">
            <div className="title">
                <h2>Happy Customers <span>&#128516;</span></h2>
            </div>
            <div className="testimonials">
                <div className="testimonial">
                    <p>
                    Great Experience! Would like to visit India with the 
                    same Travel Company.
                    </p>
                    <div className="info">
                        <img src={avatarImage3} alt="" />
                        <div className="details">
                            <h4>Laurel Thomas</h4>
                            <span>Atlanta, Georgia, USA</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial">   {/*Display reviews*/}
          <p>
           Worth the Trip! Surely will recommend this Travel Company to others in my circle too.
          </p>
          <div className="info">
            <img src={avatarImage1} alt="" />
            <div className="details">
              <h4>Stephan Hubbard</h4>
              <span>Glasgow, Scotland, UK</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Cooperative person and Wonderful trip! Will visit again.
          </p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Roberta Dell'Anno</h4>
              <span>Boston, USA</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
    );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 18px
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;

