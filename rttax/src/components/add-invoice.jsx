import React from 'react';

const AddInvoicePage = () => {
    return (
        <div>
                    {/* Embedded code */}
                    <ul className="nav nav-tabs user-menu" style={{ position: 'fixed', top: '0', right: '0', zIndex: '9999' }}>
                <li className="nav-item dropdown has-arrow flag-nav">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
                        <img src="assets/img/flags/us1.png" alt="flag" /><span>English</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="assets/img/flags/us.png" alt="flag" /><span>English</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="assets/img/flags/fr.png" alt="flag" /><span>French</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="assets/img/flags/es.png" alt="flag" /><span>Spanish</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="assets/img/flags/de.png" alt="flag" /><span>German</span>
                        </a>
                    </div>
                </li>
                <li className="nav-item  has-arrow dropdown-heads ">
                    <a href="javascript:void(0);" className="toggle-switch">
                        <i className="fe fe-moon"></i>
                    </a>
                </li>
                <li className="nav-item dropdown  flag-nav dropdown-heads">
                    <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button">
                        <i className="fe fe-bell"></i> <span className="badge rounded-pill"></span>
                    </a>
                    <div className="dropdown-menu notifications">
                        <div className="topnav-dropdown-header">
                            <div className="notification-title">Notifications <a href="notifications.html">View all</a></div>
                            <a href="javascript:void(0)" className="clear-noti d-flex align-items-center">Mark all as read <i className="fe fe-check-circle"></i></a>
                        </div>
                        <div className="noti-content">
                            <ul className="notification-list"></ul>
                        </div>
                        <div className="topnav-dropdown-footer">
                            <a href="#">Clear All</a>
                        </div>
                    </div>
                </li>
                <li className="nav-item  has-arrow dropdown-heads ">
                    <a href="javascript:void(0);" className="win-maximize">
                        <i className="fe fe-maximize"></i>
                    </a>
                </li>
            </ul>
            <div style={{ position: 'fixed', top: '0', right: '0', zIndex: '9999' }}>
                <div className="header header-one">
                    <a href="index.html" className="d-inline-flex d-sm-inline-flex align-items-center d-md-inline-flex d-lg-none align-items-center device-logo">
                        <img src="assets/img/logo.png" className="img-fluid logo2" alt="Logo" />
                    </a>
                    <div className="main-logo d-inline float-start d-lg-flex align-items-center d-none d-sm-none d-md-none">
                        <div className="logo-white">
                            <a href="index.html">
                                <img src="assets/img/logo-full-white.png" className="img-fluid logo-blue" alt="Logo" />
                            </a>
                            <a href="index.html">
                                <img src="assets/img/logo-small-white.png" className="img-fluid logo-small" alt="Logo" />
                            </a>
                        </div>
                        <div className="logo-color">
                            <a href="index.html">
                                <img src="assets/img/logo.png" className="img-fluid logo-blue" alt="Logo" />
                            </a>
                            <a href="index.html">
                                <img src="assets/img/logo-small.png" className="img-fluid logo-small" alt="Logo" />
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
                </div>
            </div>

            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="card mb-0">
                        <div className="card-body">
                            <div className="page-header">
                                <div className="content-page-header">
                                    <h5>Add Invoice</h5>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    {/* Seller Details Column */}
                                    <div className="col-md-6">
                                        <div className="section">
                                            <h2>Seller Details</h2>
                                            <div className="form-group">
                                                <label for="tradeName">Trade Name</label>
                                                <input type="text" id="tradeName" name="tradeName" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="officeAddress">Office / Shop Address</label>
                                                <textarea id="officeAddress" name="officeAddress" className="form-control" rows="3" required></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label for="shippingAddress">Shipping Address</label>
                                                <textarea id="shippingAddress" name="shippingAddress" className="form-control" rows="3"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label for="sellersGstin">Seller's GSTIN</label>
                                                <input type="text" id="sellersGstin" name="sellersGstin" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Type of Invoice Column */}
                                    <div className="col-md-6">
                                        <div className="section">
                                            <h2>Type of Invoice</h2>
                                            <div className="form-group">
                                                <label for="invoiceType">Type of Invoice</label>
                                                <select id="invoiceType" name="invoiceType" className="form-control" required>
                                                    <option value="TaxInvoice">Tax Invoice</option>
                                                    <option value="ProformaInvoice">Proforma Invoice</option>
                                                    <option value="CommercialInvoice">Commercial Invoice</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label for="buyerGstin">Buyer GSTIN</label>
                                                <input type="text" id="buyerGstin" name="buyerGstin" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="partyName">Name of Party</label>
                                                <input type="text" id="partyName" name="partyName" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="billToAddress">Bill To Address</label>
                                                <textarea id="billToAddress" name="billToAddress" className="form-control" rows="3" required></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label for="shipToAddress">Ship To Address</label>
                                                <textarea id="shipToAddress" name="shipToAddress" className="form-control" rows="3"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label for="placeOfSupply">Place of Supply</label>
                                                <input type="text" id="placeOfSupply" name="placeOfSupply" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    {/* Invoice Details Column */}
                                    <div className="col-md-6">
                                        <div className="section">
                                            <h2>Invoice Details</h2>
                                            <div className="form-group">
                                                <label for="invoiceNumber">Invoice Number</label>
                                                <input type="text" id="invoiceNumber" name="invoiceNumber" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="invoiceDate">Invoice Date</label>
                                                <input type="date" id="invoiceDate" name="invoiceDate" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="itemRate">Item Rate</label>
                                                <input type="number" id="itemRate" name="itemRate" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="hsnSac">HSN/SAC</label>
                                                <input type="text" id="hsnSac" name="hsnSac" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="goodsServices">Goods / Services</label>
                                                <input type="text" id="goodsServices" name="goodsServices" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="taxableValue">Taxable Value</label>
                                                <input type="number" id="taxableValue" name="taxableValue" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="reverseCharge">Reverse Charge</label>
                                            <select id="reverseCharge" name="reverseCharge" className="form-control" required>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* GST Details Column */}
                                    <div className="col-md-6">
                                        <div className="section">
                                            <h2>GST Details</h2>
                                            <div className="form-group">
                                                <label for="quantity">Quantity</label>
                                                <input type="number" id="quantity" name="quantity" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="uqc">UQC (Unit Quantity Code)</label>
                                                <select id="uqc" name="uqc" className="form-control" required>
                                                    <option value="NO OF PCS">NO OF PCS</option>
                                                    <option value="KG">KG</option>
                                                    <option value="METER">METER</option>
                                                    <option value="DOZEN">DOZEN</option>
                                                    <option value="LITER">LITER</option>
                                                    <option value="ETC">ETC</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label for="gstRate">GST Rate</label>
                                                <input type="number" id="gstRate" name="gstRate" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="igst">IGST</label>
                                                <input type="number" id="igst" name="igst" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="cgst">CGST</label>
                                                <input type="number" id="cgst" name="cgst" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="sgstUtgst">SGST / UTGST</label>
                                                <input type="number" id="sgstUtgst" name="sgstUtgst" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label for="supplyType">Supply Type</label>
                                                <select id="supplyType" name="supplyType" className="form-control" required>
                                                    <option value="NON GST">NON GST</option>
                                                    <option value="EXPORT">EXPORT</option>
                                                    <option value="DEEMED EXPORT">DEEMED EXPORT</option>
                                                    <option value="SEZ">SEZ</option>
                                                    <option value="NIL RATED">NIL RATED</option>
                                                    <option value="EXEMPT">EXEMPT</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer">
                                <a href="#" data-bs-dismiss="modal" className="btn btn-back cancel-btn me-2">Cancel</a>
                                <a href="#" data-bs-dismiss="modal" className="btn btn-primary paid-continue-btn">Save</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddInvoicePage;
