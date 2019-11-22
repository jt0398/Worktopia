import React from "react";
import { Row } from "react-bootstrap";
import moment from "moment";
import Col from "react-bootstrap/Col";
import { Slide } from "react-reveal";
import StarRatingComponent from "react-star-rating-component";

function Testimonials() {
  return (
    <>
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-4 info-blocks firstblock">
          <Slide left delay={10}>
            <div>
              <div class="info-blocks-in">
                <i class="icon-info-blocks material-icons">
                  <img src="/images/testimonial1.jpg" />
                </i>
                <h3>Uzair Faizal</h3>
                <StarRatingComponent
                  name="rate1"
                  editing={false}
                  starCount={5}
                  value={5}
                />
                <div class="line"></div>
                <p>
                  Beautiful setting, abundant natural light, amazing comfort,
                  super-fast internet, industrial style interior, custom made
                  desks, state-of-the-art AC system, top notch location creative
                  spaces, meeting rooms
                </p>
              </div>
            </div>
          </Slide>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 info-blocks secondblock">
          <Slide bottom delay={10}>
            <div>
              <div class="info-blocks-in">
                <i class="icon-info-blocks material-icons">
                  <img src="/images/testimonial2.jpeg" />
                </i>
                <h3>Ankit C.</h3>
                <StarRatingComponent
                  name="rate1"
                  editing={false}
                  starCount={5}
                  value={5}
                />
                <div class="line"></div>
                <p>
                  The atmosphere is empowering and very collaborative. The
                  WorkTopia staff is also very friendly and helpful. The
                  bathrooms are always clean and the gym is a nice amenity to
                  utilize. I highly recommend this workspace.
                </p>
              </div>
            </div>
          </Slide>
        </div>

        <div class="col-sm-12 col-md-4 col-lg-4 info-blocks thirdblock">
          <Slide right delay={10}>
            <div>
              <div class="info-blocks-in">
                <i class="icon-info-blocks material-icons">
                  <img src="/images/testimonial3.jpg" />
                </i>
                <h3>Semir Nikocevic</h3>
                <StarRatingComponent
                  name="rate1"
                  editing={false}
                  starCount={5}
                  value={5}
                />
                <div class="line"></div>
                <p>
                  So happy to find this office space. Unni and Judy have been
                  wonderful to work with. The space is beautiful and inviting.
                  Moving to the space from tomorrow. The amenities are great.
                  Can’t wait to call Worktopia our home away from home.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
