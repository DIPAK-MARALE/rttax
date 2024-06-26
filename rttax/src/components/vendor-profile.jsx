/* eslint-disable jsx-a11y/anchor-is-valid */
const React = require("react");

function MainWrapper() {
  return (
    <div className="main-wrapper">
      <div className="header header-one">
        <a
          href="index.html"
          className="d-inline-flex d-sm-inline-flex align-items-center d-md-inline-flex d-lg-none align-items-center device-logo"
        >
          {/* <img
              src="assets/img/logo.png"
              className="img-fluid logo2"
              style={{ width: "116px", height: "30px" }}
              alt="Logo"
            /> */}
        </a>
        <div className="main-logo d-inline float-start d-lg-flex align-items-center d-none d-sm-none d-md-none">
          <div className="logo-white">
            <a href="/admin-dashboard">
              <img
                src="assets/img/taxrx_logo1.png"
                className="img-fluid logo2"
                style={{ width: "200px", height: "90px" }}
                alt="Logo"
              />
            </a>
            <a href="index.html">
              <img
                src="assets/img/logo-small-white.png"
                className="img-fluid logo-small"
                alt="Logo"
              />
            </a>
          </div>
          <div className="logo-color">
            <a href="index.html">
              <img
                src="assets/img/logo.png"
                className="img-fluid logo-blue"
                alt="Logo"
              />
            </a>
            <a href="index.html">
              <img
                src="assets/img/logo-small.png"
                className="img-fluid logo-small"
                alt="Logo"
              />
            </a>
          </div>
        </div>
        <a href="#" id="toggle_btn">
          <span className="toggle-bars">
            <span className="bar-icons" />
            <span className="bar-icons" />
            <span className="bar-icons" />
            <span className="bar-icons" />
          </span>
        </a>
        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <img src="assets/img/icons/search.svg" alt="img" />
            </button>
          </form>
        </div>
        <a className="mobile_btn" id="mobile_btn">
          <i className="fas fa-bars" />
        </a>
        <ul className="nav nav-tabs user-menu">
          <li className="nav-item dropdown has-arrow flag-nav">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              <img src="assets/img/flags/us1.png" alt="flag" />
              <span>English</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a href="#" className="dropdown-item">
                <img src="assets/img/flags/us.png" alt="flag" />
                <span>English</span>
              </a>
              <a href="#" className="dropdown-item">
                <img src="assets/img/flags/fr.png" alt="flag" />
                <span>French</span>
              </a>
              <a href="#" className="dropdown-item">
                <img src="assets/img/flags/es.png" alt="flag" />
                <span>Spanish</span>
              </a>
              <a href="#" className="dropdown-item">
                <img src="assets/img/flags/de.png" alt="flag" />
                <span>German</span>
              </a>
            </div>
          </li>
          <li className="nav-item  has-arrow dropdown-heads ">
            <a href="#" className="toggle-switch">
              <i className="fe fe-moon" />
            </a>
          </li>
          <li className="nav-item dropdown  flag-nav dropdown-heads">
            <a
              className="nav-link"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              <i className="fe fe-bell" />{" "}
              <span className="badge rounded-pill" />
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <div className="notification-title">
                  Notifications <a href="notifications.html">View all</a>
                </div>
                <a href="#" className="clear-noti d-flex align-items-center">
                  Mark all as read <i className="fe fe-check-circle" />
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="profile.html">
                      <div className="d-flex">
                        <span className="avatar avatar-md active">
                          <img
                            className="avatar-img rounded-circle"
                            alt="avatar-img"
                            src="assets/img/profiles/avatar-02.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Lex Murphy</span>{" "}
                            requested access to{" "}
                            <span className="noti-title">
                              UNIX directory tree hierarchy
                            </span>
                          </p>
                          <div className="notification-btn">
                            <span className="btn btn-primary">Accept</span>
                            <span className="btn btn-outline-primary">
                              Reject
                            </span>
                          </div>
                          <p className="noti-time">
                            <span className="notification-time">
                              Today at 9:42 AM
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="profile.html">
                      <div className="d-flex">
                        <span className="avatar avatar-md active">
                          <img
                            className="avatar-img rounded-circle"
                            alt="avatar-img"
                            src="assets/img/profiles/avatar-10.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Ray Arnold</span> left
                            6 comments{" "}
                            <span className="noti-title">
                              on Isla Nublar SOC2 compliance report
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              Yesterday at 11:42 PM
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="profile.html">
                      <div className="d-flex">
                        <span className="avatar avatar-md">
                          <img
                            className="avatar-img rounded-circle"
                            alt="avatar-img"
                            src="assets/img/profiles/avatar-13.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Dennis Nedry</span>{" "}
                            commented on{" "}
                            <span className="noti-title">
                              {" "}
                              Isla Nublar SOC2 compliance report
                            </span>
                          </p>
                          <blockquote>
                            “Oh, I finished de-bugging the phones, but the
                            system's compiling for eighteen minutes, or twenty.
                            So, some minor systems may go on and off for a
                            while.”
                          </blockquote>
                          <p className="noti-time">
                            <span className="notification-time">
                              Yesterday at 5:42 PM
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="profile.html">
                      <div className="d-flex">
                        <span className="avatar avatar-md">
                          <img
                            className="avatar-img rounded-circle"
                            alt="avatar-img"
                            src="assets/img/profiles/avatar-05.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">John Hammond</span>{" "}
                            created{" "}
                            <span className="noti-title">
                              Isla Nublar SOC2 compliance report
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              Last Wednesday at 11:15 AM
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="#">Clear All</a>
              </div>
            </div>
          </li>
          <li className="nav-item  has-arrow dropdown-heads ">
            <a href="#" className="win-maximize">
              <i className="fe fe-maximize" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#"
              className="user-link  nav-link"
              data-bs-toggle="dropdown"
            >
              {/* <span className="user-img">
                <img
                  src="assets/img/profiles/avatar-07.jpg"
                  alt="img"
                  className="profilesidebar"
                />
                <span className="animate-circle" />
              </span>
              <span className="user-content">
                <span className="user-details">Admin</span>
                <span className="user-name">John Smith</span>
              </span> */}
            </a>
            <div className="dropdown-menu menu-drop-user">
              <div className="profilemenu">
                <div className="subscription-menu">
                  <ul>
                    <li>
                      <a className="dropdown-item" href="profile.html">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="settings.html">
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="subscription-logout">
                  <ul>
                    <li className="pb-0">
                      <a className="dropdown-item" href="login.html">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand">
              {/* <a href="index.html">Admin Dashboard</a> */}
            </div>
            <div className="sidebar-header">
              {/* <h5 className="mb-0">Main Navigation</h5> */}
              {/* <span className="mt-0">Build with Greedys</span> */}
              <div className="close-sidebar" data-toggle="left-sidebar-close">
                {/* <i className="fe fe-x"></i> */}
              </div>
            </div>
            <div className="sidebar-menu">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-init="pill"
                id="menu"
              >
                {/* 
                <li className="menu-title">
                  <span>User Management</span>
                </li>
                <li>
                  <a href="users.html">
                    <i className="fe fe-user"></i> <span>Users</span>
                  </a>
                </li>
                <li>
                  <a href="roles-permission.html">
                    <i className="fe fe-clipboard"></i>{" "}
                    <span>Roles & Permission</span>
                  </a>
                </li>
                <li>
                  <a href="delete-account-request.html">
                    <i className="fe fe-trash-2"></i>{" "}
                    <span>Delete Account Request</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Membership</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-book"></i> <span> Membership</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="membership-plans.html">Membership Plans</a>
                    </li>
                    <li>
                      <a href="membership-addons.html">Membership Addons</a>
                    </li>
                    <li>
                      <a href="subscribers.html">Subscribers</a>
                    </li>
                    <li>
                      <a href="transactions.html">Transactions</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Content (CMS)</span>
                </li>
                <li>
                  <a href="pages.html">
                    <i className="fe fe-folder"></i> <span>Pages</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-book"></i> <span> Blog</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="all-blogs.html">All Blogs</a>
                    </li>
                    <li>
                      <a href="categories.html">Categories</a>
                    </li>
                    <li>
                      <a href="blog-comments.html">Blog Comments</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-map-pin"></i> <span> Location</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="countries.html">Countries</a>
                    </li>
                    <li>
                      <a href="states.html">States</a>
                    </li>
                    <li>
                      <a href="cities.html">Cities</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="testimonials.html">
                    <i className="fe fe-message-square"></i>{" "}
                    <span>Testimonials</span>
                  </a>
                </li>
                <li>
                  <a href="faq.html">
                    <i className="fe fe-alert-circle"></i> <span>FAQ</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Support</span>
                </li>
                <li>
                  <a href="contact-messages.html">
                    <i className="fe fe-printer"></i>{" "}
                    <span>Contact Messages</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-save"></i> <span> Tickets</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="tickets.html">Tickets</a>
                    </li>
                    <li>
                      <a href="tickets-list.html">Tickets List</a>
                    </li>
                    <li>
                      <a href="tickets-kanban.html">Tickets Kanban</a>
                    </li>
                    <li>
                      <a href="ticket-details.html">Ticket Overview</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li>
                  <a href="profile.html">
                    <i className="fe fe-user"></i> <span>Profile</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-lock"></i> <span> Authentication </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="login.html"> Login </a>
                    </li>
                    <li>
                      <a href="register.html"> Register </a>
                    </li>
                    <li>
                      <a href="forgot-password.html"> Forgot Password </a>
                    </li>
                    <li>
                      <a href="lock-screen.html"> Lock Screen </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="error-404.html">
                    <i className="fe fe-x-square"></i> <span>Error Pages</span>
                  </a>
                </li>
                <li>
                  <a href="blank-page.html">
                    <i className="fe fe-file"></i> <span>Blank Page</span>
                  </a>
                </li>
                <li>
                  <a href="maps-vector.html">
                    <i className="fe fe-image"></i> <span>Vector Maps</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-pocket"></i> <span>Base UI </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="alerts.html">Alerts</a>
                    </li>
                    <li>
                      <a href="accordions.html">Accordions</a>
                    </li>
                    <li>
                      <a href="avatar.html">Avatar</a>
                    </li>
                    <li>
                      <a href="badges.html">Badges</a>
                    </li>
                    <li>
                      <a href="buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="buttongroup.html">Button Group</a>
                    </li>
                    <li>
                      <a href="breadcrumbs.html">Breadcrumb</a>
                    </li>
                    <li>
                      <a href="cards.html">Cards</a>
                    </li>
                    <li>
                      <a href="carousel.html">Carousel</a>
                    </li>
                    <li>
                      <a href="dropdowns.html">Dropdowns</a>
                    </li>
                    <li>
                      <a href="grid.html">Grid</a>
                    </li>
                    <li>
                      <a href="images.html">Images</a>
                    </li>
                    <li>
                      <a href="lightbox.html">Lightbox</a>
                    </li>
                    <li>
                      <a href="media.html">Media</a>
                    </li>
                    <li>
                      <a href="modal.html">Modals</a>
                    </li>
                    <li>
                      <a href="offcanvas.html">Offcanvas</a>
                    </li>
                    <li>
                      <a href="pagination.html">Pagination</a>
                    </li>
                    <li>
                      <a href="popover.html">Popover</a>
                    </li>
                    <li>
                      <a href="progress.html">Progress Bars</a>
                    </li>
                    <li>
                      <a href="placeholders.html">Placeholders</a>
                    </li>
                    <li>
                      <a href="rangeslider.html">Range Slider</a>
                    </li>
                    <li>
                      <a href="spinners.html">Spinner</a>
                    </li>
                    <li>
                      <a href="sweetalerts.html">Sweet Alerts</a>
                    </li>
                    <li>
                      <a href="tab.html">Tabs</a>
                    </li>
                    <li>
                      <a href="toastr.html">Toasts</a>
                    </li>
                    <li>
                      <a href="tooltip.html">Tooltip</a>
                    </li>
                    <li>
                      <a href="typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="video.html">Video</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-box"></i> <span>Elements </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="ribbon.html">Ribbon</a>
                    </li>
                    <li>
                      <a href="clipboard.html">Clipboard</a>
                    </li>
                    <li>
                      <a href="drag-drop.html">Drag & Drop</a>
                    </li>
                    <li>
                      <a href="rating.html">Rating</a>
                    </li>
                    <li>
                      <a href="text-editor.html">Text Editor</a>
                    </li>
                    <li>
                      <a href="counter.html">Counter</a>
                    </li>
                    <li>
                      <a href="scrollbar.html">Scrollbar</a>
                    </li>
                    <li>
                      <a href="notification.html">Notification</a>
                    </li>
                    <li>
                      <a href="stickynote.html">Sticky Note</a>
                    </li>
                    <li>
                      <a href="timeline.html">Timeline</a>
                    </li>
                    <li>
                      <a href="horizontal-timeline.html">Horizontal Timeline</a>
                    </li>
                    <li>
                      <a href="form-wizard.html">Form Wizard</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-bar-chart"></i> <span> Charts </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="chart-apex.html">Apex Charts</a>
                    </li>
                    <li>
                      <a href="chart-js.html">Chart Js</a>
                    </li>
                    <li>
                      <a href="chart-morris.html">Morris Charts</a>
                    </li>
                    <li>
                      <a href="chart-flot.html">Flot Charts</a>
                    </li>
                    <li>
                      <a href="chart-peity.html">Peity Charts</a>
                    </li>
                    <li>
                      <a href="chart-c3.html">C3 Charts</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-award"></i> <span> Icons </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="icon-fontawesome.html">Fontawesome Icons</a>
                    </li>
                    <li>
                      <a href="icon-feather.html">Feather Icons</a>
                    </li>
                    <li>
                      <a href="icon-ionic.html">Ionic Icons</a>
                    </li>
                    <li>
                      <a href="icon-material.html">Material Icons</a>
                    </li>
                    <li>
                      <a href="icon-pe7.html">Pe7 Icons</a>
                    </li>
                    <li>
                      <a href="icon-simpleline.html">Simpleline Icons</a>
                    </li>
                    <li>
                      <a href="icon-themify.html">Themify Icons</a>
                    </li>
                    <li>
                      <a href="icon-weather.html">Weather Icons</a>
                    </li>
                    <li>
                      <a href="icon-typicon.html">Typicon Icons</a>
                    </li>
                    <li>
                      <a href="icon-flag.html">Flag Icons</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-sidebar"></i> <span> Forms </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="form-basic-inputs.html">Basic Inputs </a>
                    </li>
                    <li>
                      <a href="form-input-groups.html">Input Groups </a>
                    </li>
                    <li>
                      <a href="form-horizontal.html">Horizontal Form </a>
                    </li>
                    <li>
                      <a href="form-vertical.html"> Vertical Form </a>
                    </li>
                    <li>
                      <a href="form-mask.html">Form Mask </a>
                    </li>
                    <li>
                      <a href="form-validation.html">Form Validation </a>
                    </li>
                    <li>
                      <a href="form-select2.html">Form Select2 </a>
                    </li>
                    <li>
                      <a href="form-fileupload.html">File Upload </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-layout"></i> <span> Tables </span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="tables-basic.html">Basic Tables </a>
                    </li>
                    <li>
                      <a href="data-tables.html">Data Table </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Settings</span>
                </li>
                <li>
                  <a href="settings.html" className="active">
                    <i className="fe fe-settings"></i> <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="fe fe-power"></i> <span>Logout</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Extras</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fe fe-file-text"></i>{" "}
                    <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fe fe-lock"></i> <span>Change Log</span>{" "}
                    <span className="badge badge-primary ms-auto">v2.0</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fa fa-list"></i> <span>Multi Level</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul style={{ display: "none" }}>
                    <li className="submenu">
                      <a href="#">
                        {" "}
                        <span>Level 1</span>{" "}
                        <span className="menu-arrow"></span>
                      </a>
                      <ul style={{ display: "none" }} className="level2">
                        <li>
                          <a href="#">
                            <span>Level 2</span>
                          </a>
                        </li>
                        <li className="submenu">
                          <a href="#">
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow"></span>
                          </a>
                          <ul style={{ display: "none" }} className="level3">
                            <li>
                              <a href="#">Level 3</a>
                            </li>
                            <li>
                              <a href="#">Level 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <span>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>Level 1</span>
                      </a>
                    </li>
                  </ul>
                </li>
                */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="page-header">
                    <div className="content-page-header">
                      <h5>Settings</h5>
                    </div>
                  </div>
                  <div className="widget settings-menu mb-0">
                    <ul>
                      <li className="nav-item">
                        <a href="/vendor-profile" className="nav-link active">
                          <i className="fe fe-user"></i>{" "}
                          <span>Account Settings</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/company-settings" className="nav-link">
                          <i className="fe fe-settings"></i>{" "}
                          <span>Company Settings</span>
                        </a>
                      </li>
                      {/* }
                      <li className="nav-item">
                        <a href="invoice-settings.html" className="nav-link">
                          <i className="fe fe-file"></i>{" "}
                          <span>Invoice Settings</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="template-invoice.html" className="nav-link">
                          <i className="fe fe-layers"></i>{" "}
                          <span>Invoice Templates</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="payment-settings.html" className="nav-link">
                          <i className="fe fe-credit-card"></i>{" "}
                          <span>Payment Methods</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="bank-account.html" className="nav-link">
                          <i className="fe fe-aperture"></i>{" "}
                          <span>Bank Settings</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="tax-rats.html" className="nav-link">
                          <i className="fe fe-file-text"></i>{" "}
                          <span>Tax Rates</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="plan-billing.html" className="nav-link">
                          <i className="fe fe-credit-card"></i>{" "}
                          <span>Plan & Billing</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="two-factor.html" className="nav-link">
                          <i className="fe fe-aperture"></i>{" "}
                          <span>Two Factor</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="custom-filed.html" className="nav-link">
                          <i className="fe fe-file-text"></i>{" "}
                          <span>Custom Fields</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="email-settings.html" className="nav-link">
                          <i className="fe fe-mail"></i>{" "}
                          <span>Email Settings</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="preferences.html" className="nav-link">
                          <i className="fe fe-settings"></i>{" "}
                          <span>Preference Settings</span>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="card">
                <div className="card-body w-100">
                  <div className="content-page-header">
                    <h5 className="setting-menu">Account Settings</h5>
                  </div>
                  <div className="row">
                    <div className="profile-picture">
                      <div className="upload-profile me-2">
                        <div className="profile-img">
                          <img
                            id="blah"
                            className="avatar"
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="profile-img"
                          />
                        </div>
                      </div>
                      <div className="img-upload">
                        <label className="btn btn-primary">
                          Upload new picture <input type="file" />
                        </label>
                        <a className="btn btn-remove">Delete</a>
                        <p className="mt-1">
                          Logo Should be minimum 152 * 152 Supported File format
                          JPG,PNG,SVG
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-title">
                        <h5>General Information</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Trade Name / Business Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Trade Name / Business Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>GST No (if available)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter GST No"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-block mb-3">
                        <label>Office Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Office Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>State</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter State"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>State Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter State Code"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Email ID</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email ID"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>PAN No</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter PAN No"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Authorized Signatory Person's Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Authorized Signatory Person's Name"
                        />
                      </div>
                    </div>
                    <div className="form-group-customer customer-additional-form">
                      <div className="row">
                        <h5 className="form-title">Bank Details</h5>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Bank Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Bank Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Branch</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Branch Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Account Holder Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Account Holder Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Account Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Account Number"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                          <div className="input-block mb-3">
                            <label>IFSC</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter IFSC Code"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="btn-path text-end">
                        <a
                          href="#"
                          className="btn btn-cancel bg-primary-light me-3"
                        >
                          Cancel
                        </a>
                        <a href="/user-dashboard" className="btn btn-primary">
                          Save Changes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="" align="center">
        <div className="content container-fluid">
          <div className="card mb-0">
            <div className="card-body">
              <div
                class="elementor-element elementor-element-1942af2 elementor-widget elementor-widget-copyright"
                data-id="1942af2"
                data-element_type="widget"
                data-settings='{"align":"center"}'
                data-widget_type="copyright.default"
              >
                <div class="elementor-widget-container">
                  <div class="hfe-copyright-wrapper">
                    <a href="https://psyber.co/">
                      <span>
                        <b>
                          2024 © All Rights Reserved | Cooked with ❤️ by Psyber
                          Inc
                        </b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="settings-icon">
          <span
            data-bs-toggle="offcanvas"
            data-bs-target="#theme-settings-offcanvas"
            aria-controls="theme-settings-offcanvas"
          >
            <img
              src="assets/img/icons/siderbar-icon2.svg"
              className="feather-five"
              alt="layout"
            />
          </span>
        </div>
        <div
          className="offcanvas offcanvas-end border-0"
          tabIndex="-1"
          id="theme-settings-offcanvas"
        >
          <div className="sidebar-headerset">
            <div className="sidebar-headersets">
              <h2>Customizer</h2>
              <h3>Customize your overview Page layout</h3>
            </div>
            <div className="sidebar-headerclose">
              <a data-bs-dismiss="offcanvas" aria-label="Close">
                <img src="assets/img/close.png" alt="img" />
              </a>
            </div>
          </div>
          <div className="offcanvas-body p-0">
            <div data-simplebar className="h-100">
              <div className="settings-mains">
                <div className="layout-head">
                  <h5>Layout</h5>
                  <h6>Choose your layout</h6>
                </div>
                <div className="row">{/* Code for layout options */}</div>
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="layout-head mb-0">
                    <h5>RTL Mode</h5>
                    <h6>Change Language Direction.</h6>
                  </div>
                  <div className="active-switch">
                    <div className="status-toggle">
                      <input id="rtl" className="check" type="checkbox" />
                      <label htmlFor="rtl" className="checktoggle checkbox-bg">
                        checkbox
                      </label>
                    </div>
                  </div>
                </div>
                {/* Code for color scheme */}
                <div className="layout-head pt-3">
                  <h5>Topbar Color</h5>
                  <h6>Choose Light or Dark Topbar Color.</h6>
                </div>
                {/* Code for topbar color options */}
                <div id="sidebar-size">
                  {/* Code for sidebar size options */}
                </div>
                <div id="sidebar-view">
                  {/* Code for sidebar view options */}
                </div>
                <div id="sidebar-color">
                  {/* Code for sidebar color options */}
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-footer border-top p-3 text-center">
            <div className="row">
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-light w-100 bor-rad-50"
                  id="reset-layout"
                >
                  Reset
                </button>
              </div>
              <div className="col-6">
                <a
                  href="https://themeforest.net/item/smarthr-bootstrap-admin-panel-template/21153150"
                  target="_blank"
                  className="btn btn-primary w-100 bor-rad-50"
                  rel="noreferrer"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainWrapper;
