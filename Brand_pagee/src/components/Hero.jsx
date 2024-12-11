import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero_content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
          libero fugit. Autem sunt quas provident. Quis, similique quasi.
        </p>
        <div className="hero_buttons">
          <button>Shop Now</button>
          <button className="secondary_button">Categories</button>
        </div>
        <div className="shopping">
          <p>also available on</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazonimage" />
            <img src="/images/flipkart.png" alt="flipkartimage" />
          </div>
        </div>
      </div>
      <div className="hero_image">
        <img src="/images/shoe_image.png" alt="heroimage" />
      </div>
    </main>
  );
};

export default Hero;
