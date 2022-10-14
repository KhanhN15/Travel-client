const Authentication = () => {
  return (
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
                  <a href="/cdn-cgi/l/email-protection#91f9f4fdfdfed1e5e3f0f8e1bff2fefc">
                    <span
                      className="__cf_email__"
                      data-cfemail="68000d040407281c1a090118460b0705"
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
                  <i className="flaticon-address" />3 Edgar Buildings, England,
                  BA1 2FJ.
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
                      <a href="#" className="nav-link dropdown-toggle">
                        Home
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="index.html" className="nav-link">
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
                      <a href="#" className="nav-link dropdown-toggle active">
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
                          <a
                            href="#"
                            className="nav-link dropdown-toggle active"
                          >
                            Users
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a
                                href="authentication.html"
                                className="nav-link active"
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
                  <div className="navbar-option-item">
                    <a
                      href="authentication.html"
                      className="btn main-btn main-btn-arrow"
                    >
                      Registration <i className="flaticon-right-arrow" />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      {/* Header */}
      <header className="inner-page-header inner-page-header-4">
        <div className="inner-header-shape" />
        {/* header-content */}
        <div className="container">
          <div className="header-content m-auto">
            <h1>Authentication</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Authentication
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </header>
      {/* Header */}
      {/* Authentication */}
      <div className="authentication-section pb-100 position-relative">
        <div className="map-shapes d-none d-md-block">
          <div className="map-shape map-shape-2 map-shape-vertical-top">
            <img src="assets/images/shapes/map-2.png" alt="shape" />
          </div>
        </div>
        <div className="container">
          <div className="authentication-header mb-30">
            <ul>
              <li className="active" data-authentication-list={1}>
                Register
              </li>
              <li data-authentication-list={2}>Login</li>
            </ul>
          </div>
          <div className="authentication-form-box">
            <div
              className="authentication-form-box-item active"
              data-authentication-item={1}
            >
              <div className="authentication-box">
                <div className="authentication-box-inner">
                  <form className="authentication-form mb-20">
                    <div className="input-group input-group-bg mb-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        aria-label="Name"
                      />
                    </div>
                    <div className="input-group input-group-bg mb-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email"
                      />
                    </div>
                    <div className="input-group input-group-bg mb-20">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        aria-label="Username"
                      />
                    </div>
                    <div className="authentication-account-access mb-20">
                      <div className="authentication-account-access-item">
                        <div className="input-checkbox">
                          <input type="checkbox" id="check1" />
                          <label htmlFor="check1">
                            Accept{" "}
                            <a href="terms-conditions.html">
                              terms &amp; conditions
                            </a>{" "}
                            &amp;{" "}
                            <a href="privacy-policy.html">privacy policy</a>.
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn main-btn main-btn-lg full-width"
                    >
                      Register Now
                    </button>
                  </form>
                  <div className="authentication-divider">
                    <span>OR</span>
                  </div>
                  <ul className="social-list social-list-btn">
                    <li className="social-btn-fb">
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="flaticon-facebook" />
                      </a>
                    </li>
                    <li className="social-btn-gm">
                      <a href="https://mail.google.com/" target="_blank">
                        <i className="flaticon-google-plus-logo" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="authentication-form-box-item"
              data-authentication-item={2}
            >
              <div className="authentication-box">
                <div className="authentication-box-inner">
                  <form className="authentication-form mb-20">
                    <div className="input-group input-group-bg mb-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username / Email Address"
                        aria-label="Username"
                      />
                    </div>
                    <div className="input-group input-group-bg mb-20">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        aria-label="Username"
                      />
                    </div>
                    <div className="authentication-account-access mb-20">
                      <div className="authentication-account-access-item">
                        <div className="input-checkbox">
                          <input type="checkbox" id="check2" />
                          <label htmlFor="check2">Remember Me!</label>
                        </div>
                      </div>
                      <div className="authentication-account-access-item">
                        <div className="authentication-link">
                          <a href="forget-password.html">Forget password?</a>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn main-btn main-btn-secondary full-width"
                    >
                      Login Now
                    </button>
                  </form>
                  <div className="authentication-divider">
                    <span>OR</span>
                  </div>
                  <ul className="social-list social-list-btn">
                    <li className="social-btn-fb">
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="flaticon-facebook" />
                      </a>
                    </li>
                    <li className="social-btn-gm">
                      <a href="https://mail.google.com/" target="_blank">
                        <i className="flaticon-google-plus-logo" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Authentication */}
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
                      <a href="/cdn-cgi/l/email-protection#f098959c9c9fb08482919980de939f9d">
                        <span
                          className="__cf_email__"
                          data-cfemail="563e333a3a39162224373f267835393b"
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
                <a href="#">
                  <img src="assets/images/logo-default-color.png" alt="logo" />
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
                  <a href="/cdn-cgi/l/email-protection#523a373e3e3d122620333b227c313d3f">
                    <span
                      className="__cf_email__"
                      data-cfemail="6b030e0707042b1f190a021b45080406"
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
                  <i className="flaticon-address" />3 Edgar Buildings, England,
                  BA1 2FJ.
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
  );
};

export default Authentication;
