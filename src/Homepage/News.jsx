import React from "react";
import logo from "../assets/img/logo.png";
import place from "../assets/img/placeholder.png";
import phone from "../assets/img/phone.png";
import clock from "../assets/img/clock.png";
import speech from "../assets/img/speech.png";
const News = () => {
  return (
    <div>
      {/* Page Preloder */}
      <div id="preloder">
        <div className="loader"></div>
      </div>

      {/* Header Section Begin */}
      <header className="header-section other-page">
        <div className="container-fluid">
          <div className="inner-header">
            <div className="logo">
              <a href="./index.html">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="top-widget">
              <div className="top-info address">
                <img src={place} alt="" />
                <span>
                  1525 Boring Lane, Los <br />
                  Angeles, CA
                </span>
              </div>
              <div className="top-info phone-num">
                <img src={phone} alt="" />
                <span>+1 (603)535-4592</span>
              </div>
            </div>
            <div className="container">
              <nav className="main-menu mobile-menu">
                <ul>
                  <li>
                    <a href="./index.html">Home</a>
                  </li>
                  <li>
                    <a href="./about-us.html">About</a>
                  </li>
                  <li>
                    <a href="./rooms.html">Rooms</a>
                  </li>
                  <li>
                    <a href="#">Facilities</a>
                    <ul className="drop-menu">
                      <li>
                        <a href="#">Junior Suit</a>
                      </li>
                      <li>
                        <a href="#">Double Room</a>
                      </li>
                      <li>
                        <a href="#">Senior Suit</a>
                      </li>
                      <li>
                        <a href="#">Single Room</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./news.html">News</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div id="mobile-menu-wrap"></div>
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Hero Section Begin */}
      <section className="hero-section set-bg" data-setbg="img/services-bg.jpg">
        <div className="hero-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>News</h1>
              </div>
            </div>
            <div className="page-nav">
              <a href="./rooms.html" className="left-nav">
                <i className="lnr lnr-arrow-left"></i> Rooms
              </a>
              <a href="./contact.html" className="right-nav">
                Contact <i className="lnr lnr-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Blog Section Begin */}
      <section className="blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 order-2 order-lg-1">
              <div className="side-bar">
                <div className="categories-item">
                  <h4>Categories</h4>
                  <div className="categories-list">
                    <ul>
                      <li>
                        Accommodation <span>1</span>
                      </li>
                      <li>
                        Nearby <span>9</span>
                      </li>
                      <li>
                        Holidays <span>4</span>
                      </li>
                      <li>
                        Events <span>2</span>
                      </li>
                      <li>
                        News <span>13</span>
                      </li>
                      <li>
                        Restaurant <span>8</span>
                      </li>
                      <li>
                        Wellness Treatments <span>11</span>
                      </li>
                      <li>
                        Uncategorized <span>47</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="recent-post">
                  <h4>Recent Posts</h4>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="single-recent-post">
                      <div className="recent-pic">
                        <img src={`${img / blog / recent - $i.jpg}`} alt="" />
                      </div>
                      <div className="recent-text">
                        <h5>Lorem ipsum dolor sit amet, consectetur.</h5>
                        <div className="recent-time">
                          <i className="fa fa-clock-o"></i>
                          <span>February 17, 2018</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="tags-item">
                  <h4>Tags</h4>
                  <div className="tag-links">
                    {[
                      "hotel",
                      "theme",
                      "wordpress",
                      "booking",
                      "accommodation",
                    ].map((tag) => (
                      <a href="#" key={tag}>
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 order-1 order-lg-2">
              <div className="blog-post">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="single-blog-post">
                    <div className="blog-pic">
                      <img src={`${img / blog / blog - i.jpg}`} alt="" />
                    </div>
                    <div className="blog-text">
                      <h4>What you should know before going in holidays.</h4>
                      <div className="blog-widget">
                        <div className="blog-info">
                          <i className="lnr lnr-user"></i>
                          <span>Admin</span>
                        </div>
                        <div className="blog-info">
                          <img src={clock} alt="" />
                          <span>February 17, 2018</span>
                        </div>
                        <div className="blog-info">
                          <img src={speech} alt="" />
                          <span>4 Comments</span>
                        </div>
                        <div className="blog-info">
                          <i className="fa fa-folder-o"></i>
                          <span>Category</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus libero mauris...
                      </p>
                      <a href="#">
                        Continue Reading <i className="lnr lnr-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                ))}
                <div className="blog-pagination">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <a href="#" key={i} className={i === 1 ? "active" : ""}>
                      {i}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}

      {/* Footer Section Begin */}
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-logo">
                <a href="#">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="row pb-50">
            {["Location", "Reception", "Shuttle Service", "Restaurant"].map(
              (section, i) => (
                <div key={i} className="col-lg-3 col-sm-6">
                  <div className="single-footer-widget">
                    <h5>{section}</h5>
                    <div className="widget-text">
                      <i className="lnr lnr-phone-handset"></i>
                      <p>+91 603-535-4592</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-text">
              Copyright &copy;{" "}
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved
            </div>
            <div className="privacy-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Photo Requests</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </div>
  );
};

export default News;
