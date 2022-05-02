import React,{useState} from 'react';
import styled from 'styled-components';
import Destination1 from "../assets/pune.jpg";
import Destination2 from "../assets/mumbai.jpg";
import Destination3 from "../assets/Ajanta-and-Ellora-Caves.jpg";
import Destination4 from "../assets/Lonavala.jpg";
import Destination5 from "../assets/Matheran.jpg";
import Destination6 from "../assets/kolhapur.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
    const data = [
        {
          image: Destination1,
          title: "Pune",
          subTitle: "Pune is known as 'Oxford of East' & is also the 2nd major IT hub ",
          cost: "1000 Rs",
          duration: "Approx 1 night trip",
          distance: "154 Kms",
        },
        {
          image: Destination2,
          title: "Mumbai",
          subTitle: "Mumbai being the capital of Maharashtra is a cosmopolitan metropolis city",
          cost: "1500 Rs",
          duration: "Approx 1 night trip",
          distance: "154 Kms",
        },
        {
          image: Destination3,
          title: "Ajanta - Ellora Caves",
          subTitle: "This Caves located near Aurangabad are the rock-cut caves that define Buddhist, Jain and Hindu monuments",
          cost: "2000 Rs",
          duration: "Approx 3 night trip",
          distance: "432 Kms",
        },
        {
          image: Destination4,
          title: "Lonavala",
          subTitle: "Lonavala, a famous hill station also known as 'Jewel of Sahayadri' includes stunning waterfalls",
          cost: "1200 Rs",
          duration: "Approx 1 night trip",
          distance: "83 Kms",
        },
        {
          image: Destination5,
          title: "Matheran",
          subTitle: "Matheran, being the smallest hill station famous for trekking, rock climbing etc",
          cost: "1800 Rs",
          duration: "Approx 3 night trip",
          distance: "83 Kms",
        },
        {
          image: Destination6,
          title: "Kolhapur",
          subTitle: "Kolhapur, being a historical & spiritual base is known for it's temples, spices etc",
          cost: "1400 Rs",
          duration: "Approx 2 night trip",
          distance: "375 Kms",
        },
      ];
    
      const packages = [
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel",
      ];

      const [active, setActive] = useState(1);
    
    return (
    <>
        <Section id="recommend">
            <div className="title">
                <h2>Recommend Destinations <span>&#9970;</span></h2>
            </div>
            <div className="packages">          {/*Set blue line below when clicked/switched on that particular package number*/}
                <ul>
                    {
                        packages.map((pkg,index) => {
                            return (
                                <li className={active === index + 1 ? "active": ""}  
                                onClick={() => setActive(index + 1)}>
                                {pkg}
                                </li> 
                            );
                        })}
                </ul>
            </div>
                <div className="destinations">
                    {data.map((destination) => {
                        return (
                        <div className="destination">
                            <img src={destination.image} alt="Destination Image" />
                            <h3>{destination.title}</h3>
                            <p>{destination.subTitle}</p>
                            <div className="info">
                               <div className="services">
                                    <img src={info1} alt="" />
                                    <img src={info2} alt="" />
                                    <img src={info3} alt="" />
                                </div>
                                <h4>{destination.cost}</h4>
                            </div>
                            <div className="distance">
                                <span>{destination.distance}</span>
                                <span>{destination.duration}</span>
                            </div>
                        </div>
                        );
                    })}
                </div>
            
        </Section>
    </>
    );
        
    
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        max-width: 100%;
        border-radius:5%;
        height: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
