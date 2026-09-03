import React from "react";

export default function BrandMarquee({ brands }) {
  return (
    <section className="brands">
      <div className="brandHeading">
        <span>🏆 TRUSTED BY OUR PARTNERS</span>
      </div>

      <div className="brandViewport">
        <div className="brandTrack">
          
          {/* First set */}
          <div className="brandGroup">
            {brands.map((brand, index) => (
              <div className="brand" key={`first-${index}`}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="brandGroup" aria-hidden="true">
            {brands.map((brand, index) => (
              <div className="brand" key={`second-${index}`}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}