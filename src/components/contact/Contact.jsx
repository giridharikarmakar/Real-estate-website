import React from "react";
import "./Contact.css";
import {
  HiPhone,
  HiChatBubbleBottomCenter,
  HiVideoCamera,
} from "react-icons/hi2";
import { MdMessage } from "react-icons/md";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="c-container">

        {/* Left */}
        <div className="c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>

          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </span>

          <div className="contactModes">

            <div className="row">

              <div className="mode">
                <div className="flexStart">
                  <div className="icon">
                    <HiPhone size={25} />
                  </div>

                  <div className="detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">
                      021 123 145 14
                    </span>
                  </div>
                </div>

                <button className="button">Call Now</button>
              </div>

              <div className="mode">
                <div className="flexStart">
                  <div className="icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>

                  <div className="detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">
                      021 123 145 14
                    </span>
                  </div>
                </div>

                <button className="button">Chat Now</button>
              </div>

            </div>

            <div className="row">

              <div className="mode">
                <div className="flexStart">
                  <div className="icon">
                    <HiVideoCamera size={25} />
                  </div>

                  <div className="detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">
                      021 123 145 14
                    </span>
                  </div>
                </div>

                <button className="button">Video Call</button>
              </div>

              <div className="mode">
                <div className="flexStart">
                  <div className="icon">
                    <MdMessage size={25} />
                  </div>

                  <div className="detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">
                      021 123 145 14
                    </span>
                  </div>
                </div>

                <button className="button">Message Now</button>
              </div>

            </div>

          </div>
        </div>

        {/* Right */}

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;