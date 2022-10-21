const Nav = () => {
  return (
    <header className="inner-page-header inner-page-header-1">
      <div className="inner-header-shape" />
      {/* header-content */}
      <div className="container">
        <div className="header-content m-auto">
          <h1>Rome</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="destination.html">Destination</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Rome
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
