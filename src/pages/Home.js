import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  const handleRedirect = () => {
    navigate("/detail", { replace: true });
  };

  return (
    <>
      <div>
        <Header />
        {/* Header */}
        <header className="header-banner fixed-header-banner">
          <div className="booking-search">
            <form>
              <div className="booking-search-inputs">
                <div className="booking-search-input-item">
                  <div className="booking-input">
                    <label>
                      <i className="flaticon-placeholder-point" />
                      Where To?
                    </label>
                    <select className="location">
                      <option value>Where Are You Going</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                    {/* <input type="text" placeholder="Where Are You Going" id="location"> */}
                  </div>
                </div>
                <div className="booking-search-input-item">
                  <div className="booking-input">
                    <label>
                      <i className="flaticon-calendar" />
                      When?
                    </label>
                    <input
                      type="text"
                      placeholder="Select Your Time"
                      className="datepicker"
                    />
                  </div>
                </div>
                <div className="booking-search-input-item">
                  <div className="booking-input">
                    <label>
                      <i className="flaticon-plane" />
                      Travel Type
                    </label>
                    <select className="travelType">
                      <option value>Select Your Travel Type</option>
                      <option value={2}>The Weekend Break</option>
                      <option value={3}>The Package Holiday</option>
                      <option value={4}>The Group Tour</option>
                    </select>
                  </div>
                </div>
                <div className="booking-search-input-item">
                  <div className="booking-input">
                    <label>
                      <i className="flaticon-user-1" />
                      Guest
                    </label>
                    <input
                      type="text"
                      placeholder="Select Number Of Guest"
                      className="guest guest-input"
                    />
                    <div className="guest-popup">
                      <div className="guest-popup-item">
                        <div className="guest-popup-label">
                          <h4>Adults</h4>
                          <p>Ages 12 or above</p>
                        </div>
                        <div className="guest-popup-counter">
                          <button className="counter-btn counter-dec">-</button>
                          <input
                            type="text"
                            className="counter-input"
                            defaultValue={0}
                          />
                          <button className="counter-btn counter-inc">+</button>
                        </div>
                      </div>
                      <div className="guest-popup-item">
                        <div className="guest-popup-label">
                          <h4>Adults</h4>
                          <p>Ages 12 or above</p>
                        </div>
                        <div className="guest-popup-counter">
                          <button className="counter-btn counter-dec">-</button>
                          <input
                            type="text"
                            className="counter-input"
                            defaultValue={0}
                          />
                          <button className="counter-btn counter-inc">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="booking-search-button">
                    <button className="btn main-btn" type="submit">
                      <i className="flaticon-searching" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* header-content */}
          <div className="container-fluid">
            <div className="header-content">
              <h1>Du Lịch Việt Nam Hơn Bao Giờ Hết</h1>
              <a href="tour.html" className="btn main-btn main-btn-arrow">
                Xem Tất Cả <i className="flaticon-right-arrow color-yellow" />
              </a>
            </div>
          </div>
          <div className="scroll-parallax" id="parallax">
            <div
              className="parallax-layer parallax-layer-0 parallax"
              data-speed={66}
            >
              {/* <img src="assets/images/homepage-1/header-part-5.png" alt="header"> */}
            </div>
            <div
              className="parallax-layer parallax-layer-1 parallax"
              data-speed={50}
            >
              {/* <img src="assets/images/homepage-1/header-part-4.png" alt="header"> */}
            </div>
            <div
              className="parallax-layer parallax-layer-2 parallax"
              data-speed={40}
            >
              {/* <img src="assets/images/homepage-1/header-part-3.png" alt="header"> */}
            </div>
            <div
              className="parallax-layer parallax-layer-3 parallax"
              data-speed={33}
            >
              {/* <img src="assets/images/homepage-1/header-part-2.png" alt="header"> */}
            </div>
            <div
              className="parallax-layer parallax-layer-4 parallax"
              data-speed={20}
            >
              {/* <img src="assets/images/homepage-1/header-part-1.png" alt="header"> */}
            </div>
            <div className="parallax-layer parallax-cover" />
          </div>
        </header>
        {/* Header */}
        {/* Mobile Search */}
        <div className="mobile-search-wrapper d-lg-none">
          <div className="mobile-booking-search">
            <div className="mobile-search-body">
              <h3>Search Your Criteria</h3>
              {/* <div class="mobile-search-close">
                  X
              </div> */}
              <form action="#">
                <div className="mobile-search-criteria">
                  <div className="mobile-search-item">
                    <label>
                      <i className="flaticon-placeholder-point" />
                      Where To?
                    </label>
                    <select className="location" name="location">
                      <option value>Where Are You Going</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                  <div className="mobile-search-item">
                    <label>
                      <i className="flaticon-calendar" />
                      When?
                    </label>
                    <input
                      type="text"
                      placeholder="Select Your Time"
                      className="datepicker"
                    />
                  </div>
                  <div className="mobile-search-item">
                    <label>
                      <i className="flaticon-plane" />
                      Travel Type
                    </label>
                    <select className="travelType">
                      <option value>Select Your Travel Type</option>
                      <option value={2}>The Weekend Break</option>
                      <option value={3}>The Package Holiday</option>
                      <option value={4}>The Group Tour</option>
                    </select>
                  </div>
                  <div className="mobile-search-item">
                    <label>
                      <i className="flaticon-user-1" />
                      Guest
                    </label>
                    <input
                      type="text"
                      placeholder="Select Number Of Guest"
                      className="guest guest-input"
                    />
                    <div className="guest-popup">
                      <div className="guest-popup-item">
                        <div className="guest-popup-label">
                          <h4>Adults</h4>
                          <p>Ages 12 or above</p>
                        </div>
                        <div className="guest-popup-counter">
                          <button className="counter-btn counter-dec">-</button>
                          <input
                            type="text"
                            className="counter-input"
                            defaultValue={0}
                          />
                          <button className="counter-btn counter-inc">+</button>
                        </div>
                      </div>
                      <div className="guest-popup-item">
                        <div className="guest-popup-label">
                          <h4>Adults</h4>
                          <p>Ages 12 or above</p>
                        </div>
                        <div className="guest-popup-counter">
                          <button className="counter-btn counter-dec">-</button>
                          <input
                            type="text"
                            className="counter-input"
                            defaultValue={0}
                          />
                          <button className="counter-btn counter-inc">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-booking-button">
                    <button className="btn main-btn full-width" type="submit">
                      Search
                      <i className="flaticon-searching" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="mobile-search-collapse">
              <i className="flaticon-searching" />
            </div>
          </div>
        </div>
        {/* Mobile Search */}
        {/* Holiday Planning */}
        <section className="holiday-planning-section pt-min-100 pb-70 position-relative">
          <div className="map-shapes">
            <div className="map-shape map-shape-1">
              <img src="assets/images/shapes/map-1.png" alt="shape" />
            </div>
            <div className="map-shape map-shape-2">
              <img src="assets/images/shapes/map-2.png" alt="shape" />
            </div>
          </div>
          <div className="container">
            <div className="section-title">
              <small>Các Địa Điểm Nổi Bật Tại Việt Nam</small>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 col-xl-4 pb-30">
                <div className="card-1">
                  <div className="card-1-image">
                    <div className="card-1-overlay">
                      <a href="single-destination.html">
                        <img
                          src="assets/images/holiday/holiday-place-1.jpg"
                          alt="holiday"
                        />
                      </a>
                      <ul className="card-1-entry">
                        <li>
                          <i className="flaticon-calendar" />
                          02 Feb
                        </li>
                        <li>
                          <i className="flaticon-user-1" />
                          04 +
                        </li>
                        <li>
                          <i className="flaticon-placeholder-point" />
                          Milan
                        </li>
                      </ul>
                    </div>
                    <div className="card-1-redirect">
                      <a href="single-destination.html">
                        <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                  <div className="card-1-content">
                    <div className="card-1-info">
                      <h3>
                        <a href="single-destination.html">Rome</a>
                      </h3>
                      <div className="card-1-reviews">
                        <ul className="review-star">
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                        </ul>
                        <span>(100 Reviews)</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetu regal sadipscing
                      elitr, sed diam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-4 pb-30">
                <div className="card-1">
                  <div className="card-1-image">
                    <div className="card-1-overlay">
                      <a href="single-destination.html">
                        <img
                          src="assets/images/holiday/holiday-place-2.jpg"
                          alt="holiday"
                        />
                      </a>
                      <ul className="card-1-entry">
                        <li>
                          <i className="flaticon-calendar" />
                          28 Jan
                        </li>
                        <li>
                          <i className="flaticon-user-1" />
                          03 +
                        </li>
                        <li>
                          <i className="flaticon-placeholder-point" />
                          Vetican
                        </li>
                      </ul>
                    </div>
                    <div className="card-1-redirect">
                      <a href="single-destination.html">
                        <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                  <div className="card-1-content">
                    <div className="card-1-info">
                      <h3>
                        <a href="single-destination.html">Vatican</a>
                      </h3>
                      <div className="card-1-reviews">
                        <ul className="review-star">
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                        </ul>
                        <span>(112 Reviews)</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetu regal sadipscing
                      elitr, sed diam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-4 pb-30">
                <div className="card-1">
                  <div className="card-1-image">
                    <div className="card-1-overlay">
                      <a href="single-destination.html">
                        <img
                          src="assets/images/holiday/holiday-place-3.jpg"
                          alt="holiday"
                        />
                      </a>
                      <ul className="card-1-entry">
                        <li>
                          <i className="flaticon-calendar" />
                          28 Jan
                        </li>
                        <li>
                          <i className="flaticon-user-1" />
                          02 +
                        </li>
                        <li>
                          <i className="flaticon-placeholder-point" />
                          Milan
                        </li>
                      </ul>
                    </div>
                    <div className="card-1-redirect">
                      <a href="single-destination.html">
                        <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                  <div className="card-1-content">
                    <div className="card-1-info">
                      <h3>
                        <a href="single-destination.html">Milan</a>
                      </h3>
                      <div className="card-1-reviews">
                        <ul className="review-star">
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                        </ul>
                        <span>(114 Reviews)</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetu regal sadipscing
                      elitr, sed diam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-4 pb-30">
                <div className="card-1">
                  <div className="card-1-image">
                    <div className="card-1-overlay">
                      <a href="single-destination.html">
                        <img
                          src="assets/images/holiday/holiday-place-4.jpg"
                          alt="holiday"
                        />
                      </a>
                      <ul className="card-1-entry">
                        <li>
                          <i className="flaticon-calendar" />
                          27 Jan
                        </li>
                        <li>
                          <i className="flaticon-user-1" />
                          03 +
                        </li>
                        <li>
                          <i className="flaticon-placeholder-point" />
                          Winter
                        </li>
                      </ul>
                    </div>
                    <div className="card-1-redirect">
                      <a href="single-destination.html">
                        <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                  <div className="card-1-content">
                    <div className="card-1-info">
                      <h3>
                        <a href="single-destination.html">Winter</a>
                      </h3>
                      <div className="card-1-reviews">
                        <ul className="review-star">
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                        </ul>
                        <span>(51 Reviews)</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetu regal sadipscing
                      elitr, sed diam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-4 pb-30">
                <div className="card-1">
                  <div className="card-1-image">
                    <div className="card-1-overlay">
                      <a href="single-destination.html">
                        <img
                          src="assets/images/holiday/holiday-place-5.jpg"
                          alt="holiday"
                        />
                      </a>
                      <ul className="card-1-entry">
                        <li>
                          <i className="flaticon-calendar" />
                          26 Jan
                        </li>
                        <li>
                          <i className="flaticon-user-1" />
                          03 +
                        </li>
                        <li>
                          <i className="flaticon-placeholder-point" />
                          Island
                        </li>
                      </ul>
                    </div>
                    <div className="card-1-redirect">
                      <a href="single-destination.html">
                        <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                  <div className="card-1-content">
                    <div className="card-1-info">
                      <h3>
                        <a href="single-destination.html">Island</a>
                      </h3>
                      <div className="card-1-reviews">
                        <ul className="review-star">
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                        </ul>
                        <span>(32 Reviews)</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetu regal sadipscing
                      elitr, sed diam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-4 pb-30">
                <div className="card-1">
                  <div className="card-1-image">
                    <div className="card-1-overlay">
                      <a href="single-destination.html">
                        <img
                          src="assets/images/holiday/holiday-place-6.jpg"
                          alt="holiday"
                        />
                      </a>
                      <ul className="card-1-entry">
                        <li>
                          <i className="flaticon-calendar" />
                          26 Jan
                        </li>
                        <li>
                          <i className="flaticon-user-1" />
                          04 +
                        </li>
                        <li>
                          <i className="flaticon-placeholder-point" />
                          Milan
                        </li>
                      </ul>
                    </div>
                    <div className="card-1-redirect">
                      <a href="single-destination.html">
                        <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                  <div className="card-1-content">
                    <div className="card-1-info">
                      <h3>
                        <a href="single-destination.html">Corfu</a>
                      </h3>
                      <div className="card-1-reviews">
                        <ul className="review-star">
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                          <li className="full-star">
                            <i className="flaticon-star" />
                          </li>
                        </ul>
                        <span>(112 Reviews)</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetu regal sadipscing
                      elitr, sed diam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-section pt-100 pb-100 position-relative">
          <div className="map-shapes">
            <div className="map-shape map-shape-1">
              <img src="assets/images/shapes/map-3.png" alt="shape" />
            </div>
          </div>
          <div className="container">
            <div className="section-title">
              <small>Tìm kiếm</small>
              <h2>Những Sự Kiện Xung Quanh Đây</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3 pb-30 single-card-rotate">
                <div className="single-card">
                  <div className="single-card-image">
                    <a href="single-product.html">
                      <img
                        src="assets/images/products/product-1.jpg"
                        alt="product"
                      />
                    </a>
                  </div>
                  <div className="single-card-content">
                    <h3>
                      <a href="single-product.html">Travel Shoe</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 pb-30 single-card-rotate">
                <div className="single-card">
                  <div className="single-card-image">
                    <a href="single-product.html">
                      <img
                        src="assets/images/products/product-2.jpg"
                        alt="product"
                      />
                    </a>
                  </div>
                  <div className="single-card-content">
                    <h3>
                      <a href="single-product.html">Travel Bag</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 pb-30 single-card-rotate">
                <div className="single-card">
                  <div className="single-card-image">
                    <a href="single-product.html">
                      <img
                        src="assets/images/products/product-3.jpg"
                        alt="product"
                      />
                    </a>
                  </div>
                  <div className="single-card-content">
                    <h3>
                      <a href="single-product.html">Rope</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 pb-30 single-card-rotate">
                <div className="single-card">
                  <div className="single-card-image">
                    <a href="single-product.html">
                      <img
                        src="assets/images/products/product-4.jpg"
                        alt="product"
                      />
                    </a>
                  </div>
                  <div className="single-card-content">
                    <h3>
                      <a href="single-product.html">Travel Map</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Popular Package */}
        <section className="popular-package-section pt-100 pb-80 line-shape-bg">
          <div className="container">
            <div className="section-title section-title-lg">
              <small>Gần đây</small>
              <h2>Khách Sạn Gần Đây</h2>
            </div>
          </div>
          <div className="popular-package-carousel owl-carousel">
            <div className="item">
              <div className="card-2">
                <div className="card-2-image">
                  <img
                    src="assets/images/popular-package/popular-package-1.jpg"
                    alt="popular package"
                  />
                </div>
                <div className="card-2-content">
                  <ul className="card-2-entry">
                    <li>
                      <i className="flaticon-calendar" />
                      05 Days
                    </li>
                  </ul>
                  <div className="card-2-info">
                    <h3>
                      <a href="single-tour.html">Maldives Super Resort</a>
                    </h3>
                    <div className="card-2-info-price">
                      $350<span>/per</span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetu regal sadip scing
                    elitr, sed diam.
                  </p>
                  <div className="card-2-footer">
                    <div className="card-2-reviews">
                      <ul className="review-star">
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                      </ul>
                      <span>(101 Reviews)</span>
                    </div>
                    <div className="card-2-action">
                      <a href="single-tour.html">
                        Explore Tour <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card-2">
                <div className="card-2-image">
                  <img
                    src="assets/images/popular-package/popular-package-2.jpg"
                    alt="popular package"
                  />
                </div>
                <div className="card-2-content">
                  <ul className="card-2-entry">
                    <li>
                      <i className="flaticon-calendar" />
                      03 Days
                    </li>
                  </ul>
                  <div className="card-2-info">
                    <h3>
                      <a href="single-tour.html">Best Of Cuba</a>
                    </h3>
                    <div className="card-2-info-price">
                      $1500<span>/per</span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetu regal sadip scing
                    elitr, sed diam.
                  </p>
                  <div className="card-2-footer">
                    <div className="card-2-reviews">
                      <ul className="review-star">
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                      </ul>
                      <span>(100 Reviews)</span>
                    </div>
                    <div className="card-2-action">
                      <a href="single-tour.html">
                        Explore Tour <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card-2">
                <div className="card-2-image">
                  <img
                    src="assets/images/popular-package/popular-package-3.jpg"
                    alt="popular package"
                  />
                </div>
                <div className="card-2-content">
                  <ul className="card-2-entry">
                    <li>
                      <i className="flaticon-calendar" />
                      06 Days
                    </li>
                  </ul>
                  <div className="card-2-info">
                    <h3>
                      <a href="single-tour.html">African Forest Tour</a>
                    </h3>
                    <div className="card-2-info-price">
                      $3500<span>/per</span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetu regal sadip scing
                    elitr, sed diam.
                  </p>
                  <div className="card-2-footer">
                    <div className="card-2-reviews">
                      <ul className="review-star">
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                      </ul>
                      <span>(103 Reviews)</span>
                    </div>
                    <div className="card-2-action">
                      <a href="single-tour.html">
                        Explore Tour <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card-2">
                <div className="card-2-image">
                  <img
                    src="assets/images/popular-package/popular-package-4.jpg"
                    alt="popular package"
                  />
                </div>
                <div className="card-2-content">
                  <ul className="card-2-entry">
                    <li>
                      <i className="flaticon-calendar" />
                      02 Days
                    </li>
                  </ul>
                  <div className="card-2-info">
                    <h3>
                      <a href="single-tour.html">Sea Side</a>
                    </h3>
                    <div className="card-2-info-price">
                      $500<span>/per</span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetu regal sadip scing
                    elitr, sed diam.
                  </p>
                  <div className="card-2-footer">
                    <div className="card-2-reviews">
                      <ul className="review-star">
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                      </ul>
                      <span>(104 Reviews)</span>
                    </div>
                    <div className="card-2-action">
                      <a href="single-tour.html">
                        Explore Tour <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card-2">
                <div className="card-2-image">
                  <img
                    src="assets/images/popular-package/popular-package-5.jpg"
                    alt="popular package"
                  />
                </div>
                <div className="card-2-content">
                  <ul className="card-2-entry">
                    <li>
                      <i className="flaticon-calendar" />
                      05 Days
                    </li>
                  </ul>
                  <div className="card-2-info">
                    <h3>
                      <a href="single-tour.html">Dream Bali Tour</a>
                    </h3>
                    <div className="card-2-info-price">
                      $3500<span>/per</span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetu regal sadip scing
                    elitr, sed diam.
                  </p>
                  <div className="card-2-footer">
                    <div className="card-2-reviews">
                      <ul className="review-star">
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                      </ul>
                      <span>(98 Reviews)</span>
                    </div>
                    <div className="card-2-action">
                      <a href="single-tour.html">
                        Explore Tour <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card-2">
                <div className="card-2-image">
                  <img
                    src="assets/images/popular-package/popular-package-6.jpg"
                    alt="popular package"
                  />
                </div>
                <div className="card-2-content">
                  <ul className="card-2-entry">
                    <li>
                      <i className="flaticon-calendar" />
                      06 Days
                    </li>
                  </ul>
                  <div className="card-2-info">
                    <h3>
                      <a href="single-tour.html">City Tour Lisbon</a>
                    </h3>
                    <div className="card-2-info-price">
                      $2500<span>/per</span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetu regal sadip scing
                    elitr, sed diam.
                  </p>
                  <div className="card-2-footer">
                    <div className="card-2-reviews">
                      <ul className="review-star">
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                        <li className="full-star">
                          <i className="flaticon-star" />
                        </li>
                      </ul>
                      <span>(101 Reviews)</span>
                    </div>
                    <div className="card-2-action">
                      <a href="single-tour.html">
                        Explore Tour <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
