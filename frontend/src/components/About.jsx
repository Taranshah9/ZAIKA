import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
    const gotToNewPage=()=>{
        navigate("/menu");
      }
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              
Welcome to Zaika, where culinary excellence meets warm hospitality. At Zaika, we are passionate about creating unforgettable dining experiences for our guests. Our journey began with a simple vision: to offer a haven where food lovers could indulge in exquisite flavors crafted from the finest ingredients. Nestled in the heart of Vile Parle, our restaurant boasts a vibrant atmosphere that invites you to savor every moment. From our talented chefs who infuse creativity into each dish to our dedicated staff who ensure every visit is memorable, we take pride in exceeding your expectations. Whether you're joining us for a romantic dinner, a celebratory gathering, or a casual lunch with friends, we promise an exceptional dining adventure that tantalizes your taste buds and leaves you craving more. Come, immerse yourself in the essence of culinary artistry and hospitality at Zaika.
            </p>

            <Link to={"/menu"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
            
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
