/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import owlCarousels from "../../ultils/owlCarousel";

const BrandSection = ({ brands }) => {
  useEffect(() => {
    owlCarousels();
  }, [brands]);

  return (
    <div className="container">
      {brands?.length > 0 && (
        <div
          className="owl-carousel mt-5 mb-5 owl-simple"
          data-toggle="owl"
          data-owl-options='{
                                        "nav": false, 
                                        "dots": false,
                                        "margin": 30,
                                        "loop": false,
                                        "responsive": {
                                            "0": {
                                                "items":2
                                            },
                                            "420": {
                                                "items":3
                                            },
                                            "600": {
                                                "items":4
                                            },
                                            "900": {
                                                "items":5
                                            },
                                            "1024": {
                                                "items":6
                                            }
                                        }
                                    }'
        >
          {brands?.map((brand, index) => {
            return (
              <div className="brand" key={index}>
                <img src={brand} alt="Brand Name" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BrandSection;
