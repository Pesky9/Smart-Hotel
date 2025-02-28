import React from "react";

// Import images based on the locations in your HTML
import contactBg from "../assets/img/contact-bg.jpg";
import placeholderCopy from "../assets/img/placeholder-copy.png";
import phoneCopy from "../assets/img/phone-copy.png";
import envelop from "../assets/img/envelop.png";
import clockCopy from "../assets/img/clock-copy.png";
import edit from "../assets/img/edit.png";
import envelopCopy from "../assets/img/envelop-copy.png";
import speechCopy from "../assets/img/speech-copy.png";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      {/* Hero Section Begin */}
      <section
        className="hero-section set-bg"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="hero-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Contact</h1>
              </div>
            </div>
            <div className="page-nav">
              <a href="./news.html" className="left-nav">
                <i className="lnr lnr-arrow-left"></i> News
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Contact Section Begin */}
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-left">
                <div className="contact-information">
                  <h2>Contact Information</h2>
                  <ul>
                    <li>
                      <img src={placeholderCopy} alt="" />
                      <span>1525 Boring Lane, Los Angeles, CA</span>
                    </li>
                    <li>
                      <img src={phoneCopy} alt="" />
                      <span>+91 603-535-4592</span>
                    </li>
                    <li>
                      <img src={envelop} alt="" />
                      <span>hello@youremail.com</span>
                    </li>
                    <li>
                      <img src={clockCopy} alt="" />
                      <span>Everyday: 06:00 -22:00</span>
                    </li>
                  </ul>
                </div>
                <div className="social-links">
                  <h2>Follow us on:</h2>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <h5>Write us ...</h5>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <p>From</p>
                      <div className="input-group">
                        <input type="text" placeholder="Full Name" />
                        <img src={edit} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <input type="email" placeholder="Email" />
                        <img src={envelopCopy} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group phone-num">
                        <input type="text" placeholder="Phone" />
                        <img src={phoneCopy} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="message">
                        <p>Message</p>
                        <div className="textarea">
                          <textarea placeholder="Hi ..."></textarea>
                          <img src={speechCopy} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit">
                        Send <i className="lnr lnr-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Map Section Begin */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14575.402255999753!2d77.571341!3d12.934329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15389e395f35%3A0x547ed5d29ed66e1d!2sBull%20Temple%20Rd%2C%20Basavanagudi%2C%20Bengaluru%2C%20Karnataka%20560019%2C%20India!5e0!3m2!1sen!2sus!4v1674786225569!5m2!1sen!2sus"
          height="560"
          style={{ border: 0 }}
          allowFullScreen=""
          title="Google Map of Hotel Location"
        ></iframe>
      </div>
      {/* Map Section End */}
    </>
  );
};

export default Contact;
