import React from "react";
import "../css/Footer.css";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephonePlus } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  GrFacebook,
  GrInstagram,
  GrTwitter,
  GrLinkedin,
  GrYoutube
} from "react-icons/gr";

const style = {
  color: "white",
  onmouseover: "green",
  height: "18px",
  width: "18px"
};

const Footer = () => {
  return (
    <footer>
      <div className="Box-f">
        <div className="Container-f">
          <div className="Row-f">
            <div className="Columnnn">
              {/* <div className="Heading">IIT Ropar</div> */}
              <a
                href="https://www.iitrpr.ac.in/"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                IIT Ropar
              </a>
              <a
                href="https://www.iitrpr.ac.in/circulars"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                Circulars
              </a>
              <a
                href="https://www.iitrpr.ac.in/facilities"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                Facilities
              </a>
              <a
                href="https://www.iitrpr.ac.in/student-affairs/"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                Student Affairs
              </a>
            </div>
            <div className="Columnnn">
              {/* <div className="Heading">Useful Links</div> */}
              <a
                href="/AboutCpda"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                About CPDA
              </a>
              <a
                href="/HowToApply"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                How to Apply
              </a>
              <a
                href="/CpdaRules"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                CPDA Rules
              </a>
              <a
                href="/FAQs"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                FAQs
              </a>
            </div>
            <div className="Columnnn">
              {/* <div className="Heading">Quick Finds</div> */}
              <a
                href="https://www.iitrpr.ac.in/store-purchase/"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                Store & Purchase
              </a>
              <a
                href="https://www.iitrpr.ac.in/it/"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                IT Support
              </a>
              <a
                href="https://www.iitrpr.ac.in/prajwalam-quarterly-newsletter-iit-ropar"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                Newsletter
              </a>
              <a
                href="https://www.iitrpr.ac.in/right-information-act"
                className="FooterLink"
                target={"_blank"}
                rel="noreferrer"
              >
                RTI Cell
              </a>
            </div>
            <div className="Columnnn">
              {/* <div className="Heading">Contact Us</div> */}
              <text className="text-only-f">
                <a
                  href="https://goo.gl/maps/HZN9Zx83anxbyCWf7"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <HiLocationMarker style={style} />
                </a>
                &nbsp; &nbsp; Reach Us
              </text>
              <text className="text-only-f">
                <a href="Tel: 0123-123456" target={"_blank"} rel="noreferrer">
                  <BsTelephonePlus style={style} />
                </a>
                &nbsp; &nbsp; 0123-123456
              </text>
              <text className="text-only-f">
                <a href="Tel: 9876-654321" target={"_blank"} rel="noreferrer">
                  <BsTelephonePlus style={style} />
                </a>
                &nbsp; &nbsp; 9876-654321
              </text>
              <text className="text-only-f">
                <a
                  href="mailto: demo@demo.ac.in"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <MdEmail style={style} />
                </a>
                &nbsp; &nbsp; demo@demo.ac.in
              </text>
            </div>
          </div>
        </div>
        <div className="Container-f-2 is-flex-direction-row">
          <div className="columns">
            <div className="follow-us column is-2">Follow Us : </div>
            <div className="column is-1 chal-jaa-bhai">
              <a
                href="https://www.facebook.com/iitrpr"
                // className="icon-link"
                target={"_blank"}
                rel="noreferrer"
              >
                <GrFacebook style={style} />
              </a>
            </div>
            <div className="column is-1 chal-jaa-bhai">
              <a
                href="https://www.instagram.com/iitrpr"
                // className="icon-link"
                target={"_blank"}
                rel="noreferrer"
              >
                <GrInstagram style={style} />
              </a>
            </div>
            <div className="column is-1 chal-jaa-bhai">
              <a
                href="https://www.twitter.com/iitrpr"
                // className="icon-link"
                target={"_blank"}
                rel="noreferrer"
              >
                <GrTwitter style={style} />
              </a>
            </div>
            <div className="column is-1 chal-jaa-bhai">
              <a
                href="https://www.linkedin.com/school/iitropar"
                // className="icon-link"
                target={"_blank"}
                rel="noreferrer"
              >
                <GrLinkedin style={style} />
              </a>
            </div>
            <div className="column is-1 chal-jaa-bhai">
              <a
                href="https://www.youtube.com/channel/UC4GBcQUAkzVcl_lXdxm-_Rg"
                // className="icon-link"
                target={"_blank"}
                rel="noreferrer"
              >
                <GrYoutube style={style} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Box2">
        <div className="copyright">
          <h2>Copyright © 2022 - All Rights Reserved - @IIT Ropar</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
