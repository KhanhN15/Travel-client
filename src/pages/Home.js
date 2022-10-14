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
        <div className="preloader">
          <div className="preloader-wrapper">
            <div className="preloader-grid">
              <div className="preloader-grid-item preloader-grid-item-1" />
              <div className="preloader-grid-item preloader-grid-item-2" />
              <div className="preloader-grid-item preloader-grid-item-3" />
              <div className="preloader-grid-item preloader-grid-item-4" />
              <div className="preloader-grid-item preloader-grid-item-5" />
              <div className="preloader-grid-item preloader-grid-item-6" />
              <div className="preloader-grid-item preloader-grid-item-7" />
              <div className="preloader-grid-item preloader-grid-item-8" />
              <div className="preloader-grid-item preloader-grid-item-9" />
            </div>
          </div>
        </div>
        {/* .end preloader */}
        {/* preloader */}
        <div className="preloader">
          <div className="preloader-wrapper">
            <div className="preloader-grid">
              <div className="preloader-grid-item preloader-grid-item-1" />
              <div className="preloader-grid-item preloader-grid-item-2" />
              <div className="preloader-grid-item preloader-grid-item-3" />
              <div className="preloader-grid-item preloader-grid-item-4" />
              <div className="preloader-grid-item preloader-grid-item-5" />
              <div className="preloader-grid-item preloader-grid-item-6" />
              <div className="preloader-grid-item preloader-grid-item-7" />
              <div className="preloader-grid-item preloader-grid-item-8" />
              <div className="preloader-grid-item preloader-grid-item-9" />
            </div>
          </div>
        </div>
        {/* .end preloader */}
        {/* Topbar */}
        <div className="topbar">
          <div className="container position-relative z-index-1">
            <div className="row align-items-center">
              <div className="topbar-item topbar-item-left">
                <ul className="social-list">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="flaticon-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topbar-item justify-content-end">
                <ul className="topbar-action">
                  <li>
                    <i className="flaticon-mail" />
                    <a href="/cdn-cgi/l/email-protection#cba3aea7a7a48bbfb9aaa2bbe5a8a4a6">
                      <span
                        className="__cf_email__"
                        data-cfemail="bdd5d8d1d1d2fdc9cfdcd4cd93ded2d0"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-telephone" />
                    <a href="tel:+44-5346-338">+44 5346 338</a>
                  </li>
                  <li>
                    <i className="flaticon-address" />3 Edgar Buildings,
                    England, BA1 2FJ.
                  </li>
                </ul>
                <div className="dropdown language-option">
                  {" "}
                  {/* "language-option" class is used for language switcher */}
                  <button
                    className="dropdown-toggle"
                    type="button"
                    id="language1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="flaticon-worldwide" />
                    <span className="lang-name" />{" "}
                    {/* "lang-name" class is used for language switcher */}
                  </button>
                  <div
                    className="dropdown-menu language-dropdown-menu"
                    aria-labelledby="language1"
                  >
                    {" "}
                    {/* "language-dropdown-menu" class is used for language switcher */}
                    <a className="dropdown-item" href="#">
                      <img src="assets/images/uk.png" alt="flag" />
                      English
                    </a>
                    <a className="dropdown-item" href="#">
                      <img src="assets/images/china.png" alt="flag" />
                      简体中文
                    </a>
                    <a className="dropdown-item" href="#">
                      <img src="assets/images/uae.png" alt="flag" />
                      العربيّة
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar */}
        {/* Navbar */}
        <div className="fixed-top">
          <div className="navbar-area">
            <div className="container">
              <div className="mobile-nav">
                <a href="index.html" className="mobile-brand">
                  <img
                    src="assets/images/logo.png"
                    alt="logo"
                    className="logo default-logo"
                  />
                  <img
                    src="assets/images/logo-default-color.png"
                    alt="logo"
                    className="sticky-logo"
                  />
                </a>
                <div className="navbar-option">
                  <div className="navbar-option-item">
                    <ul className="navbar-option-list">
                      <li className="d-md-none">
                        <a href="#" className="mobile-option-dot">
                          <i className="flaticon-ellipsis" />
                        </a>
                        {/* "mobile-option-dropdown" class is used for all options */}
                        <div className="mobile-option-dropdown">
                          <ul className="navbar-option-list">
                            <li>
                              <div className="navbar-language dropdown language-option">
                                {" "}
                                {/* "language-option" class is used for language switcher */}
                                <button
                                  className="dropdown-toggle"
                                  type="button"
                                  id="language2"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="flaticon-worldwide" />
                                  <span className="lang-name" />{" "}
                                  {/* "lang-name" class is used for language switcher */}
                                </button>
                                <div
                                  className="dropdown-menu language-dropdown-menu"
                                  aria-labelledby="language2"
                                >
                                  {" "}
                                  {/* "language-dropdown-menu" class is used for language switcher */}
                                  <a className="dropdown-item" href="#">
                                    <img
                                      src="assets/images/uk.png"
                                      alt="flag"
                                    />
                                    English
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      src="assets/images/china.png"
                                      alt="flag"
                                    />
                                    简体中文
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <img
                                      src="assets/images/uae.png"
                                      alt="flag"
                                    />
                                    العربيّة
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <a href="#" className="page-search-btn">
                                <i className="flaticon-searching" />
                              </a>
                            </li>
                            <li>
                              <a href="authentication.html">
                                <i className="flaticon-user-1" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="top-sidebar-action">
                                <i className="flaticon-grid" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="d-none d-md-inline-block d-lg-none">
                        <div className="navbar-language dropdown language-option">
                          {" "}
                          {/* "language-option" class is used for language switcher */}
                          <button
                            className="dropdown-toggle"
                            type="button"
                            id="language3"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="flaticon-worldwide" />
                            <span className="lang-name" />{" "}
                            {/* "lang-name" class is used for language switcher */}
                          </button>
                          <div
                            className="dropdown-menu language-dropdown-menu"
                            aria-labelledby="language3"
                          >
                            {" "}
                            {/* "language-dropdown-menu" class is used for language switcher */}
                            <a className="dropdown-item" href="#">
                              <img src="assets/images/uk.png" alt="flag" />
                              English
                            </a>
                            <a className="dropdown-item" href="#">
                              <img src="assets/images/china.png" alt="flag" />
                              简体中文
                            </a>
                            <a className="dropdown-item" href="#">
                              <img src="assets/images/uae.png" alt="flag" />
                              العربيّة
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="d-none d-md-inline-block">
                        <a href="#" className="page-search-btn">
                          <i className="flaticon-searching" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <i className="flaticon-shopping-bag" />
                          <span className="option-badge">2</span>
                        </a>
                      </li>
                      <li className="d-none d-md-inline-block">
                        <a href="authentication.html">
                          <i className="flaticon-user-1" />
                        </a>
                      </li>
                      <li className="d-none d-md-inline-block d-lg-none">
                        <a href="#" className="top-sidebar-action">
                          <i className="flaticon-grid" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-nav">
              <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                  <a className="navbar-brand" href="index.html">
                    <img
                      src="assets/images/logo.png"
                      alt="logo"
                      className="logo default-logo"
                    />
                    <img
                      src="assets/images/logo-default-color.png"
                      alt="logo"
                      className="sticky-logo"
                    />
                  </a>
                  <div
                    className="collapse navbar-collapse mean-menu"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle active">
                          Home
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="index.html" className="nav-link active">
                              Home Demo 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="index-2.html" className="nav-link">
                              Home Demo 2
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="index-3.html" className="nav-link">
                              Home Demo 3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          Pages
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="about-us.html" className="nav-link">
                              About Us
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="faqs.html" className="nav-link">
                              FAQ's
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="get-in-touch.html" className="nav-link">
                              Get In Touch
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link dropdown-toggle">
                              Products
                            </a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a href="products.html" className="nav-link">
                                  Products
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="single-product.html"
                                  className="nav-link"
                                >
                                  Single Product
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="cart.html" className="nav-link">
                                  Cart
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="checkout.html" className="nav-link">
                                  Checkout
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="wishlist.html" className="nav-link">
                                  Wishlist
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link dropdown-toggle">
                              Hotels
                            </a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a href="hotels.html" className="nav-link">
                                  Hotels
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="single-hotel.html"
                                  className="nav-link"
                                >
                                  Single Hotel
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a href="team.html" className="nav-link">
                              Our Team
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="who-we-are.html" className="nav-link">
                              Who We Are
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link dropdown-toggle">
                              Users
                            </a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a
                                  href="authentication.html"
                                  className="nav-link"
                                >
                                  Authentication
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="forget-password.html"
                                  className="nav-link"
                                >
                                  Forget Password
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="my-account.html" className="nav-link">
                                  My Account
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="my-orders.html" className="nav-link">
                                  My Orders
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="my-addresses.html"
                                  className="nav-link"
                                >
                                  My Addresses
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link dropdown-toggle">
                              Others
                            </a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a href="404.html" className="nav-link">
                                  404 Error Page
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="coming-soon-page.html"
                                  className="nav-link"
                                >
                                  Coming Soon
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="terms-conditions.html"
                                  className="nav-link"
                                >
                                  Terms &amp; Conditions
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="privacy-policy.html"
                                  className="nav-link"
                                >
                                  Privacy Policy
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="search-page.html" className="nav-link">
                                  Search Page
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          Destinations
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="destination.html" className="nav-link">
                              Destinations
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="single-destination.html"
                              className="nav-link"
                            >
                              Single Destination
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          Tours
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="tour.html" className="nav-link">
                              Tours
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="single-tour.html" className="nav-link">
                              Single Tour
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          Blogs
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              href="blogs-two-column.html"
                              className="nav-link"
                            >
                              Blogs Two Column
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="blogs-full.html" className="nav-link">
                              Blogs Full
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="single-blog.html" className="nav-link">
                              Single Blog
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="contact.html" className="nav-link">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar-option">
                    <div className="navbar-option-item">
                      <ul className="navbar-option-list">
                        <li>
                          <a href="#" className="page-search-btn">
                            <i className="flaticon-searching" />
                          </a>
                        </li>
                        <li>
                          <a href="cart.html">
                            <i className="flaticon-shopping-bag" />
                            <span className="option-badge">2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Link className="navbar-option-item" to="/login">
                      Registration <i className="flaticon-right-arrow" />
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar */}
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
              <h1>Plan Your Best Holiday With Us &amp; Enjoy</h1>
              <a href="tour.html" className="btn main-btn main-btn-arrow">
                See All Tour <i className="flaticon-right-arrow" />
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
              <small>The Top Places For</small>
              <h2>Planning Your Holiday</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 col-xl-3 pb-30">
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
              <div className="col-sm-6 col-lg-4 col-xl-3 pb-30">
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
              <div className="col-sm-6 col-lg-4 col-xl-3 pb-30">
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
              <div className="col-sm-6 col-lg-4 col-xl-3 pb-30">
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
              <div className="col-sm-6 col-lg-4 col-xl-3 pb-30">
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
              <div className="col-sm-6 col-lg-4 col-xl-3 pb-30">
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
              <div className="col-sm-6 col-lg-4 col-xl-3 pb-30 offset-lg-2 offset-xl-0">
                <div className="card-1">
                  <div className="card-1-image">
                    <div className="card-1-overlay">
                      <a href="single-destination.html">
                        <img
                          src="assets/images/holiday/holiday-place-7.jpg"
                          alt="holiday"
                        />
                      </a>
                      <ul className="card-1-entry">
                        <li>
                          <i className="flaticon-calendar" />
                          25 Jan
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
                        <a href="single-destination.html">Seville</a>
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
              <div className="col-sm-6 col-lg-4 col-xl-3 pb-30">
                <div className="card-1">
                  <div className="card-1-image">
                    <div className="card-1-overlay">
                      <a href="single-destination.html">
                        <img
                          src="assets/images/holiday/holiday-place-8.jpg"
                          alt="holiday"
                        />
                      </a>
                      <ul className="card-1-entry">
                        <li>
                          <i className="flaticon-calendar" />
                          24 Jan
                        </li>
                        <li>
                          <i className="flaticon-user-1" />
                          04 +
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
                        <a href="single-destination.html">Varadero</a>
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
                        <span>(101 Reviews)</span>
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
        {/* Holiday Planning */}
        {/* Tour */}
        <section
          className="tour-section bg-offwhite pt-100 pb-70 animate-section position-relative overflow-hidden"
          id="animateSection"
        >
          <div className="radial-animation-shape radial-animation-shape-active">
            <img src="assets/images/shapes/compass.png" alt="compass" />
          </div>
          <div className="container-fluid custom-container-fluid position-relative">
            <div className="row align-items-center">
              <div className="col-lg-6 pb-30">
                <div className="max-685 ms-auto me-auto me-lg-0">
                  <div className="section-title section-title-left about-title">
                    <small>We Are Specialized In</small>
                    <h2>Tour &amp; Travel Arrangement</h2>
                  </div>
                  <div className="about-content-item">
                    <div className="about-content-thumb">
                      <i className="flaticon-map" />
                    </div>
                    <div className="about-content-texts">
                      <h3>We Can Be A Great Travel Planner For You</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                  </div>
                  <div className="about-content-item">
                    <div className="about-content-thumb">
                      <i className="flaticon-compass" />
                    </div>
                    <div className="about-content-texts">
                      <h3>We Guide You All Over The World</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                  </div>
                  <div className="text-center text-lg-start">
                    <a
                      href="about-us.html"
                      className="btn main-btn main-btn-arrow"
                    >
                      Discover More <i className="flaticon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pb-30">
                <div className="about-content-image text-center">
                  <img src="assets/images/tour-about.png" alt="about" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Tour */}
        {/* Popular Package */}
        <section className="popular-package-section pt-100 pb-80 line-shape-bg">
          <div className="container">
            <div className="section-title section-title-lg">
              <small>Popular Package</small>
              <h2>Amazing Tours Liked By The Adventurous</h2>
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
        {/* Popular Package */}
        {/* Tour Video */}
        <section className="tour-video-section position-relative">
          <div className="map-shapes">
            <div className="map-shape map-shape-2 map-shape-top">
              <img src="assets/images/shapes/map-2.png" alt="shape" />
            </div>
          </div>
          <div className="tour-video-contents">
            <div className="tour-video-item desk-pad-right-70 order-2 order-lg-1">
              <div className="tour-video-bg">
                <div className="video-icon">
                  <a
                    href="https://www.youtube.com/watch?v=pqEO5r-Vlpo"
                    className="video-popup"
                  >
                    <i className="flaticon-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="tour-video-item tour-video-item-details pt-100 order-1 order-lg-2 tab-pt-0">
              <div className="max-685 m-auto me-lg-0 ms-lg-0">
                <div className="section-title section-title-left about-title">
                  <small>Among The All</small>
                  <h2>Choose Your Favorite Tour</h2>
                </div>
                <div className="about-content-item">
                  <div className="about-content-thumb">
                    <i className="flaticon-gallery" />
                  </div>
                  <div className="about-content-texts">
                    <h3>We Suggest You The Best Tour Collection</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
                <div className="text-center text-lg-start">
                  <a href="tour.html" className="btn main-btn main-btn-arrow">
                    Book A Tour <i className="flaticon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container tour-category">
            <div className="row">
              <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                <div className="tour-category-card tour-category-card-blue">
                  <a href="tour.html">
                    <i className="flaticon-hiking" />
                    <h3>Adventure</h3>
                  </a>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                <div className="tour-category-card tour-category-card-pink">
                  <a href="tour.html">
                    <i className="flaticon-beach" />
                    <h3>Sea Beach</h3>
                  </a>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                <div className="tour-category-card tour-category-card-green">
                  <a href="tour.html">
                    <i className="flaticon-adventure" />
                    <h3>Mountain</h3>
                  </a>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                <div className="tour-category-card tour-category-card-yellow">
                  <a href="tour.html">
                    <i className="flaticon-bagpack" />
                    <h3>Couple Tour</h3>
                  </a>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                <div className="tour-category-card tour-category-card-purple">
                  <a href="tour.html">
                    <i className="flaticon-fire" />
                    <h3>Night Fall</h3>
                  </a>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 pt-30">
                <div className="tour-category-card tour-category-card-greendark">
                  <a href="tour.html">
                    <i className="flaticon-signpost" />
                    <h3>Popular</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Tour Video */}
        {/* Testimonial */}
        <section className="testimonial-section image-bg image-bg-1 p-tb-100">
          <div className="container-fluid position-relative z-index-1">
            <div className="section-title section-title-white">
              <small>Testimonials Of The Traveller</small>
              <h2>Some Good Talk About Us</h2>
            </div>
            <div className="testimonial-carousel owl-carousel owl-theme">
              <div className="item">
                <div className="testimonial-card text-center">
                  <div className="testimoial-quote">
                    <i className="flaticon-left-quote" />
                  </div>
                  <p className="testimonial-feedback">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor
                  </p>
                  <div className="testimonial-client-info">
                    <img
                      src="assets/images/clients/client-1.jpg"
                      alt="client"
                    />
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
                    <h3 className="testimonial-name">Amrita Roy</h3>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-card text-center">
                  <div className="testimoial-quote">
                    <i className="flaticon-left-quote" />
                  </div>
                  <p className="testimonial-feedback">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor
                  </p>
                  <div className="testimonial-client-info">
                    <img
                      src="assets/images/clients/client-2.jpg"
                      alt="client"
                    />
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
                    <h3 className="testimonial-name">John Abril</h3>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-card text-center">
                  <div className="testimoial-quote">
                    <i className="flaticon-left-quote" />
                  </div>
                  <p className="testimonial-feedback">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor
                  </p>
                  <div className="testimonial-client-info">
                    <img
                      src="assets/images/clients/client-3.jpg"
                      alt="client"
                    />
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
                    <h3 className="testimonial-name">Jane Anderson</h3>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-card text-center">
                  <div className="testimoial-quote">
                    <i className="flaticon-left-quote" />
                  </div>
                  <p className="testimonial-feedback">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor
                  </p>
                  <div className="testimonial-client-info">
                    <img
                      src="assets/images/clients/client-4.jpg"
                      alt="client"
                    />
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
                    <h3 className="testimonial-name">Devit Kotlin</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial */}
        {/* Partner */}
        <section className="partner-section pt-100 pb-70 line-shape-bg line-shape-bg-right position-relative overflow-hidden">
          <div className="map-shapes">
            <div className="map-shape map-shape-1 map-shape-top map-shape-sm">
              <img src="assets/images/shapes/map-1.png" alt="shape" />
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 pb-30 desk-pad-right-40">
                <div className="section-title about-title section-title-left m-0">
                  <small>Our Royal Partners</small>
                  <h2>Meet Our Partners</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                  <a
                    href="about-us.html"
                    className="btn main-btn main-btn-arrow"
                  >
                    More About Us <i className="flaticon-right-arrow" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-6 col-sm-4 col-md-3 col-lg-3 pb-30">
                    <div className="partner-image">
                      <a href="contact.html">
                        <img
                          src="assets/images/partners/partner-1.png"
                          alt="partner"
                          className="partner-default"
                        />
                        <img
                          src="assets/images/partners/partner-hover-1.png"
                          alt="partner"
                          className="partner-hover"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-3 pb-30">
                    <div className="partner-image">
                      <a href="contact.html">
                        <img
                          src="assets/images/partners/partner-2.png"
                          alt="partner"
                          className="partner-default"
                        />
                        <img
                          src="assets/images/partners/partner-hover-2.png"
                          alt="partner"
                          className="partner-hover"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-3 pb-30">
                    <div className="partner-image">
                      <a href="contact.html">
                        <img
                          src="assets/images/partners/partner-3.png"
                          alt="partner"
                          className="partner-default"
                        />
                        <img
                          src="assets/images/partners/partner-hover-3.png"
                          alt="partner"
                          className="partner-hover"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-3 pb-30">
                    <div className="partner-image">
                      <a href="contact.html">
                        <img
                          src="assets/images/partners/partner-4.png"
                          alt="partner"
                          className="partner-default"
                        />
                        <img
                          src="assets/images/partners/partner-hover-4.png"
                          alt="partner"
                          className="partner-hover"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-3 pb-30">
                    <div className="partner-image">
                      <a href="contact.html">
                        <img
                          src="assets/images/partners/partner-5.png"
                          alt="partner"
                          className="partner-default"
                        />
                        <img
                          src="assets/images/partners/partner-hover-5.png"
                          alt="partner"
                          className="partner-hover"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-3 pb-30">
                    <div className="partner-image">
                      <a href="contact.html">
                        <img
                          src="assets/images/partners/partner-6.png"
                          alt="partner"
                          className="partner-default"
                        />
                        <img
                          src="assets/images/partners/partner-hover-6.png"
                          alt="partner"
                          className="partner-hover"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="offset-sm-2 offset-md-0 col-6 col-sm-4 col-md-3 col-lg-3 pb-30">
                    <div className="partner-image">
                      <a href="contact.html">
                        <img
                          src="assets/images/partners/partner-7.png"
                          alt="partner"
                          className="partner-default"
                        />
                        <img
                          src="assets/images/partners/partner-hover-7.png"
                          alt="partner"
                          className="partner-hover"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-3 pb-30">
                    <div className="partner-image">
                      <a href="contact.html">
                        <img
                          src="assets/images/partners/partner-8.png"
                          alt="partner"
                          className="partner-default"
                        />
                        <img
                          src="assets/images/partners/partner-hover-8.png"
                          alt="partner"
                          className="partner-hover"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Partner */}
        {/* Download */}
        <section
          className="download-section bg-offwhite position-relative"
          id="downloadSection"
        >
          <div className="mini-shapes d-none d-lg-block">
            <div className="mini-shape mini-shape-1">
              <img src="assets/images/shapes/mini-shape-1.png" alt="shape" />
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center align-items-xl-start">
              <div className="col-lg-5 position-relative">
                <div className="image-position image-position-top tab-pb-30 text-center text-lg-start">
                  <img src="assets/images/download.png" alt="download" />
                </div>
              </div>
              <div className="col-lg-7 pt-100 pb-100 tab-pt-0">
                <div className="desk-pad-left-50 section-title section-title-left about-title m-0">
                  <small>Download Our Mobile App</small>
                  <h2>Book Your First Tour Through Our Mobile App</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo.
                  </p>
                  <div className="section-buttons justify-center justify-flex-start">
                    <a href="contact.html" className="btn main-btn">
                      Download From Applestore{" "}
                      <i className="icofont-brand-appstore" />
                    </a>
                    <a
                      href="contact.html"
                      className="btn main-btn main-btn-red"
                    >
                      Download From Playstore{" "}
                      <i className="flaticon-play-store" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Download */}
        {/* Product */}
        <section className="product-section pt-100 pb-100 position-relative">
          <div className="map-shapes">
            <div className="map-shape map-shape-1">
              <img src="assets/images/shapes/map-3.png" alt="shape" />
            </div>
          </div>
          <div className="container">
            <div className="section-title">
              <small>We Also Have Many Things To</small>
              <h2>Make Your Tour Successful</h2>
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
                    <ul className="single-card-action">
                      <li>
                        <a
                          href="cart.html"
                          className="btn main-btn main-btn-arrow"
                        >
                          Add To Cart <i className="flaticon-right-arrow" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="wishlist.html"
                          className="btn main-btn main-btn-red main-btn-arrow"
                        >
                          Add To Wishlist <i className="flaticon-right-arrow" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-card-content">
                    <h3>
                      <a href="single-product.html">Travel Shoe</a>
                    </h3>
                    <p>$ 150</p>
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
                    <ul className="single-card-action">
                      <li>
                        <a
                          href="cart.html"
                          className="btn main-btn main-btn-arrow"
                        >
                          Add To Cart <i className="flaticon-right-arrow" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="wishlist.html"
                          className="btn main-btn main-btn-red main-btn-arrow"
                        >
                          Add To Wishlist <i className="flaticon-right-arrow" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-card-content">
                    <h3>
                      <a href="single-product.html">Travel Bag</a>
                    </h3>
                    <p>$ 50</p>
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
                    <ul className="single-card-action">
                      <li>
                        <a
                          href="cart.html"
                          className="btn main-btn main-btn-arrow"
                        >
                          Add To Cart <i className="flaticon-right-arrow" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="wishlist.html"
                          className="btn main-btn main-btn-red main-btn-arrow"
                        >
                          Add To Wishlist <i className="flaticon-right-arrow" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-card-content">
                    <h3>
                      <a href="single-product.html">Rope</a>
                    </h3>
                    <p>$ 15</p>
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
                    <ul className="single-card-action">
                      <li>
                        <a
                          href="cart.html"
                          className="btn main-btn main-btn-arrow"
                        >
                          Add To Cart <i className="flaticon-right-arrow" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="wishlist.html"
                          className="btn main-btn main-btn-red main-btn-arrow"
                        >
                          Add To Wishlist <i className="flaticon-right-arrow" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-card-content">
                    <h3>
                      <a href="single-product.html">Travel Map</a>
                    </h3>
                    <p>$ 10</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href="products.html" className="btn main-btn">
                Visit Our Online Store <i className="flaticon-shopping-bag" />
              </a>
            </div>
          </div>
        </section>
        {/* Product */}
        {/* Blog */}
        <section
          className="blog-section pb-100 overflow-hidden"
          id="blogSection"
        >
          <div className="container position-relative">
            <div className="mini-shapes d-none d-lg-block">
              <div className="mini-shape mini-shape-2">
                <img src="assets/images/shapes/mini-shape-2.png" alt="shape" />
              </div>
            </div>
            <div className="section-title">
              <small>To Get More Tips And Tricks</small>
              <h2>Read Our Daily Blog</h2>
            </div>
            <div className="row">
              <div className="col-lg-6 pb-30 desk-pad-right-50">
                <div className="blog-image-card blog-image-card-1">
                  <div className="blog-card-content">
                    <ul className="blog-entry">
                      <li>
                        <i className="flaticon-calendar" />
                        03 Feb
                      </li>
                      <li>
                        <i className="flaticon-user-1" />
                        John Anderson
                      </li>
                    </ul>
                    <h3>
                      <a href="single-blog.html">
                        How Not To Get Lost In Foreign Country
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat.
                    </p>
                    <div className="blog-redirect-link">
                      <a href="single-blog.html">
                        Read Article <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-flat-1 blog-bg-1 mb-30">
                  <div className="blog-card-content">
                    <ul className="blog-entry">
                      <li>
                        <i className="flaticon-calendar" />
                        03 Feb
                      </li>
                      <li>
                        <i className="flaticon-user-1" />
                        John Anderson
                      </li>
                    </ul>
                    <h3>
                      <a href="single-blog.html">
                        How Not To Get Lost In Foreign Country
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat.
                    </p>
                    <div className="blog-redirect-link">
                      <a href="single-blog.html">
                        Read Article <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog-flat-1 blog-bg-2 mb-30">
                  <div className="blog-card-content">
                    <ul className="blog-entry">
                      <li>
                        <i className="flaticon-calendar" />
                        02 Feb
                      </li>
                      <li>
                        <i className="flaticon-user-1" />
                        John Anderson
                      </li>
                    </ul>
                    <h3>
                      <a href="single-blog.html">
                        The Best Places To Visit With Family
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat.
                    </p>
                    <div className="blog-redirect-link">
                      <a href="single-blog.html">
                        Read Article <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog-flat-1 blog-bg-3 mb-30">
                  <div className="blog-card-content">
                    <ul className="blog-entry">
                      <li>
                        <i className="flaticon-calendar" />
                        01 Feb
                      </li>
                      <li>
                        <i className="flaticon-user-1" />
                        John Anderson
                      </li>
                    </ul>
                    <h3>
                      <a href="single-blog.html">
                        How To Spend A Perfect Weekend In Asia Together
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat.
                    </p>
                    <div className="blog-redirect-link">
                      <a href="single-blog.html">
                        Read Article <i className="flaticon-export" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                href="blogs-two-column.html"
                className="btn main-btn main-btn-arrow"
              >
                Explore Blog <i className="flaticon-right-arrow" />
              </a>
            </div>
          </div>
        </section>
        {/* Blog */}
        {/* Footer */}
        <footer className="footer footer-bg">
          <div className="footer-upper pb-70 position-relative">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="footer-content-item">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="assets/images/logo-black.png" alt="logo" />
                      </a>
                    </div>
                    <ul className="footer-details footer-address">
                      <li>
                        <i className="flaticon-mail" />
                        <a href="/cdn-cgi/l/email-protection#563e333a3a39162224373f267835393b">
                          <span
                            className="__cf_email__"
                            data-cfemail="87efe2ebebe8c7f3f5e6eef7a9e4e8ea"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        <i className="flaticon-telephone" />
                        <a href="tel:+44-5346-338">+44 5346 338</a>
                      </li>
                      <li>
                        <i className="flaticon-address" />
                        3 Edgar Buildings, England, <br /> BA1 2FJ.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="footer-content-list footer-content-item desk-pad-left-70">
                    <div className="footer-content-title">
                      <h3>Quick Links</h3>
                    </div>
                    <ul className="footer-details footer-list">
                      <li>
                        <a href="tour.html">Popular Tour</a>
                      </li>
                      <li>
                        <a href="blogs-two-column.html">Blog</a>
                      </li>
                      <li>
                        <a href="products.html">Shop</a>
                      </li>
                      <li>
                        <a href="faqs.html">FAQ's</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="footer-content-list footer-content-item desk-pad-left-70">
                    <div className="footer-content-title">
                      <h3>Important Links</h3>
                    </div>
                    <ul className="footer-details footer-list">
                      <li>
                        <a href="destination.html">Destination</a>
                      </li>
                      <li>
                        <a href="get-in-touch.html">Get In Touch</a>
                      </li>
                      <li>
                        <a href="who-we-are.html">Who We Are</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="hotels.html">Hotels</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="footer-content-list footer-content-item desk-pad-left-30">
                    <div className="footer-content-title">
                      <h3>Instafeed</h3>
                    </div>
                    <div className="footer-details">
                      <ul className="footer-gallery">
                        <li>
                          <a href="https://www.instagram.com/">
                            <img
                              src="assets/images/instafeed/instafeed-1.jpg"
                              alt="insta"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <img
                              src="assets/images/instafeed/instafeed-2.jpg"
                              alt="insta"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <img
                              src="assets/images/instafeed/instafeed-3.jpg"
                              alt="insta"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <img
                              src="assets/images/instafeed/instafeed-4.jpg"
                              alt="insta"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <img
                              src="assets/images/instafeed/instafeed-5.jpg"
                              alt="insta"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <img
                              src="assets/images/instafeed/instafeed-6.jpg"
                              alt="insta"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-lower">
            <div className="container">
              <div className="row align-items-center">
                <div className="col footer-lower-item">
                  <div className="footer-copyright-text">
                    <p>
                      Copyright ©2021 Traip. Designed &amp; Developed By{" "}
                      <a href="https://envytheme.com/" target="_blank">
                        EnvyTheme
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col footer-lower-item footer-lower-right">
                  Follow:
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="flaticon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="flaticon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="flaticon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/" target="_blank">
                        <i className="flaticon-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer */}
        {/* Top Sidebar */}
        <div className="top-sidebar-wrapper">
          <div className="top-sidebar-modal">
            <div className="top-sidebar-body">
              <div className="topbar-sidebar-header">
                <div className="topbar-sidebar-brand">
                  <a href="index.html">
                    <img
                      src="assets/images/logo-default-color.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="topbar-sidebar-close">
                  <i className="flaticon-close" />
                </div>
              </div>
              <div className="topbar-sidebar-item">
                <h3>Contact Us</h3>
                <ul className="topbar-sidebar-lists">
                  <li>
                    <i className="flaticon-mail" />
                    <a href="/cdn-cgi/l/email-protection#28404d444447685c5a494158064b4745">
                      <span
                        className="__cf_email__"
                        data-cfemail="a9c1ccc5c5c6e9dddbc8c0d987cac6c4"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-telephone" />
                    <a href="tel:+44-5346-338">+44 5346 338</a>
                  </li>
                  <li>
                    <i className="flaticon-address" />3 Edgar Buildings,
                    England, BA1 2FJ.
                  </li>
                </ul>
              </div>
              <div className="topbar-sidebar-item">
                <h3>Follow Us</h3>
                <ul className="social-list">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="flaticon-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Top Sidebar */}
        {/* Search Wrapper */}
        <div className="searchbar-wrapper">
          <div className="searchbar-body">
            <div className="searchbar-close page-searchbar-close">
              <i className="flaticon-close" />
            </div>
            <div className="searchbar-form">
              <img src="assets/images/logo.png" alt="logo" />
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Search*"
                    className="form-control"
                    required
                  />
                  <button className="btn main-btn" type="submit">
                    Search Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Search Wrapper */}
        {/* Scroll-top */}
        <div className="scroll-top" id="scrolltop">
          <div className="scroll-top-inner">
            <i className="icofont-long-arrow-up" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
