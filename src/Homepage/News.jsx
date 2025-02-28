import React from "react";
import logo from "../assets/img/logo.png";
import clock from "../assets/img/clock.png";
import speech from "../assets/img/speech.png";
const News = () => {
  return (
    <div>
      <section className="hero-section set-bg" data-setbg="img/services-bg.jpg">
        <div className="hero-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>News</h1>
              </div>
            </div>
            <div className="page-nav">
              <a href="/rooms" className="left-nav">
                <i className="lnr lnr-arrow-left"></i> Rooms
              </a>
              <a href="/contact" className="right-nav">
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
                        {/* <img src={`${img / blog / recent - $i.jpg}`} alt="" /> */}
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
                      {/* <img src={`${img / blog / blog - i.jpg}`} alt="" /> */}
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
    </div>
  );
};

export default News;
