import React, { useEffect } from "react";
import AOS from "aos";

const ReviewCard = ({ review }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      className="card lg:max-w-lg bg-base-100 shadow-xl text-left"
    >
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          voluptates quo incidunt harum minus mollitia!
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
