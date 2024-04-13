import React from "react";

function AddVendor() {
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
        <a href="javascript:void(0);" id="toggle_btn">
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
            <div className="dropdown-menu dropdown-menu-end">
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/us.png" alt="flag" />
                <span>English</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/fr.png" alt="flag" />
                <span>French</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/es.png" alt="flag" />
                <span>Spanish</span>
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/de.png" alt="flag" />
                <span>German</span>
              </a>
            </div>
          </li>
          <li className="nav-item has-arrow dropdown-heads">
            <a href="javascript:void(0);" className="toggle-switch">
              <i className="fe fe-moon"></i>
            </a>
          </li>
          <li className="nav-item dropdown flag-nav dropdown-heads">
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
                <a
                  href="javascript:void(0)"
                  className="clear-noti d-flex align-items-center"
                >
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
          <li className="nav-item has-arrow dropdown-heads">
            <a href="javascript:void(0);" className="win-maximize">
              <i className="fe fe-maximize"></i>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="javascript:void(0)"
              className="user-link  nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  src="assets/img/profiles/avatar-07.jpg"
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
      <br/><br/><br/><br/>
      <div className="container mt-4">
        <h4 className="mb-0">Add Vendor</h4>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="gst">GST Number (if available)</label>
                <input
                  type="text"
                  className="form-control"
                  id="gst"
                  placeholder="Enter GST Number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="pan">PAN Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="pan"
                  placeholder="Enter PAN Number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="address1">Address Line 1</label>
                <input
                  type="text"
                  className="form-control"
                  id="address1"
                  placeholder="Enter Address 1"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="address2">Address Line 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Enter Address 2"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="Enter Country"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter City"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  placeholder="Enter State"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  placeholder="Enter Pincode"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="bank">Bank Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="bank"
                  placeholder="Enter Bank Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="branch">Branch</label>
                <input
                  type="text"
                  className="form-control"
                  id="branch"
                  placeholder="Enter Branch Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="accountHolder">Account Holder Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="accountHolder"
                  placeholder="Enter Account Holder Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="accountNumber">Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="accountNumber"
                  placeholder="Enter Account Number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="ifsc">IFSC Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="ifsc"
                  placeholder="Enter IFSC Code"
                />
              </div>
            </div>
          </div>
          <br/><br/>
          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">
                Add Vendor
              </button><br/><br/><nbse></nbse><nbse></nbse>
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddVendor;

// import React from "react";

// function AddVendor() {
//   return (
//     <div>
//       <div className="main-wrapper">
//         <div className="header header-one">
//           <a
//             href="index.html"
//             className="d-inline-flex d-sm-inline-flex align-items-center d-md-inline-flex d-lg-none align-items-center device-logo"
//           >
//             <img
//               src="assets/img/logo.png"
//               className="img-fluid logo2"
//               alt="Logo"
//             />
//           </a>
//           <div className="main-logo d-inline float-start d-lg-flex align-items-center d-none d-sm-none d-md-none">
//             <div className="logo-white">
//               <a href="index.html">
//                 <img
//                   src="assets/img/logo-full-white.png"
//                   className="img-fluid logo-blue"
//                   alt="Logo"
//                 />
//               </a>
//               <a href="index.html">
//                 <img
//                   src="assets/img/logo-small-white.png"
//                   className="img-fluid logo-small"
//                   alt="Logo"
//                 />
//               </a>
//             </div>
//             <div className="logo-color">
//               <a href="index.html">
//                 <img
//                   src="assets/img/logo.png"
//                   className="img-fluid logo-blue"
//                   alt="Logo"
//                 />
//               </a>
//               <a href="index.html">
//                 <img
//                   src="assets/img/logo-small.png"
//                   className="img-fluid logo-small"
//                   alt="Logo"
//                 />
//               </a>
//             </div>
//           </div>
//           <a href="javascript:void(0);" id="toggle_btn">
//             <span className="toggle-bars">
//               <span className="bar-icons"></span>
//               <span className="bar-icons"></span>
//               <span className="bar-icons"></span>
//               <span className="bar-icons"></span>
//             </span>
//           </a>
//           <div className="top-nav-search">
//             <form>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search here"
//               />
//               <button className="btn" type="submit">
//                 <img src="assets/img/icons/search.svg" alt="img" />
//               </button>
//             </form>
//           </div>
//           <a className="mobile_btn" id="mobile_btn">
//             <i className="fas fa-bars"></i>
//           </a>
//           <ul className="nav nav-tabs user-menu">
//             <li className="nav-item dropdown has-arrow flag-nav">
//               <a
//                 className="nav-link dropdown-toggle"
//                 data-bs-toggle="dropdown"
//                 href="#"
//                 role="button"
//               >
//                 <img src="assets/img/flags/us1.png" alt="flag" />
//                 <span>English</span>
//               </a>
//               <div className="dropdown-menu dropdown-menu-end">
//                 <a href="javascript:void(0);" className="dropdown-item">
//                   <img src="assets/img/flags/us.png" alt="flag" />
//                   <span>English</span>
//                 </a>
//                 <a href="javascript:void(0);" className="dropdown-item">
//                   <img src="assets/img/flags/fr.png" alt="flag" />
//                   <span>French</span>
//                 </a>
//                 <a href="javascript:void(0);" className="dropdown-item">
//                   <img src="assets/img/flags/es.png" alt="flag" />
//                   <span>Spanish</span>
//                 </a>
//                 <a href="javascript:void(0);" className="dropdown-item">
//                   <img src="assets/img/flags/de.png" alt="flag" />
//                   <span>German</span>
//                 </a>
//               </div>
//             </li>
//             <li className="nav-item has-arrow dropdown-heads">
//               <a href="javascript:void(0);" className="toggle-switch">
//                 <i className="fe fe-moon"></i>
//               </a>
//             </li>
//             <li className="nav-item dropdown flag-nav dropdown-heads">
//               <a
//                 className="nav-link"
//                 data-bs-toggle="dropdown"
//                 href="#"
//                 role="button"
//               >
//                 <i className="fe fe-bell"></i>{" "}
//                 <span className="badge rounded-pill"></span>
//               </a>
//               <div className="dropdown-menu notifications">
//                 <div className="topnav-dropdown-header">
//                   <div className="notification-title">
//                     Notifications <a href="notifications.html">View all</a>
//                   </div>
//                   <a
//                     href="javascript:void(0)"
//                     className="clear-noti d-flex align-items-center"
//                   >
//                     Mark all as read
//                     <i className="fe fe-check-circle"></i>
//                   </a>
//                 </div>
//                 <div className="noti-content">
//                   <ul className="notification-list">
//                     <li className="notification-message">
//                       <a href="profile.html">
//                         <div className="d-flex">
//                           <span className="avatar avatar-md active">
//                             <img
//                               className="avatar-img rounded-circle"
//                               alt="avatar-img"
//                               src="assets/img/profiles/avatar-02.jpg"
//                             />
//                           </span>
//                           <div className="media-body">
//                             <p className="noti-details">
//                               <span className="noti-title">Lex Murphy</span>
//                               requested access to{" "}
//                               <span className="noti-title">
//                                 UNIX directory tree hierarchy
//                               </span>
//                             </p>
//                             <div className="notification-btn">
//                               <span className="btn btn-primary">Accept</span>
//                               <span className="btn btn-outline-primary">
//                                 Reject
//                               </span>
//                             </div>
//                             <p className="noti-time">
//                               <span className="notification-time">
//                                 Today at 9:42 AM
//                               </span>
//                             </p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                     <li className="notification-message">
//                       <a href="profile.html">
//                         <div className="d-flex">
//                           <span className="avatar avatar-md active">
//                             <img
//                               className="avatar-img rounded-circle"
//                               alt="avatar-img"
//                               src="assets/img/profiles/avatar-10.jpg"
//                             />
//                           </span>
//                           <div className="media-body">
//                             <p className="noti-details">
//                               <span className="noti-title">Ray Arnold</span>{" "}
//                               left 6 comments{" "}
//                               <span className="noti-title">
//                                 on Isla Nublar SOC2 compliance report
//                               </span>
//                             </p>
//                             <p className="noti-time">
//                               <span className="notification-time">
//                                 Yesterday at 11:42 PM
//                               </span>
//                             </p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                     <li className="notification-message">
//                       <a href="profile.html">
//                         <div className="d-flex">
//                           <span className="avatar avatar-md">
//                             <img
//                               className="avatar-img rounded-circle"
//                               alt="avatar-img"
//                               src="assets/img/profiles/avatar-13.jpg"
//                             />
//                           </span>
//                           <div className="media-body">
//                             <p className="noti-details">
//                               <span className="noti-title">Dennis Nedry</span>
//                               commented on{" "}
//                               <span className="noti-title">
//                                 {" "}
//                                 Isla Nublar SOC2 compliance report
//                               </span>
//                             </p>
//                             <blockquote>
//                               “Oh, I finished de-bugging the phones, but the
//                               system's compiling for eighteen minutes, or twenty.
//                               So, some minor systems may go on and off for a
//                               while.”
//                             </blockquote>
//                             <p className="noti-time">
//                               <span className="notification-time">
//                                 Yesterday at 5:42 PM
//                               </span>
//                             </p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                     <li className="notification-message">
//                       <a href="profile.html">
//                         <div className="d-flex">
//                           <span className="avatar avatar-md">
//                             <img
//                               className="avatar-img rounded-circle"
//                               alt="avatar-img"
//                               src="assets/img/profiles/avatar-05.jpg"
//                             />
//                           </span>
//                           <div className="media-body">
//                             <p className="noti-details">
//                               <span className="noti-title">John Hammond</span>
//                               created{" "}
//                               <span className="noti-title">
//                                 Isla Nublar SOC2 compliance report
//                               </span>
//                             </p>
//                             <p className="noti-time">
//                               <span className="notification-time">
//                                 Last Wednesday at 11:15 AM
//                               </span>
//                             </p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="topnav-dropdown-footer">
//                   <a href="#">Clear All</a>
//                 </div>
//               </div>
//             </li>
//             <li className="nav-item has-arrow dropdown-heads">
//               <a href="javascript:void(0);" className="win-maximize">
//                 <i className="fe fe-maximize"></i>
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 href="javascript:void(0)"
//                 className="user-link  nav-link"
//                 data-bs-toggle="dropdown"
//               >
//                 <span className="user-img">
//                   <img
//                     src="assets/img/profiles/avatar-07.jpg"
//                     alt="img"
//                     className="profilesidebar"
//                   />
//                   <span className="animate-circle"></span>
//                 </span>
//                 <span className="user-content">
//                   <span className="user-details">Admin</span>
//                   <span className="user-name">John Smith</span>
//                 </span>
//               </a>
//               <div className="dropdown-menu menu-drop-user">
//                 <div className="profilemenu">
//                   <div className="subscription-menu">
//                     <ul>
//                       <li>
//                         <a className="dropdown-item" href="profile.html">
//                           Profile
//                         </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="settings.html">
//                           Settings
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="subscription-logout">
//                     <ul>
//                       <li className="pb-0">
//                         <a className="dropdown-item" href="login.html">
//                           Log Out
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div>
//         <div className="modal custom-modal fade" id="add_vendor" role="dialog">
//           <div className="modal-dialog modal-dialog-centered modal-md">
//             <div className="modal-content">
//               <div className="modal-header border-0 pb-0">
//                 <div className="form-header modal-header-title text-start mb-0">
//                   <h4 className="mb-0">Add Vendor</h4>
//                 </div>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <form action="#">
//                 <div className="modal-body">
//                   <div className="row">
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>Name</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Name"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>Email</label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           placeholder="Enter Email Address"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>Phone Number</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Phone Number"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>GST Number (if available)</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter GST Number"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>PAN Number</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter PAN Number"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>Address Line 1</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Address 1"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>Address Line 2</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Address 2"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>Country</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Country"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>City</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter City"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>State</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter State"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>Pincode</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Pincode"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>Bank Name</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Bank Name"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>Branch</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Branch Name"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>Account Holder Name</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Account Holder Name"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>Account Number</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Account Number"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12">
//                       <div className="input-block mb-3">
//                         <label>IFSC Code</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter IFSC Code"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     data-bs-dismiss="modal"
//                     className="btn btn-back cancel-btn me-2"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     data-bs-dismiss="modal"
//                     className="btn btn-primary paid-continue-btn"
//                   >
//                     Add Vendor
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddVendor;
