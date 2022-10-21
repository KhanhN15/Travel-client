import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  return (
    <>
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
                      Địa chỉ Email
                    </span>
                  </a>
                </li>
                <li>
                  <i className="flaticon-telephone" />
                  <a href="tel:+44-5346-338">+44 5346 338</a>
                </li>
                <li>
                  <i className="flaticon-address" />
                  Trần Đại Nghĩa - Ngũ Hành Sơn - Đà Nẵng
                </li>
              </ul>
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
                                  <img src="assets/images/uk.png" alt="flag" />
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
                                  <img src="assets/images/uae.png" alt="flag" />
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
                              <a href="single-hotel.html" className="nav-link">
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
                              <a href="my-addresses.html" className="nav-link">
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
                          <a href="blogs-two-column.html" className="nav-link">
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
    </>
  );
};
export default Header;
