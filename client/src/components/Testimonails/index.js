import React from "react";
import { Row } from "react-bootstrap";
import moment from "moment";
import Col from "react-bootstrap/Col";

function Testimonials({ head }) {
  return (
    <>
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-4 info-blocks firstblock">
          <div class="info-blocks-in">
            <i class="icon-info-blocks material-icons">
              <img src="/images/testimonial1.jpg" />
            </i>
            <h3>Uzair Faizal</h3>
            <div class="line"></div>
            <p>
              Beautiful setting, abundant natural light, amazing comfort,
              super-fast internet, industrial style interior, custom made desks,
              state-of-the-art AC system, top notch location creative spaces,
              meeting rooms… – it’s everything you and your team needs to be
              productive.
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 info-blocks secondblock">
          <div class="info-blocks-in">
            <i class="icon-info-blocks material-icons">
              <img src="/images/testimonial2.jpeg" />
            </i>
            <h3>Ankit C.</h3>
            <div class="line"></div>
            <p>
              Ryan Fiore The atmosphere is empowering and very collaborative.
              The Avanti staff is also very friendly and helpful. The bathrooms
              are always clean and the gym is a nice amenity to utilize. I
              highly recommend this workspace.
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 info-blocks thirdblock">
          <div class="info-blocks-in">
            <i class="icon-info-blocks material-icons">
              <img src="/images/testimonial3.jpg" />
            </i>
            <h3>Semir Nikocevic</h3>
            <div class="line"></div>
            <p>
              So happy to find this office space. Rebekah and Katrina have been
              wonderful to work with. The space is beautiful and inviting.
              Moving to the space in December. The amenities are great. Can’t
              wait to call Avanti our home away from home.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
