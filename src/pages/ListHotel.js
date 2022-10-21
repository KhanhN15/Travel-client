import Header from "../component/Header";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
const ListHotel = () => {
  return (
    <>
      <Header />
      <Nav />

      <section className="destination-section pt-100 pb-70 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 pb-30">
              <div className="sidebar-item sidebar-search">
                <form>
                  <div className="form-input-group">
                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control"
                    />
                    <button type="submit">
                      <i className="flaticon-searching" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="sidebar-item">
                <h3>Tìm Kiếm</h3>
                <div className="form-group  mb-10">
                  <label>Điểm Đến </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control form-control-background-white"
                    required
                    placeholder="Điểm đến"
                  />
                </div>
                <div className="form-group mb-10">
                  <label>Ngày Nhận Trả Phòng</label>
                  <input
                    type="date"
                    name="email"
                    className="form-control form-control-background-white"
                    required
                    placeholder="Ngày Nhận Phòng"
                  />
                </div>
                <div className="form-group mb-10">
                  <label>Giá</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control form-control-background-white"
                    required
                    placeholder="First Name"
                  />
                </div>
                <div className="guest-popup-ok">
                  <div className="guest-popup-item">
                    <div className="guest-popup-label">
                      <h4>Người lớn</h4>
                      <p>Từ 18 tuổi trở lên</p>
                    </div>
                    <div className="guest-popup-counter">
                      <button className="counter-btn counter-dec">-</button>
                      <input
                        type="text"
                        className="counter-input border-none"
                        defaultValue={0}
                      />
                      <button className="counter-btn counter-inc">+</button>
                    </div>
                  </div>
                  <div className="guest-popup-item">
                    <div className="guest-popup-label">
                      <h4>Trẻ em</h4>
                      <p>Dưới 18 tuổi</p>
                    </div>
                    <div className="guest-popup-counter">
                      <button className="counter-btn counter-dec">-</button>
                      <input
                        type="text"
                        className="counter-input border-none"
                        defaultValue={0}
                      />
                      <button className="counter-btn counter-inc">+</button>
                    </div>
                  </div>
                </div>
                <button class="btn main-btn main-btn-arrow load-more-btn btn-search-detail">
                  Tìm Kiếm <i className="flaticon-searching"></i>
                </button>
              </div>
              <div className="sidebar-item">
                <h3>Xếp Hạng Theo Sao</h3>
                <ul className="sidebar-tag">
                  <li>
                    <div className="input-checkbox mb-20">
                      <input type="checkbox" id="check2" />
                      <label htmlFor="check2" className="weight-600">
                        <i className="fas fa-star color-yellow"></i>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="input-checkbox mb-20">
                      <input type="checkbox" id="check2" />
                      <label htmlFor="check2" className="weight-600">
                        <i className="fas fa-star color-yellow"></i>
                        <i className="fas fa-star color-yellow"></i>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="input-checkbox mb-20">
                      <input type="checkbox" id="check2" />
                      <label htmlFor="check2" className="weight-600">
                        <i className="fas fa-star color-yellow"></i>
                        <i className="fas fa-star color-yellow"></i>
                        <i className="fas fa-star color-yellow"></i>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="input-checkbox mb-20">
                      <input type="checkbox" id="check2" />
                      <label htmlFor="check2" className="weight-600">
                        <i className="fas fa-star color-yellow"></i>
                        <i className="fas fa-star color-yellow"></i>
                        <i className="fas fa-star color-yellow"></i>
                        <i className="fas fa-star color-yellow"></i>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="input-checkbox mb-20">
                      <input type="checkbox" id="check2" />
                      <label htmlFor="check2" className="weight-600">
                        <i className="fas fa-star color-yellow"></i>
                        <i className="fas fa-star color-yellow"></i>
                        <i className="fas fa-star color-yellow"></i>
                        <i className="fas fa-star color-yellow"></i>
                        <i className="fas fa-star color-yellow"></i>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="input-checkbox mb-20">
                      <input type="checkbox" id="check2" />
                      <label htmlFor="check2" className="weight-600">
                        Không có đánh giá
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 pb-30 desk-pad-right-20">
              <div className="search-top">
                <h6 className="d-inline">Đà Nẵng :</h6>
                <span className="d-inline-search">tìm thấy 2020</span>
              </div>
              <div className="card">
                <div className="card-item">
                  <div className="img-feature">
                    <img
                      className="img-hotel"
                      src="assets/images/destinations/destination-12.jpg"
                      alt=""
                    />
                  </div>
                  <div className="inf-feature">
                    <div className="container">
                      <div className="row">
                        <div className="wrap-item">
                          <h3 className="name-title">
                            <a href="single-blog.html">
                              Hidden gems you must visit while exploring Greece{" "}
                            </a>
                          </h3>
                          <p className="des-here">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat.
                          </p>
                          <div className="rate">
                            <div className="rev">564 rate</div>
                            <div className="point">8.6</div>
                          </div>
                        </div>
                      </div>
                      <div className="row total-price">
                        <div className="chu-y">
                          <b className="color-green">
                            Miễn phí hủy phòng, không cần thanh toán trước
                          </b>
                          <p>
                            Bạn có thể hủy sau, nên hãy đặt giá ngay hôm nay
                          </p>
                        </div>
                        <div className="pr">
                          <div className="price-hotel">234.000 VND</div>
                          <button class="btn main-btn main-btn-arrow load-more-btn">
                            Chi tiết <i class="flaticon-right-arrow"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-item">
                  <div className="img-feature">
                    <img
                      className="img-hotel"
                      src="assets/images/destinations/destination-12.jpg"
                      alt=""
                    />
                  </div>
                  <div className="inf-feature">
                    <div className="container">
                      <div className="row">
                        <div className="wrap-item">
                          <h3 className="name-title">
                            <a href="single-blog.html">
                              Hidden gems you must visit while exploring Greece{" "}
                            </a>
                          </h3>
                          <p className="des-here">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat.
                          </p>
                          <div className="rate">
                            <div className="rev">564 rate</div>
                            <div className="point">8.6</div>
                          </div>
                        </div>
                      </div>
                      <div className="row total-price">
                        <div className="chu-y">
                          <b className="color-green">
                            Miễn phí hủy phòng, không cần thanh toán trước
                          </b>
                          <p>
                            Bạn có thể hủy sau, nên hãy đặt giá ngay hôm nay
                          </p>
                        </div>
                        <div className="pr">
                          <div className="price-hotel">234.000 VND</div>
                          <button class="btn main-btn main-btn-arrow load-more-btn">
                            Chi tiết <i class="flaticon-right-arrow"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-item">
                  <div className="img-feature">
                    <img
                      className="img-hotel"
                      src="assets/images/destinations/destination-12.jpg"
                      alt=""
                    />
                  </div>
                  <div className="inf-feature">
                    <div className="container">
                      <div className="row">
                        <div className="wrap-item">
                          <h3 className="name-title">
                            <a href="single-blog.html">
                              Hidden gems you must visit while exploring Greece{" "}
                            </a>
                          </h3>
                          <p className="des-here">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat.
                          </p>
                          <div className="rate">
                            <div className="rev">564 rate</div>
                            <div className="point">8.6</div>
                          </div>
                        </div>
                      </div>
                      <div className="row total-price">
                        <div className="chu-y">
                          <b className="color-green">
                            Miễn phí hủy phòng, không cần thanh toán trước
                          </b>
                          <p>
                            Bạn có thể hủy sau, nên hãy đặt giá ngay hôm nay
                          </p>
                        </div>
                        <div className="pr">
                          <div className="price-hotel">234.000 VND</div>
                          <button class="btn main-btn main-btn-arrow load-more-btn">
                            Chi tiết <i class="flaticon-right-arrow"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a
                      className="page-link"
                      href="destination.html"
                      aria-label="Previous"
                    >
                      <i className="flaticon-left-chevron" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="destination.html">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="destination.html">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="destination.html">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="destination.html"
                      aria-label="Next"
                    >
                      <i
                        className="flaticon-right-arrow-angle"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default ListHotel;
