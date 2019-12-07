import React from "react";
import Container from "react-bootstrap/Container";
function Footer() {
  return (
    <Container fluid>
      <div style={{ backgroundColor: "black" }}>
        <div class="row ">
          <div class="col-md-4 text-center text-md-left ">
            <div class="py-0 pl-2">
              <h3 class="my-4 text-white">
                <span class="mx-2 font-italic text-warning ">Worktopia</span>
              </h3>

              <p class="footer-links font-weight-bold"></p>
              <p class="text-light py-4 mb-4">
                &copy;2019 Worktopia Pvt.Ltd .<br></br> All Rights Reserved{" "}
              </p>
            </div>
          </div>

          <div class="col-md-4 text-white text-center text-md-left ">
            <div class="py-2 my-4">
              <div>
                <p class="text-white">
                  {" "}
                  <i class="fa fa-map-marker mx-2 "></i>
                  33 Bloor St E, Toronto, ON M4W 3H1
                </p>
              </div>

              <div>
                <p>
                  <i class="fa fa-phone  mx-2 "></i> +1 413-252-6788
                </p>
              </div>
              <div>
                <p>
                  <i class="fa fa-envelope  mx-2"></i>
                  <a href="mailto:support@worktopia.com">
                    support@worktopia.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 text-white my-4 text-center text-md-left ">
            <span class=" font-weight-bold ">About the Company</span>
            <p class="text-warning my-2">
              We offer flexible, convinient and a spacious place for working.
            </p>
            <div class="py-2">
              <a href="/">
                <i class="fab fa-facebook fa-2x text-primary mx-3"></i>
              </a>
              <a href="/">
                <i class="fab fa-twitter fa-2x text-info mx-3"></i>
              </a>
              <a href="/">
                <i class="fab fa-youtube fa-2x text-danger mx-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
