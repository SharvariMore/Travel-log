import React,{useState} from 'react';
import styled from 'styled-components';
import Destination1 from "../assets/pune.jpg";
import Destination2 from "../assets/mumbai.jpg";
import Destination3 from "../assets/Ajanta-and-Ellora-Caves.jpg";
import Destination4 from "../assets/Lonavala.jpg";
import Destination5 from "../assets/Matheran.jpg";
import Destination6 from "../assets/kolhapur.jpg";
import Destination7 from "../assets/Shirdi.jpg";
import Destination8 from "../assets/Solapur.jpg";
import Destination9 from "../assets/sangli.jpg";
import Destination10 from "../assets/Mahabaleshwar.jpg";
import Destination11 from "../assets/Ratnagiri.jpg";
import Destination12 from "../assets/Nashik.jpeg";

export default function Recommend() {
    const data = [
        {
          image: Destination1,
          title: "Pune",
          subTitle: "Pune, often referred to as the 'Oxford of the East', is also the second-largest IT hub in India",
          cost: "1000 Rs",
          duration: "Approx 1 night trip",
          distance: "154 Kms",
        },
        {
          image: Destination2,
          title: "Mumbai",
          subTitle: "Mumbai, capital of Maharashtra is a bustling cosmopolitan metropolis and heart of Bollywood industry",
          cost: "1000 Rs",
          duration: "Approx 1 night trip",
          distance: "154 Kms",
        },
        {
          image: Destination3,
          title: "Ajanta - Ellora Caves",
          subTitle: "This Caves located near Aurangabad are the rock-cut caves that define Buddhist, Jain and Hindu monuments",
          cost: "1200 Rs",
          duration: "Approx 2 night trip",
          distance: "258 Kms",
        },
        {
          image: Destination4,
          title: "Lonavala",
          subTitle: "Lonavala, renowned as the 'Jewel of Sahayadri', is a popular hill station that boasts captivating waterfalls",
          cost: "1000 Rs",
          duration: "Approx 1 night trip",
          distance: "64 Kms",
        },
        {
          image: Destination5,
          title: "Matheran",
          subTitle: "Matheran, renowned as the tiniest hill station, is celebrated for its trekking, rock climbing, and outdoor activities",
          cost: "1100 Rs",
          duration: "Approx 1 night trip",
          distance: "119 Kms",
        },
        {
          image: Destination6,
          title: "Kolhapur",
          subTitle: "Kolhapur, recognized for its deep historical and spiritual roots, is renowned for its temples, vibrant spice",
          cost: "1100 Rs",
          duration: "Approx 2 night trip",
          distance: "233 Kms",
        },
        {
          image: Destination7,
          title: "Shirdi",
          subTitle: "Shirdi, renowned as a significant pilgrimage destination, is residence of the esteemed spiritual leader Sai Baba",
          cost: "1200 Rs",
          duration: "Approx 1 night trip",
          distance: "184 Kms",
        },
        {
          image: Destination8,
          title: "Solapur",
          subTitle: "Solapur, evolving from a spiritual center, emerged as a commercial hub for cotton and agricultural commodities",
          cost: "1200 Rs",
          duration: "Approx 2 night trip",
          distance: "254 Kms",
        },
        {
          image: Destination9,
          title: "Sangli",
          subTitle: "Sangli, known as the Turmeric City and the Sugar Belt of India, serves as the lifeline of the Krishna River",
          cost: "1100 Rs",
          duration: "Approx 2 night trip",
          distance: "233 Kms",
        },
        {
          image: Destination10,
          title: "Mahabaleshwar",
          subTitle: "Mahabaleshwar, a hill station in Western Ghats, is renowned for its strawberries, mulberries, and carrots",
          cost: "900 Rs",
          duration: "Approx 1 night trip",
          distance: "120 Kms",
        },
        {
          image: Destination11,
          title: "Ratnagiri",
          subTitle: "Ratnagiri, a coastal town in Maharashtra renowned for its serene beaches and delicious mangoes",
          cost: "1200 Rs",
          duration: "Approx 2 night trip",
          distance: "303 Kms",
        },
        {
          image: Destination12,
          title: "Nashik",
          subTitle: "Nashik, an ancient sacred city in Maharashtra, offers an ideal setting for wine tasting experiences",
          cost: "1100 Rs",
          duration: "Approx 2 night trip",
          distance: "211 Kms",
        },
      ];
    
      // const packages = [
      //   "The Weekend Break",
      //   "The Package Holiday",
      //   "The Group Tour",
      //   "Long Term Slow Travel",
      // ];

      const [active, setActive] = useState(1);
    
    return (
    <>
        <Section id="recommend">
            <div className="title">
                <h2>Recommended Destinations <span>&#9970;</span></h2>
            </div>
            <div className="packages">          {/*Set blue line below when clicked/switched on that particular package number*/}
                {/* <ul>
                    {
                        packages.map((pkg,index) => {
                            return (
                                <li className={active === index + 1 ? "active": ""}  
                                onClick={() => setActive(index + 1)}>
                                {pkg}
                                </li> 
                            );
                        })}
                </ul> */}
            </div>
                <div className="destinations">
                    {data.map((destination) => {
                        return (
                        <div className="destination">
                            <img src={destination.image} alt="Destination Image" />
                            <h3>{destination.title}</h3>
                            <p>{destination.subTitle}</p>
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
    font-size: 18px
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

  h4{
    font-size: 20px;
    color: purple;
    margin-left: 1270px;
    margin-bottom: 5px;
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

    h4{
      font-size: 12px;
      color: purple;
      margin-left: 230px;
    }
  }

  
`;

/*<h4>{destination.cost}</h4>
<span>{destination.duration}</span>
 <div className="distance">
 <span>{destination.distance}</span>
 </div>*/
