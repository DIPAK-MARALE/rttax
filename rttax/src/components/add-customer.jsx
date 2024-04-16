/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function AddCustomer() {
  return (
    <div className="main-wrapper">
      <div className="header header-one">
        <a
          href="index.html"
          className="d-inline-flex d-sm-inline-flex align-items-center d-md-inline-flex d-lg-none align-items-center device-logo"
        >
          <img
            src="assets/img/logo.png"
            className="img-fluid logo2"
            alt="Logo"
          />
        </a>
        <div className="main-logo d-inline float-start d-lg-flex align-items-center d-none d-sm-none d-md-none">
          <div className="logo-white">
            <a href="index.html">
              <img
                src="assets/img/logo-full-white.png"
                className="img-fluid logo-blue"
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
            <span className="bar-icons"></span>
            <span className="bar-icons"></span>
            <span className="bar-icons"></span>
            <span className="bar-icons"></span>
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
          <i className="fas fa-bars"></i>
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
            <div className="dropdown-menu dropdown-menu-right">
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
              <i className="fe fe-moon"></i>
            </a>
          </li>
          <li className="nav-item dropdown  flag-nav dropdown-heads">
            <a
              className="nav-link"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              <i className="fe fe-bell"></i>{" "}
              <span className="badge rounded-pill"></span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <div className="notification-title">
                  Notifications <a href="notifications.html">View all</a>
                </div>
                <a href="#" className="clear-noti d-flex align-items-center">
                  Mark all as read
                  <i className="fe fe-check-circle"></i>
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
                            <span className="noti-title">Lex Murphy</span>
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
                            <span className="noti-title">Dennis Nedry</span>
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
                            <span className="noti-title">John Hammond</span>
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
              <i className="fe fe-maximize"></i>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#"
              className="user-link  nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  src="assets/img/profiles/avatar-20.jpg"
                  alt="img"
                  className="profilesidebar"
                />
                <span className="animate-circle"></span>
              </span>
              <span className="user-content">
                <span className="user-details">Admin</span>
                <span className="user-name">John Smith</span>
              </span>
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

      {/* <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <nav className="greedys sidebar-horizantal">
                            <ul className="list-inline-item list-unstyled links">
                                <li className="menu-title"><span>Main</span></li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-home"></i> <span> Dashboard</span> <span
                                        className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="index.html">Admin Dashboard</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-grid"></i> <span> Applications</span> <span
                                        className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="chat.html">Chat</a></li>
                                        <li><a href="calendar.html">Calendar</a></li>
                                        <li><a href="inbox.html">Email</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-user"></i> <span> Super Admin</span> <span
                                        className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="companies.html">Companies</a></li>
                                        <li><a href="subscription.html">Subscription</a></li>
                                        <li><a href="packages.html">Packages</a></li>
                                        <li><a href="domain-request.html">Domain Request</a></li>
                                        <li><a href="domain.html">Domain</a></li>
                                        <li><a href="purchase-transaction.html">Purchase Transaction</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-users"></i><span>Customers</span> <span
                                        className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="customers.html" className="active"><i className="fe fe-users"></i>
                                            <span>Customers</span></a></li>
                                        <li>
                                            <a href="customer-details.html"><i className="fe fe-file"></i> <span>Customer
                                                Details</span></a>
                                        </li>
                                        <li>
                                            <a href="vendors.html"><i className="fe fe-user"></i> <span>Vendors</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title"><span>Inventory</span></li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-package"></i> <span> Products / Services</span> <span
                                        className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="product-list.html">Product List</a></li>
                                        <li><a href="category.html">Category</a></li>
                                        <li><a href="units.html">Units</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="inventory.html"><i className="fe fe-user"></i> <span>Inventory</span></a>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-file-plus"></i><span>Signature</span> <span
                                        className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="signature-list.html"><i className="fe fe-clipboard"></i> <span>List of
                                            Signature</span></a></li>
                                        <li><a href="signature-invoice.html"><i className="fe fe-box"></i> <span>Signature
                                            Invoice</span></a></li>
                                    </ul>
                                </li>
                                <li className="menu-title"><span>Sales</span></li>
                                <li className="submenu">
                                    <a href="invoices.html"><i className="fe fe-file"></i> <span>Invoices</span><span
                                        className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="invoices.html">Invoices List</a></li>
                                        <li><a href="invoice-details-admin.html">Invoice Details (Admin)</a></li>
                                        <li><a href="invoice-details.html">Invoice Details (Customer)</a></li>
                                        <li><a href="invoice-template.html">Invoice Templates</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <button className="viewmoremenu">More Menu</button>
                            <ul className="hidden-links hidden" />
                            <li>
                                <a href="recurring-invoices.html"><i className="fe fe-clipboard"></i> <span>Recurring
                                    Invoices</span></a>
                            </li>
                            <li>
                                <a href="credit-notes.html"><i className="fe fe-edit"></i> <span>Credit Notes</span></a>
                            </li>
                            <li className="menu-title"><span>Purchases</span></li>
                            <li>
                                <a href="purchases.html"><i className="fe fe-shopping-cart"></i> <span>Purchases</span></a>
                            </li>
                            <li>
                                <a href="purchase-orders.html"><i className="fe fe-shopping-bag"></i> <span>Purchase
                                    Orders</span></a>
                            </li>
                            <li>
                                <a href="debit-notes.html"><i className="fe fe-file-text"></i> <span>Debit Notes</span></a>
                            </li>
                            <li className="menu-title"><span>Finance & Accounts</span></li>
                            <li>
                                <a href="expenses.html"><i className="fe fe-file-plus"></i> <span>Expenses</span></a>
                            </li>
                            <li>
                                <a href="payments.html"><i className="fe fe-credit-card"></i> <span>Payments</span></a>
                            </li>
                            <li className="menu-title"><span>Quotations</span></li>
                            <li>
                                <a href="quotations.html"><i className="fe fe-clipboard"></i> <span>Quotations</span></a>
                            </li>
                            <li>
                                <a href="delivery-challans.html"><i className="fe fe-file-text"></i> <span>Delivery
                                    Challans</span></a>
                            </li>
                            <li className="menu-title"><span>Reports</span></li>
                            <li>
                                <a href="payment-summary.html"><i className="fe fe-credit-card"></i> <span>Payment
                                    Summary</span></a>
                            </li>
                            <li className="menu-title"><span>Reports</span></li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-box"></i><span>Reports</span> <span
                                    className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="expense-report.html">Expense Report</a></li>
                                    <li><a href="purchase-report.html">Purchase Report</a></li>
                                    <li><a href="purchase-return.html">Purchase Return Report</a></li>
                                    <li><a href="sales-report.html">Sales Report</a></li>
                                    <li><a href="sales-return-report.html">Sales Return Report</a></li>
                                    <li><a href="quotation-report.html">Quotation Report</a></li>
                                    <li><a href="payment-report-2.html">Payment Report</a></li>
                                    <li><a href="stock-report.html">Stock Report</a></li>
                                    <li><a href="low-stock-report.html">Low Stock Report</a></li>
                                    <li><a href="income-report.html">Income Report</a></li>
                                    <li><a href="tax-purchase.html">Tax Report</a></li>
                                    <li><a href="profit-loss-list.html">Profit & Loss</a></li>
                                </ul>
                            </li>
                        </nav>
                    </div>
                </div>
            </div> */}
      {/* <li className="menu-title"><span>User Management</span></li>
            <li>
                <a href="users.html"><i className="fe fe-user"></i> <span>Users</span></a>
            </li>
            <li>
                <a href="roles-permission.html"><i className="fe fe-clipboard"></i> <span>Roles & Permission</span></a>
            </li>
            <li>
                <a href="delete-account-request.html"><i className="fe fe-trash-2"></i> <span>Delete Account Request</span></a>
            </li>
            <li className="menu-title"><span>Membership</span></li>
            <li className="submenu">
                <a href="#"><i className="fe fe-book"></i> <span> Membership</span> <span className="menu-arrow"></span></a>
                <ul>
                    <li><a href="membership-plans.html">Membership Plans</a></li>
                    <li><a href="membership-addons.html">Membership Addons</a></li>
                    <li><a href="subscribers.html">Subscribers</a></li>
                    <li><a href="transactions.html">Transactions</a></li>
                </ul>
            </li>
            <li className="menu-title"><span>Content (CMS)</span></li>
            <li>
                <a href="pages.html"><i className="fe fe-folder"></i> <span>Pages</span></a>
            </li>
            <li className="submenu">
                <a href="#"><i className="fe fe-book"></i> <span> Blog</span> <span className="menu-arrow"></span></a>
                <ul>
                    <li><a href="all-blogs.html">All Blogs</a></li>
                    <li><a href="categories.html">Categories</a></li>
                    <li><a href="blog-comments.html">Blog Comments</a></li>
                </ul>
            </li>
            <li className="submenu">
                <a href="#"><i className="fe fe-map-pin"></i> <span> Location</span> <span className="menu-arrow"></span></a>
                <ul>
                    <li><a href="countries.html">Countries</a></li>
                    <li><a href="states.html">States</a></li>
                    <li><a href="cities.html">Cities</a></li>
                </ul>
            </li>
            <li>
                <a href="testimonials.html"><i className="fe fe-message-square"></i>
                    <span>Testimonials</span></a>
            </li>
            <li>
                <a href="faq.html"><i className="fe fe-alert-circle"></i> <span>FAQ</span></a>
            </li>
            <li className="menu-title"><span>Support</span></li>
            <li>
                <a href="contact-messages.html"><i className="fe fe-printer"></i> <span>Contact Messages</span></a>
            </li>
            <li className="submenu">
                <a href="#"><i className="fe fe-save"></i> <span> Tickets</span> <span className="menu-arrow"></span></a>
                <ul>
                    <li><a href="tickets.html">Tickets</a></li>
                    <li><a href="tickets-list.html">Tickets List</a></li>
                    <li><a href="tickets-kanban.html">Tickets Kanban</a></li>
                    <li><a href="ticket-details.html">Ticket Overview</a></li>
                </ul>
            </li>
            <li className="menu-title"><span>Pages</span></li>
            <li>
                <a href="profile.html"><i className="fe fe-user"></i> <span>Profile</span></a>
            </li>
            <li className="submenu">
                <a href="#"><i className="fe fe-lock"></i> <span> Authentication </span> <span className="menu-arrow"></span></a>
                <ul>
                    <li><a href="login.html"> Login </a></li>
                    <li><a href="register.html"> Register </a></li>
                    <li><a href="forgot-password.html"> Forgot Password </a></li>
                    <li><a href="lock-screen.html"> Lock Screen </a></li>
                </ul>
            </li>
            <li>
                <a href="error-404.html"><i className="fe fe-x-square"></i> <span>Error Pages</span></a>
            </li>
            <li>
                <a href="blank-page.html"><i className="fe fe-file"></i> <span>Blank Page</span></a>
            </li>
            <li>
                <a href="maps-vector.html"><i className="fe fe-image"></i> <span>Vector Maps</span></a>
            </li>
            <li className="menu-title">
                <span>UI Interface</span>
            </li>
            <li className="submenu">
                <a href="#"><i className="fe fe-pocket"></i> <span>Base UI </span> <span className="menu-arrow"></span></a>
                <ul>
                    <li><a href="alerts.html">Alerts</a></li>
                    <li><a href="accordions.html">Accordions</a></li>
                    <li><a href="avatar.html">Avatar</a></li>
                    <li><a href="badges.html">Badges</a></li>
                    <li><a href="buttons.html">Buttons</a></li>
                    <li><a href="buttongroup.html">Button Group</a></li>
                    <li><a href="breadcrumbs.html">Breadcrumb</a></li>
                    <li><a href="cards.html">Cards</a></li>
                    <li><a href="carousel.html">Carousel</a></li>
                    <li><a href="dropdowns.html">Dropdowns</a></li>
                    <li><a href="grid.html">Grid</a></li>
                    <li><a href="images.html">Images</a></li>
                    <li><a href="lightbox.html">Lightbox</a></li>
                    <li><a href="media.html">Media</a></li>
                    <li><a href="modal.html">Modals</a></li>
                    <li><a href="offcanvas.html">Offcanvas</a></li>
                    <li><a href="pagination.html">Pagination</a></li>
                    <li><a href="popover.html">Popover</a></li>
                    <li><a href="progress.html">Progress Bars</a></li>
                    <li><a href="placeholders.html">Placeholders</a></li>
                    <li><a href="rangeslider.html">Range Slider</a></li>
                    <li><a href="spinners.html">Spinner</a></li>
                    <li><a href="sweetalerts.html">Sweet Alerts</a></li>
                    <li><a href="tab.html">Tabs</a></li>
                    <li><a href="toastr.html">Toasts</a></li>
                    <li><a href="tooltip.html">Tooltip</a></li>
                    <li><a href="typography.html">Typography</a></li>
                    <li><a href="video.html">Video</a></li>
                </ul>
            </li>
            <li className="submenu">
                <a href="#"><i className="fe fe-box"></i> <span>Elements </span> <span className="menu-arrow"></span></a>
                <ul>
                    <li><a href="ribbon.html">Ribbon</a></li>
                    <li><a href="clipboard.html">Clipboard</a></li>
                    <li><a href="drag-drop.html">Drag & Drop</a></li>
                    <li><a href="rating.html">Rating</a></li>
                    <li><a href="text-editor.html">Text Editor</a></li>
                    <li><a href="counter.html">Counter</a></li>
                    <li><a href="scrollbar.html">Scrollbar</a></li>
                    <li><a href="notification.html">Notification</a></li>
                    <li><a href="stickynote.html">Sticky Note</a></li>
                    <li><a href="timeline.html">Timeline</a></li>
                    <li><a href="horizontal-timeline.html">Horizontal Timeline</a></li>
                    <li><a href="form-wizard.html">Form Wizard</a></li>
                </ul>
            </li> */}
      {/* <div className="sidebar" id="sidebar"/>
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu"/>
                        <nav className="greedys sidebar-horizantal"/>
                            <ul className="list-inline-item list-unstyled links"/>
                                <li className="menu-title"><span>Main</span></li>
                                <li className="submenu"/>
                                    <a href="#"><i className="fe fe-home"></i> <span> Dashboard</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="index.html">Admin Dashboard</a></li>
                                    </ul>  */}

      {/*</li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-grid"></i> <span> Applications</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="chat.html">Chat</a></li>
                                        <li><a href="calendar.html">Calendar</a></li>
                                        <li><a href="inbox.html">Email</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-user"></i> <span> Super Admin</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="companies.html">Companies</a></li>
                                        <li><a href="subscription.html">Subscription</a></li>
                                        <li><a href="packages.html">Packages</a></li>
                                        <li><a href="domain-request.html">Domain Request</a></li>
                                        <li><a href="domain.html">Domain</a></li>
                                        <li><a href="purchase-transaction.html">Purchase Transaction</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-users"></i><span>Customers</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="customers.html" className="active"><i className="fe fe-users"></i> <span>Customers</span></a></li>
                                        <li>
                                            <a href="customer-details.html"><i className="fe fe-file"></i> <span>Customer Details</span></a>
                                        </li>
                                        <li>
                                            <a href="vendors.html"><i className="fe fe-user"></i> <span>Vendors</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title"><span>Inventory</span></li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-package"></i> <span> Products / Services</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="product-list.html">Product List</a></li>
                                        <li><a href="category.html">Category</a></li>
                                        <li><a href="units.html">Units</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="inventory.html"><i className="fe fe-user"></i> <span>Inventory</span></a>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-file-plus"></i><span>Signature</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="signature-list.html"><i className="fe fe-clipboard"></i> <span>List of Signature</span></a></li>
                                        <li><a href="signature-invoice.html"><i className="fe fe-box"></i> <span>Signature Invoice</span></a></li>
                                    </ul>
                                </li>
                                <li className="menu-title"><span>Sales</span></li>
                                <li className="submenu">
                                    <a href="invoices.html"><i className="fe fe-file"></i> <span>Invoices</span><span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="invoices.html">Invoices List</a></li>
                                        <li><a href="invoice-details-admin.html">Invoice Details (Admin)</a></li>
                                        <li><a href="invoice-details.html">Invoice Details (Customer)</a></li>
                                        <li><a href="invoice-template.html">Invoice Templates</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <button className="viewmoremenu">More Menu</button>
                            <ul className="hidden-links hidden">
                                <li>
                                    <a href="recurring-invoices.html"><i className="fe fe-clipboard"></i> <span>Recurring Invoices</span></a>
                                </li>
                                <li>
                                    <a href="credit-notes.html"><i className="fe fe-edit"></i> <span>Credit Notes</span></a>
                                </li>
                                <li className="menu-title"><span>Purchases</span></li>
                                <li>
                                    <a href="purchases.html"><i className="fe fe-shopping-cart"></i> <span>Purchases</span></a>
                                </li>
                                <li>
                                    <a href="purchase-orders.html"><i className="fe fe-shopping-bag"></i> <span>Purchase Orders</span></a>
                                </li>
                                <li>
                                    <a href="debit-notes.html"><i className="fe fe-file-text"></i> <span>Debit Notes</span></a>
                                </li>
                                <li className="menu-title"><span>Finance & Accounts</span></li>
                                <li>
                                    <a href="expenses.html"><i className="fe fe-file-plus"></i> <span>Expenses</span></a>
                                </li>
                                <li>
                                    <a href="payments.html"><i className="fe fe-credit-card"></i> <span>Payments</span></a>
                                </li>
                                <li className="menu-title"><span>Quotations</span></li>
                                <li>
                                    <a href="quotations.html"><i className="fe fe-clipboard"></i> <span>Quotations</span></a>
                                </li>
                                <li>
                                    <a href="delivery-challans.html"><i className="fe fe-file-text"></i> <span>Delivery Challans</span></a>
                                </li>
                                <li className="menu-title"><span>Reports</span></li>
                                <li>
                                    <a href="payment-summary.html"><i className="fe fe-credit-card"></i> <span>Payment Summary</span></a>
                                </li>
                                <li className="menu-title"><span>Reports</span></li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-box"></i><span>Reports</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="expense-report.html">Expense Report</a></li>
                                        <li><a href="invoice-report.html">Invoice Report</a></li>
                                        <li><a href="payment-report.html">Payment Report</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-file-text"></i><span> Quotation Reports</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="quotation-report.html">Quotation Report</a></li>
                                        <li><a href="quotation-invoice-report.html">Quotation Invoice Report</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-file-text"></i><span> Sales Reports</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="sales-report.html">Sales Report</a></li>
                                        <li><a href="delivery-report.html">Delivery Report</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fe fe-file-text"></i><span> Purchase Reports</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="purchase-report.html">Purchase Report</a></li>
                                        <li><a href="purchase-invoice-report.html">Purchase Invoice Report</a></li>
                                    </ul>
                                </li>
                                <li className="menu-title"><span>Settings</span></li>
                                <li>
                                    <a href="settings.html"><i className="fe fe-settings"></i> <span>Settings</span></a>
                                </li>
                                <li className="menu-title">
                                    <span>Extras</span>
                                </li>
                                <li>
                                    <a href="#"><i className="fe fe-file-text"></i> <span>Documentation</span></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fe fe-lock"></i> <span>Change Log</span> <span className="badge badge-primary ms-auto">v2.0</span></a>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fa fa-list"></i> <span>Multi Level</span> <span className="menu-arrow"></span></a>
                                    <ul style={{ display: "none" }}>
                                        <li className="submenu">
                                            <a href="#"> <span>Level 1</span> <span className="menu-arrow"></span></a>
                                            <ul style={{ display: "none" }} className="level2">
                                                <li><a href="#"><span>Level 2</span></a></li>
                                                <li className="submenu">
                                                    <a href="#"> <span> Level 2</span> <span className="menu-arrow"></span></a>
                                                    <ul style={{ display: "none" }} className="level3">
                                                        <li><a href="#">Level 3</a></li>
                                                        <li><a href="#">Level 3</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#"> <span>Level 2</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#"> <span>Level 1</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="login.html"><i className="fe fe-power"></i> <span>Logout</span></a>
                                </li>
                            </ul>
                        </nav>
                        <ul className="sidebar-vertical">
                            <li className="menu-title"><span>Main</span></li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-home"></i> <span> Dashboard</span> <span className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="index.html">Admin Dashboard</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-grid"></i> <span> Applications</span> <span className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="chat.html">Chat</a></li>
                                    <li><a href="calendar.html">Calendar</a></li>
                                    <li><a href="inbox.html">Email</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-user"></i> <span> Super Admin</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="companies.html">Companies</a></li>
                                    <li><a href="subscription.html">Subscription</a></li>
                                    <li><a href="packages.html">Packages</a></li>
                                    <li><a href="domain-request.html">Domain Request</a></li>
                                    <li><a href="domain.html">Domain</a></li>
                                    <li><a href="purchase-transaction.html">Purchase Transaction</a></li>
                                </ul>
                            </li>
                            <li className="menu-title"><span>Customers</span></li>
                            <li>
                                <a href="customers.html" className="active"><i className="fe fe-users"></i> <span>Customers</span></a>
                            </li>
                            <li>
                                <a href="customer-details.html"><i className="fe fe-file"></i> <span>Customer Details</span></a>
                            </li>
                            <li>
                                <a href="vendors.html"><i className="fe fe-user"></i> <span>Vendors</span></a>
                            </li>
                            <li className="menu-title"><span>Inventory</span></li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-package"></i> <span> Products / Services</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="product-list.html">Product List</a></li>
                                    <li><a href="category.html">Category</a></li>
                                    <li><a href="units.html">Units</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="inventory.html"><i className="fe fe-user"></i> <span>Inventory</span></a>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-file-plus"></i><span>Signature</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="signature-list.html"><i className="fe fe-clipboard"></i> <span>List of Signature</span></a></li>
                                    <li><a href="signature-invoice.html"><i className="fe fe-box"></i> <span>Signature Invoice</span></a></li>
                                </ul>
                            </li>
                            <li className="menu-title"><span>Sales</span></li>
                            <li className="submenu">
                                <a href="invoices.html"><i className="fe fe-file"></i> <span>Invoices</span><span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="invoices.html">Invoices List</a></li>
                                    <li><a href="invoice-details-admin.html">Invoice Details (Admin)</a></li>
                                    <li><a href="invoice-details.html">Invoice Details (Customer)</a></li>
                                    <li><a href="invoice-template.html">Invoice Templates</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="viewmoremenu">More Menu</button>
                        <ul className="hidden-links hidden">
                            <li>
                                <a href="recurring-invoices.html"><i className="fe fe-clipboard"></i> <span>Recurring Invoices</span></a>
                            </li>
                            <li>
                                <a href="credit-notes.html"><i className="fe fe-edit"></i> <span>Credit Notes</span></a>
                            </li>
                            <li className="menu-title"><span>Purchases</span></li>
                            <li>
                                <a href="purchases.html"><i className="fe fe-shopping-cart"></i> <span>Purchases</span></a>
                            </li>
                            <li>
                                <a href="purchase-orders.html"><i className="fe fe-shopping-bag"></i> <span>Purchase Orders</span></a>
                            </li>
                            <li>
                                <a href="debit-notes.html"><i className="fe fe-file-text"></i> <span>Debit Notes</span></a>
                            </li>
                            <li className="menu-title"><span>Finance & Accounts</span></li>
                            <li>
                                <a href="expenses.html"><i className="fe fe-file-plus"></i> <span>Expenses</span></a>
                            </li>
                            <li>
                                <a href="payments.html"><i className="fe fe-credit-card"></i> <span>Payments</span></a>
                            </li>
                            <li className="menu-title"><span>Quotations</span></li>
                            <li>
                                <a href="quotations.html"><i className="fe fe-clipboard"></i> <span>Quotations</span></a>
                            </li>
                            <li>
                                <a href="delivery-challans.html"><i className="fe fe-file-text"></i> <span>Delivery Challans</span></a>
                            </li>
                            <li className="menu-title"><span>Reports</span></li>
                            <li>
                                <a href="payment-summary.html"><i className="fe fe-credit-card"></i> <span>Payment Summary</span></a>
                            </li>
                            <li className="menu-title"><span>Reports</span></li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-box"></i><span>Reports</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="expense-report.html">Expense Report</a></li>
                                    <li><a href="invoice-report.html">Invoice Report</a></li>
                                    <li><a href="payment-report.html">Payment Report</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-file-text"></i><span> Quotation Reports</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="quotation-report.html">Quotation Report</a></li>
                                    <li><a href="quotation-invoice-report.html">Quotation Invoice Report</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-file-text"></i><span> Sales Reports</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="sales-report.html">Sales Report</a></li>
                                    <li><a href="delivery-report.html">Delivery Report</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-file-text"></i><span> Purchase Reports</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="purchase-report.html">Purchase Report</a></li>
                                    <li><a href="purchase-invoice-report.html">Purchase Invoice Report</a></li>
                                </ul>
                            </li>
                            <li className="menu-title"><span>Settings</span></li>
                            <li>
                                <a href="settings.html"><i className="fe fe-settings"></i> <span>Settings</span></a>
                            </li>
                            <li className="menu-title">
                                <span>Extras</span>
                            </li>
                            <li>
                                <a href="#"><i className="fe fe-file-text"></i> <span>Documentation</span></a>
                            </li>
                            <li>
                                <a href="#"><i className="fe fe-lock"></i> <span>Change Log</span> <span className="badge badge-primary ms-auto">v2.0</span></a>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fa fa-list"></i> <span>Multi Level</span> <span className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li className="submenu">
                                        <a href="#"> <span>Level 1</span> <span className="menu-arrow"></span></a>
                                        <ul style={{ display: "none" }} className="level2">
                                            <li><a href="#"><span>Level 2</span></a></li>
                                            <li className="submenu">
                                                <a href="#"> <span> Level 2</span> <span className="menu-arrow"></span></a>
                                                <ul style={{ display: "none" }} className="level3">
                                                    <li><a href="#">Level 3</a></li>
                                                    <li><a href="#">Level 3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#"> <span>Level 2</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#"> <span>Level 1</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="login.html"><i className="fe fe-power"></i> <span>Logout</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="menu-title"><span>Inventory</span></li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-package"></i> <span> Products / Services</span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="product-list.html">Product List</a></li>
                                    <li><a href="category.html">Category</a></li>
                                    <li><a href="units.html">Units</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="inventory.html"><i className="fe fe-user"></i> <span>Inventory</span></a>
                            </li>


                            <li className="menu-title"> <span>Signature</span></li>
                            <li>
                                <a href="signature-list.html"><i className="fe fe-clipboard"></i> <span>List of
                                    Signature</span></a>
                                <a href="signature-invoice.html"><i className="fe fe-box"></i> <span>Signature
                                    Invoice</span></a>
                            </li>


                            <li className="menu-title"><span>Sales</span></li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-file"></i> <span>Invoices</span><span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="invoices.html">Invoices List</a></li>
                                    <li><a href="invoice-details-admin.html">Invoice Details (Admin)</a></li>
                                    <li><a href="invoice-details.html">Invoice Details (Customer)</a></li>
                                    <li><a href="invoice-template.html">Invoice Templates</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="recurring-invoices.html"><i className="fe fe-clipboard"></i> <span>Recurring
                                    Invoices</span></a>
                            </li>
                            <li>
                                <a href="credit-notes.html"><i className="fe fe-edit"></i> <span>Credit Notes</span></a>
                            </li>


                            <li className="menu-title"><span>Purchases</span></li>
                            <li>
                                <a href="purchases.html"><i className="fe fe-shopping-cart"></i> <span>Purchases</span></a>
                            </li>
                            <li>
                                <a href="purchase-orders.html"><i className="fe fe-shopping-bag"></i> <span>Purchase
                                    Orders</span></a>
                            </li>
                            <li>
                                <a href="debit-notes.html"><i className="fe fe-file-text"></i> <span>Debit Notes</span></a>
                            </li>


                            <li className="menu-title"><span>Finance & Accounts</span></li>
                            <li>
                                <a href="expenses.html"><i className="fe fe-file-plus"></i> <span>Expenses</span></a>
                            </li>
                            <li>
                                <a href="payments.html"><i className="fe fe-credit-card"></i> <span>Payments</span></a>
                            </li>


                            <li className="menu-title"><span>Quotations</span></li>
                            <li>
                                <a href="quotations.html"><i className="fe fe-clipboard"></i> <span>Quotations</span></a>
                            </li>
                            <li>
                                <a href="delivery-challans.html"><i className="fe fe-file-text"></i> <span>Delivery
                                    Challans</span></a>
                            </li>


                            <li className="menu-title"><span>Reports</span></li>
                            <li>
                                <a href="payment-summary.html"><i className="fe fe-credit-card"></i> <span>Payment
                                    Summary</span></a>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-box"></i><span>Reports</span> <span
                                    className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="expense-report.html">Expense Report</a></li>
                                    <li><a href="purchase-report.html">Purchase Report</a></li>
                                    <li><a href="purchase-return.html">Purchase Return Report</a></li>
                                    <li><a href="sales-report.html">Sales Report</a></li>
                                    <li><a href="sales-return-report.html">Sales Return Report</a></li>
                                    <li><a href="quotation-report.html">Quotation Report</a></li>
                                    <li><a href="payment-report-2.html">Payment Report</a></li>
                                    <li><a href="stock-report.html">Stock Report</a></li>
                                    <li><a href="low-stock-report.html">Low Stock Report</a></li>
                                    <li><a href="income-report.html">Income Report</a></li>
                                    <li><a href="tax-purchase.html">Tax Report</a></li>
                                    <li><a href="profit-loss-list.html">Profit & Loss</a></li>
                                </ul>
                            </li>


                            <li className="menu-title"><span>User Management</span></li>
                            <li>
                                <a href="users.html"><i className="fe fe-user"></i> <span>Users</span></a>
                            </li>
                            <li>
                                <a href="roles-permission.html"><i className="fe fe-clipboard"></i> <span>Roles &
                                    Permission</span></a>
                            </li>
                            <li>
                                <a href="delete-account-request.html"><i className="fe fe-trash-2"></i> <span>Delete Account
                                    Request</span></a>
                            </li>


                            <li className="menu-title"><span>Membership</span></li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-book"></i> <span> Membership</span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="membership-plans.html">Membership Plans</a></li>
                                    <li><a href="membership-addons.html">Membership Addons</a></li>
                                    <li><a href="subscribers.html">Subscribers</a></li>
                                    <li><a href="transactions.html">Transactions</a></li>
                                </ul>
                            </li>


                            <li className="menu-title"><span>Content (CMS)</span></li>
                            <li>
                                <a href="pages.html"><i className="fe fe-folder"></i> <span>Pages</span></a>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-book"></i> <span> Blog</span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="all-blogs.html">All Blogs</a></li>
                                    <li><a href="categories.html">Categories</a></li>
                                    <li><a href="blog-comments.html">Blog Comments</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-map-pin"></i> <span> Location</span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="countries.html">Countries</a></li>
                                    <li><a href="states.html">States</a></li>
                                    <li><a href="cities.html">Cities</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
      {/* <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li>
                                <a href="testimonials.html"><i className="fe fe-message-square"></i>
                                    <span>Testimonials</span></a>
                            </li>
                            <li>
                                <a href="faq.html"><i className="fe fe-alert-circle"></i> <span>FAQ</span></a>
                            </li>


                            <li className="menu-title"><span>Support</span></li>
                            <li>
                                <a href="contact-messages.html"><i className="fe fe-printer"></i> <span>Contact
                                    Messages</span></a>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-save"></i> <span> Tickets</span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="tickets.html">Tickets</a></li>
                                    <li><a href="tickets-list.html">Tickets List</a></li>
                                    <li><a href="tickets-kanban.html">Tickets Kanban</a></li>
                                    <li><a href="ticket-details.html">Ticket Overview</a></li>
                                </ul>
                            </li>


                            <li className="menu-title"><span>Pages</span></li>
                            <li>
                                <a href="profile.html"><i className="fe fe-user"></i> <span>Profile</span></a>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-lock"></i> <span> Authentication </span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="login.html"> Login </a></li>
                                    <li><a href="register.html"> Register </a></li>
                                    <li><a href="forgot-password.html"> Forgot Password </a></li>
                                    <li><a href="lock-screen.html"> Lock Screen </a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="error-404.html"><i className="fe fe-x-square"></i> <span>Error Pages</span></a>
                            </li>
                            <li>
                                <a href="blank-page.html"><i className="fe fe-file"></i> <span>Blank Page</span></a>
                            </li>
                            <li>
                                <a href="maps-vector.html"><i className="fe fe-image"></i> <span>Vector Maps</span></a>
                            </li>


                            <li className="menu-title">
                                <span>UI Interface</span>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-pocket"></i> <span>Base UI </span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="alerts.html">Alerts</a></li>
                                    <li><a href="accordions.html">Accordions</a></li>
                                    <li><a href="avatar.html">Avatar</a></li>
                                    <li><a href="badges.html">Badges</a></li>
                                    <li><a href="buttons.html">Buttons</a></li>
                                    <li><a href="buttongroup.html">Button Group</a></li>
                                    <li><a href="breadcrumbs.html">Breadcrumb</a></li>
                                    <li><a href="cards.html">Cards</a></li>
                                    <li><a href="carousel.html">Carousel</a></li>
                                    <li><a href="dropdowns.html">Dropdowns</a></li>
                                    <li><a href="grid.html">Grid</a></li>
                                    <li><a href="images.html">Images</a></li>
                                    <li><a href="lightbox.html">Lightbox</a></li>
                                    <li><a href="media.html">Media</a></li>
                                    <li><a href="modal.html">Modals</a></li>
                                    <li><a href="offcanvas.html">Offcanvas</a></li>
                                    <li><a href="pagination.html">Pagination</a></li>
                                    <li><a href="popover.html">Popover</a></li>
                                    <li><a href="progress.html">Progress Bars</a></li>
                                    <li><a href="placeholders.html">Placeholders</a></li>
                                    <li><a href="rangeslider.html">Range Slider</a></li>
                                    <li><a href="spinners.html">Spinner</a></li>
                                    <li><a href="sweetalerts.html">Sweet Alerts</a></li>
                                    <li><a href="tab.html">Tabs</a></li>
                                    <li><a href="toastr.html">Toasts</a></li>
                                    <li><a href="tooltip.html">Tooltip</a></li>
                                    <li><a href="typography.html">Typography</a></li>
                                    <li><a href="video.html">Video</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-box"></i> <span>Elements </span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="ribbon.html">Ribbon</a></li>
                                    <li><a href="clipboard.html">Clipboard</a></li>
                                    <li><a href="drag-drop.html">Drag & Drop</a></li>
                                    <li><a href="rating.html">Rating</a></li>
                                    <li><a href="text-editor.html">Text Editor</a></li>
                                    <li><a href="counter.html">Counter</a></li>
                                    <li><a href="scrollbar.html">Scrollbar</a></li>
                                    <li><a href="notification.html">Notification</a></li>
                                    <li><a href="stickynote.html">Sticky Note</a></li>
                                    <li><a href="timeline.html">Timeline</a></li>
                                    <li><a href="horizontal-timeline.html">Horizontal Timeline</a></li>
                                    <li><a href="form-wizard.html">Form Wizard</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-bar-chart"></i> <span> Charts </span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="chart-apex.html">Apex Charts</a></li>
                                    <li><a href="chart-js.html">Chart Js</a></li>
                                    <li><a href="chart-morris.html">Morris Charts</a></li>
                                    <li><a href="chart-flot.html">Flot Charts</a></li>
                                    <li><a href="chart-peity.html">Peity Charts</a></li>
                                    <li><a href="chart-c3.html">C3 Charts</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-award"></i> <span> Icons </span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                                    <li><a href="icon-feather.html">Feather Icons</a></li>
                                    <li><a href="icon-ionic.html">Ionic Icons</a></li>
                                    <li><a href="icon-material.html">Material Icons</a></li>
                                    <li><a href="icon-pe7.html">Pe7 Icons</a></li>
                                    <li><a href="icon-simpleline.html">Simpleline Icons</a></li>
                                    <li><a href="icon-themify.html">Themify Icons</a></li>
                                    <li><a href="icon-weather.html">Weather Icons</a></li>
                                    <li><a href="icon-typicon.html">Typicon Icons</a></li>
                                    <li><a href="icon-flag.html">Flag Icons</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-sidebar"></i> <span> Forms </span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="form-basic-inputs.html">Basic Inputs </a></li>
                                    <li><a href="form-input-groups.html">Input Groups </a></li>
                                    <li><a href="form-horizontal.html">Horizontal Form </a></li>
                                    <li><a href="form-vertical.html"> Vertical Form </a></li>
                                    <li><a href="form-mask.html">Form Mask </a></li>
                                    <li><a href="form-validation.html">Form Validation </a></li>
                                    <li><a href="form-select2.html">Form Select2 </a></li>
                                    <li><a href="form-fileupload.html">File Upload </a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-layout"></i> <span> Tables </span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: "none" }}>
                                    <li><a href="tables-basic.html">Basic Tables </a></li>
                                    <li><a href="data-tables.html">Data Table </a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="card mb-0">
            <div className="card-body">
              <div className="page-header">
                <div className="content-page-header">
                  <h5>Add Customer</h5>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <form action="#">
                    <div className="form-group-item">
                      <h5 className="form-title">Basic Details</h5>
                      <div className="profile-picture">
                        <div className="upload-profile">
                          <div className="profile-img">
                            <img
                              id="blah"
                              className="avatar"
                              src="assets/img/profiles/avatar-14.jpg"
                              alt="profile-img"
                            />
                          </div>
                          <div className="add-profile">
                            <h5>Upload a New Photo</h5>
                            <span>Profile-pic.jpg</span>
                          </div>
                        </div>
                        <div className="img-upload">
                          <label className="btn btn-upload">
                            Upload <input type="file" />
                          </label>
                          <a className="btn btn-remove">Remove</a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Number</label>
                            <input
                              type="text"
                              id="mobile_code"
                              className="form-control"
                              placeholder="Number"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Email <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email Address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Phone <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="mobile_code"
                              className="form-control"
                              placeholder="Phone Number"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>GST Number (if available)</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter GST Number"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              PAN No <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter PAN Number"
                              required
                            />
                          </div>
                        </div>
                        <div className="billing-btn mb-2">
                          <h5 className="form-title">Address</h5>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Address Line 1</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address 1"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Address Line 2</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address 2"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Country</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Country"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>City</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter City"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>State</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter State"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Pincode</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Pincode"
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
                        <div className="add-customer-btns text-end">
                          <a
                            href="customers.html"
                            className="btn customer-btn-cancel"
                          >
                            Cancel
                          </a>
                          <a
                            href="customers.html"
                            className="btn customer-btn-save"
                          >
                            Save Changes
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="settings-icon">
                <span data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas"
                    aria-controls="theme-settings-offcanvas"><img src="assets/img/icons/siderbar-icon2.svg" className="feather-five"
                        alt="layout" /></span>

                <div className="offcanvas offcanvas-end border-0 " tabIndex="-1" id="theme-settings-offcanvas">
                    <div className="sidebar-headerset">
                        <div className="sidebar-headersets">
                            <h2>Customizer</h2>
                            <h3>Customize your overview Page layout</h3>
                        </div>
                        <div className="sidebar-headerclose">
                            <a data-bs-dismiss="offcanvas" aria-label="Close"><img src="assets/img/close.png" alt="img" /></a>
                        </div>
                    </div>

                    <div className="offcanvas-body p-0">
                        <div data-simplebar className="h-100">
                            <div className="settings-mains">
                                <div className="layout-head">
                                    <h5>Layout</h5>
                                    <h6>Choose your layout</h6>
                                </div>

                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-check card-radio p-0">
                                            <input id="customizer-layout01" name="data-layout" type="radio" value="vertical"
                                                className="form-check-input" />
                                            <label className="form-check-label avatar-md w-100" htmlFor="customizer-layout01">
                                                <img src="assets/img/vertical.png" alt="img" />
                                            </label>
                                        </div>
                                        <h5 className="fs-13 text-center mt-2">Vertical</h5>
                                    </div>

                                    <div className="col-4">
                                        <div className="form-check card-radio p-0">
                                            <input id="customizer-layout02" name="data-layout" type="radio" value="horizontal"
                                                className="form-check-input" />
                                            <label className="form-check-label  avatar-md w-100" htmlFor="customizer-layout02">
                                                <img src="assets/img/horizontal.png" alt="img" />
                                            </label>
                                        </div>
                                        <h5 className="fs-13 text-center mt-2">Horizontal</h5>
                                    </div>

                                    <div className="col-4 d-none">
                                        <div className="form-check card-radio p-0">
                                            <input id="customizer-layout03" name="data-layout" type="radio" value="twocolumn"
                                                className="form-check-input" />
                                            <label className="form-check-label  avatar-md w-100" htmlFor="customizer-layout03">
                                                <img src="assets/img/two-col.png" alt="img" />
                                            </label>
                                        </div>
                                        <h5 className="fs-13 text-center mt-2">Two Column</h5>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-between pt-3">
                                    <div className="layout-head mb-0">
                                        <h5>RTL Mode</h5>
                                        <h6>Change Language Direction.</h6>
                                    </div>
                                    <div className="active-switch">
                                        <div className="status-toggle">
                                            <input id="rtl" className="check" type="checkbox" />
                                            <label htmlFor="rtl" className="checktoggle checkbox-bg">checkbox</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="layout-head pt-3">
                                    <h5>Color Scheme</h5>
                                    <h6>Choose Light or Dark Scheme.</h6>
                                </div>

                                <div className="colorscheme-cardradio">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="form-check card-radio blue  p-0 ">
                                                <input className="form-check-input" type="radio" name="data-layout-mode"
                                                    id="layout-mode-blue" value="blue" />
                                                <label className="form-check-label  avatar-md w-100" htmlFor="layout-mode-blue">
                                                    <img src="assets/img/vertical.png" alt="img" />
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2 mb-2">Blue</h5>
                                        </div>

                                        <div className="col-4">
                                            <div className="form-check card-radio p-0">
                                                <input className="form-check-input" type="radio" name="data-layout-mode"
                                                    id="layout-mode-light" value="light" />
                                                <label className="form-check-label  avatar-md w-100" htmlFor="layout-mode-light">
                                                    <img src="assets/img/vertical.png" alt="img" />
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2 mb-2">Light</h5>
                                        </div>

                                        <div className="col-4">
                                            <div className="form-check card-radio dark  p-0 ">
                                                <input className="form-check-input" type="radio" name="data-layout-mode"
                                                    id="layout-mode-dark" value="dark" />
                                                <label className="form-check-label avatar-md w-100 " htmlFor="layout-mode-dark">
                                                    <img src="assets/img/vertical.png" alt="img" />
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2 mb-2">Dark</h5>
                                        </div>

                                        <div className="col-4 d-none">
                                            <div className="form-check card-radio p-0">
                                                <input className="form-check-input" type="radio" name="data-layout-mode"
                                                    id="layout-mode-orange" value="orange" />
                                                <label className="form-check-label  avatar-md w-100 " htmlFor="layout-mode-orange">
                                                    <img src="assets/img/vertical.png" alt="img" />
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2 mb-2">Orange</h5>
                                        </div>

                                        <div className="col-4 d-none">
                                            <div className="form-check card-radio maroon p-0">
                                                <input className="form-check-input" type="radio" name="data-layout-mode"
                                                    id="layout-mode-maroon" value="maroon" />
                                                <label className="form-check-label  avatar-md w-100 " htmlFor="layout-mode-maroon">
                                                    <img src="assets/img/vertical.png" alt="img" />
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2 mb-2">Brink Pink</h5>
                                        </div>

                                        <div className="col-4 d-none">
                                            <div className="form-check card-radio purple p-0">
                                                <input className="form-check-input" type="radio" name="data-layout-mode"
                                                    id="layout-mode-purple" value="purple" />
                                                <label className="form-check-label  avatar-md w-100 " htmlFor="layout-mode-purple">
                                                    <img src="assets/img/vertical.png" alt="img" />
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2 mb-2">Green</h5>
                                        </div>
                                    </div>
                                </div>

                                <div id="layout-width">
                                    <div className="layout-head pt-3">
                                        <h5>Layout Width</h5>
                                        <h6>Choose Fluid or Boxed layout.</h6>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="form-check card-radio p-0">
                                                <input className="form-check-input" type="radio" name="data-layout-width"
                                                    id="layout-width-fluid" value="fluid" />
                                                <label className="form-check-label avatar-md w-100" htmlFor="layout-width-fluid">
                                                    <img src="assets/img/vertical.png" alt="img" />
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2">Fluid</h5>
                                        </div>

                                        <div className="col-4">
                                            <div className="form-check card-radio p-0 ">
                                                <input className="form-check-input" type="radio" name="data-layout-width"
                                                    id="layout-width-boxed" value="boxed" />
                                                <label className="form-check-label avatar-md w-100 px-2" htmlFor="layout-width-boxed">
                                                    <img src="assets/img/boxed.png" alt="img" />
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2">Boxed</h5>
                                        </div>
                                    </div>
                                </div>

                                <div id="layout-position" className="d-none">
                                    <div className="layout-head pt-3">
                                        <h5>Layout Position</h5>
                                        <h6>Choose Fixed or Scrollable Layout Position.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      {/* <div className="btn-group bor-rad-50 overflow-hidden radio" role="group">
                <input type="radio" className="btn-check" name="data-layout-position" id="layout-position-fixed"
                    value="fixed" />
                <label className="btn btn-light w-sm" htmlFor="layout-position-fixed">Fixed</label>
                <input type="radio" className="btn-check" name="data-layout-position"
                    id="layout-position-scrollable" value="scrollable" />
                <label className="btn btn-light w-sm ms-0" htmlFor="layout-position-scrollable">Scrollable</label>
            </div>

            <div className="layout-head pt-3">
                <h5>Topbar Color</h5>
                <h6>Choose Light or Dark Topbar Color.</h6>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="form-check card-radio  p-0">
                        <input className="form-check-input" type="radio" name="data-topbar" id="topbar-color-light"
                            value="light" />
                        <label className="form-check-label avatar-md w-100" htmlFor="topbar-color-light">
                            <img src="assets/img/vertical.png" alt="img" />
                        </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Light</h5>
                </div>

                <div className="col-4">
                    <div className="form-check card-radio p-0">
                        <input className="form-check-input" type="radio" name="data-topbar" id="topbar-color-dark"
                            value="dark" />
                        <label className="form-check-label  avatar-md w-100" htmlFor="topbar-color-dark">
                            <img src="assets/img/dark.png" alt="img" />
                        </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Dark</h5>
                </div>
            </div>

            <div id="sidebar-size">
                <div className="layout-head pt-3">
                    <h5>Sidebar Size</h5>
                    <h6>Choose a size of Sidebar.</h6>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="form-check sidebar-setting card-radio  p-0 ">
                            <input className="form-check-input" type="radio" name="data-sidebar-size"
                                id="sidebar-size-default" value="lg" />
                            <label className="form-check-label avatar-md w-100" htmlFor="sidebar-size-default">
                                <img src="assets/img/vertical.png" alt="img" />
                            </label>
                        </div>
                        <h5 className="fs-13 text-center mt-2">Default</h5>
                    </div>

                    <div className="col-4 d-none">
                        <div className="form-check sidebar-setting card-radio p-0">
                            <input className="form-check-input" type="radio" name="data-sidebar-size"
                                id="sidebar-size-compact" value="md" />
                            <label className="form-check-label  avatar-md w-100" htmlFor="sidebar-size-compact">
                                <img src="assets/img/compact.png" alt="img" />
                            </label>
                        </div>
                        <h5 className="fs-13 text-center mt-2">Compact</h5>
                    </div>

                    <div className="col-4">
                        <div className="form-check sidebar-setting card-radio p-0 ">
                            <input className="form-check-input" type="radio" name="data-sidebar-size"
                                id="sidebar-size-small-hover" value="sm-hover" />
                            <label className="form-check-label avatar-md w-100" htmlFor="sidebar-size-small-hover">
                                <img src="assets/img/small-hover.png" alt="img" />
                            </label>
                        </div>
                        <h5 className="fs-13 text-center mt-2">Small Sidebar</h5>
                    </div>
                </div>
            </div>

            <div id="sidebar-view">
                <div className="layout-head pt-3">
                    <h5>Sidebar View</h5>
                    <h6>Choose Default or Detached Sidebar view.</h6>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="form-check sidebar-setting card-radio  p-0">
                            <input className="form-check-input" type="radio" name="data-layout-style"
                                id="sidebar-view-default" value="default" />
                            <label className="form-check-label avatar-md w-100" htmlFor="sidebar-view-default">
                                <img src="assets/img/compact.png" alt="img" />
                            </label>
                        </div>
                        <h5 className="fs-13 text-center mt-2">Default</h5>
                    </div>
                    <div className="col-4">
                        <div className="form-check sidebar-setting card-radio p-0">
                            <input className="form-check-input" type="radio" name="data-layout-style"
                                id="sidebar-view-detached" value="detached" />
                            <label className="form-check-label  avatar-md w-100" htmlFor="sidebar-view-detached">
                                <img src="assets/img/detached.png" alt="img" />
                            </label>
                        </div>
                        <h5 className="fs-13 text-center mt-2">Detached</h5>
                    </div>
                </div>
            </div>

            <div id="sidebar-color">
                <div className="layout-head pt-3">
                    <h5>Sidebar Color</h5>
                    <h6>Choose a color of Sidebar.</h6>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="form-check sidebar-setting card-radio p-0" data-bs-toggle="collapse"
                            data-bs-target="#collapseBgGradient.show">
                            <input className="form-check-input" type="radio" name="data-sidebar"
                                id="sidebar-color-light" value="light" />
                            <label className="form-check-label  avatar-md w-100" htmlFor="sidebar-color-light">
                                <span className="bg-light bg-sidebarcolor"></span>
                            </label>
                        </div>
                        <h5 className="fs-13 text-center mt-2">Light</h5>
                    </div>
                    <div className="col-4">
                        <div className="form-check sidebar-setting card-radio p-0" data-bs-toggle="collapse"
                            data-bs-target="#collapseBgGradient.show">
                            <input className="form-check-input" type="radio" name="data-sidebar"
                                id="sidebar-color-dark" value="dark" />
                            <label className="form-check-label  avatar-md w-100" htmlFor="sidebar-color-dark">
                                <span className="bg-darks bg-sidebarcolor"></span>
                            </label>
                        </div>
                        <h5 className="fs-13 text-center mt-2">Dark</h5>
                    </div>
                    <div className="col-4 d-none">
                        <div className="form-check sidebar-setting card-radio p-0">
                            <input className="form-check-input" type="radio" name="data-sidebar"
                                id="sidebar-color-gradient" value="gradient" />
                            <label className="form-check-label avatar-md w-100" htmlFor="sidebar-color-gradient">
                                <span className="bg-gradients bg-sidebarcolor"></span>
                            </label>
                        </div>
                        <h5 className="fs-13 text-center mt-2">Gradient</h5>
                    </div>
                    <div className="col-4 d-none">
                        <button className="btn btn-link avatar-md w-100 p-0 overflow-hidden border collapsed"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient"
                            aria-expanded="false">
                            <span className="d-flex gap-1 h-100">
                                <span className="flex-shrink-0">
                                    <span className="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
                                        <span className="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
                                        <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                        <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                        <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                    </span>
                                </span>
                                <span className="flex-grow-1">
                                    <span className="d-flex h-100 flex-column">
                                        <span className="bg-light d-block p-1"></span>
                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                </span>
                            </span>
                        </button>
                        <h5 className="fs-13 text-center mt-2">Gradient</h5>
                    </div>
                </div>
            </div>
            <div className="offcanvas-footer border-top p-3 text-center">
                <div className="row">
                    <div className="col-6">
                        <button type="button" className="btn btn-light w-100 bor-rad-50" id="reset-layout">Reset</button>
                    </div>
                    <div className="col-6">
                        <a href="https://themeforest.net/item/smarthr-bootstrap-admin-panel-template/21153150"
                            target="_blank" className="btn btn-primary w-100 bor-rad-50">Buy Now</a>
                    </div>
                </div>      
            </div>
            */}
    </div>
  );
}

export default AddCustomer;
