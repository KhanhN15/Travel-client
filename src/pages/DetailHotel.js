import Nav from "../component/Nav";

const DetailHotel = () => {
  return (
    <>
      <Nav />
      <section className="product-section pt-100 pb-100 position-relative">
        <div className="map-shapes">
          <div className="map-shape map-shape-1 map-shape-top">
            <img src="assets/images/shapes/map-1.png" alt="shape" />
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center pb-30">
            <div className="col-lg-6 pb-30">
              <div className="product-details-carousel owl-carousel owl-theme default-owl-theme product-gallery-grid">
                <div className="item">
                  <div className="product-gallery-trigger">
                    <a
                      href="assets/images/products/product-1.jpg"
                      title="Travel Shoe"
                    >
                      <i className="flaticon-full-screen" />
                    </a>
                  </div>
                  <img
                    src="assets/images/products/product-1.jpg"
                    alt="product"
                  />
                </div>
                <div className="item">
                  <div className="product-gallery-trigger">
                    <a
                      href="assets/images/products/product-2.jpg"
                      title="Travel Shoe"
                    >
                      <i className="flaticon-full-screen" />
                    </a>
                  </div>
                  <img
                    src="assets/images/products/product-2.jpg"
                    alt="product"
                  />
                </div>
                <div className="item">
                  <div className="product-gallery-trigger">
                    <a
                      href="assets/images/products/product-3.jpg"
                      title="Travel Shoe"
                    >
                      <i className="flaticon-full-screen" />
                    </a>
                  </div>
                  <img
                    src="assets/images/products/product-3.jpg"
                    alt="product"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 pb-30">
              <div className="product-details-caption desk-pad-left-40">
                <div className="card-2-info">
                  <h3>Travel Shoe</h3>
                  <div className="card-2-info-price">$ 150</div>
                </div>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <ul className="product-details-list">
                  <li>
                    <strong>SKU:</strong> 02314
                  </li>
                  <li>
                    <strong>Category:</strong> Protection
                  </li>
                  <li>
                    <strong>Tag:</strong> Outdoor
                  </li>
                  <li>
                    <strong>Status:</strong> In Stock
                  </li>
                </ul>
                <div className="product-details-action">
                  <div className="product-details-cart cart-quantity">
                    <button className="qu-btn dec">-</button>
                    <input type="text" className="qu-input" defaultValue={1} />
                    <button className="qu-btn inc">+</button>
                  </div>
                  <a href="cart.html" className="btn main-btn main-btn-arrow">
                    Add To Cart <i className="flaticon-right-arrow" />
                  </a>
                </div>
                <a
                  href="wishlist.html"
                  className="btn main-btn main-btn-red main-btn-arrow"
                >
                  Add To Wishlist <i className="flaticon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="product-details-tab">
            <ul className="product-tab-list">
              <li className="active" data-product-tab={1}>
                Description
              </li>
              <li data-product-tab={2}>Reviews</li>
            </ul>
            <div className="product-tab-information">
              <div
                className="product-tab-information-item active"
                data-product-details-tab={1}
              >
                <div className="forum-details">
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren.
                  </p>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna.{" "}
                    </li>
                    <li>
                      Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et dolore magna. aliquyam erat.{" "}
                    </li>
                    <li>
                      Dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna.{" "}
                    </li>
                    <li>
                      Sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna. aliquyam erat, sed diam
                      voluptua.
                    </li>
                    <li>
                      Sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna. aliquyam erat, sed diam voluptua.{" "}
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam e
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore.
                  </p>
                </div>
              </div>
              <div
                className="product-tab-information-item"
                data-product-details-tab={2}
              >
                <div className="max-1050 ms-auto me-auto">
                  {/* Comments */}
                  <div className="comment-area">
                    <div className="comment-feedback mb-50">
                      <div className="comment-feedback-item">
                        <div className="comment-feedback-reply">
                          <div className="comment-reply-thumb">
                            <img
                              src="assets/images/users/user-1.jpg"
                              alt="user"
                            />
                          </div>
                          <div className="comment-reply-content">
                            <div className="comment-reply-header">
                              <div className="comment-reply-info">
                                <h4>Jane Anderson</h4>
                                <p>February 07,2021 - 08:18 AM</p>
                              </div>
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
                            </div>
                            <p className="comment-reply-para">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita kasd gubergren, no
                              sea takimata sanctus est Lorem ipsum dolor sit
                              amet.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="comment-feedback-item">
                        <div className="comment-feedback-reply">
                          <div className="comment-reply-thumb">
                            <img
                              src="assets/images/users/user-3.jpg"
                              alt="user"
                            />
                          </div>
                          <div className="comment-reply-content">
                            <div className="comment-reply-header">
                              <div className="comment-reply-info">
                                <h4>Jane Anderson</h4>
                                <p>February 05,2021 - 10:21 PM</p>
                              </div>
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
                            </div>
                            <p className="comment-reply-para">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita kasd gubergren, no
                              sea takimata sanctus est Lorem ipsum dolor sit
                              amet.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form className="product-review-form">
                      <div className="sub-section-title m-0">
                        <h3 className="sub-section-title-heading">
                          Leave A Review
                        </h3>
                        <div className="star-rating mb-20">
                          <input
                            type="radio"
                            id="5-stars"
                            name="rating"
                            defaultValue={5}
                          />
                          <label htmlFor="5-stars" className="star" />
                          <input
                            type="radio"
                            id="4-stars"
                            name="rating"
                            defaultValue={4}
                          />
                          <label htmlFor="4-stars" className="star" />
                          <input
                            type="radio"
                            id="3-stars"
                            name="rating"
                            defaultValue={3}
                          />
                          <label htmlFor="3-stars" className="star" />
                          <input
                            type="radio"
                            id="2-stars"
                            name="rating"
                            defaultValue={2}
                          />
                          <label htmlFor="2-stars" className="star" />
                          <input
                            type="radio"
                            id="1-star"
                            name="rating"
                            defaultValue={1}
                          />
                          <label htmlFor="1-star" className="star" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group mb-20">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder="Your Name*"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group mb-20">
                            <input
                              type="text"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="Your Email*"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group mb-20">
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              rows={6}
                              placeholder="Your Comment*"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-checkbox mb-20">
                        <input type="checkbox" id="check1" />
                        <label htmlFor="check1">
                          Save my name and email in this browser for the next
                          time I comment.
                        </label>
                      </div>
                      <div className="form-button">
                        <button
                          className="btn main-btn main-btn-arrow"
                          type="submit"
                        >
                          Send A Comment <i className="flaticon-right-arrow" />
                        </button>
                        {/* <div id="msgSubmit"></div> */}
                      </div>
                    </form>
                  </div>
                  {/* Comments */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailHotel;
