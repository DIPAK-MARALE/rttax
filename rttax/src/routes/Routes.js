// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import CustomerRegistration from '../components/customer-registration'; // Import CustomerRegistration component
// import VendorProfile from '../components/vendor-profile'; // Import VendorProfile component
// import AddInvoice from '../components/add-invoice'; // Import AddInvoice component
// import AddVendor from '../components/add-vendor'; // Import AddVendor component
// import AddCustomer from '../components/add-customer'; // Import AddCustomer component

// function AppRoutes() {
//     return (
//         <Routes>
//             {/* Define your routes here */}
//             <Route path="/customer-registration" element={<CustomerRegistration />} />
//             <Route path="/vendor-profile" element={<VendorProfile />} />
//             <Route path="/add-invoice" element={<AddInvoice />} />
//             <Route path="/add-vendor" element={<AddVendor />} />
//             <Route path="/add-customer" element={<AddCustomer />} />
//             {/* Add more routes for other components */}
//         </Routes>
//     );
// }

// export default AppRoutes;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerRegistration from '../components/customer-registration';
import VendorProfile from '../components/vendor-profile';
import AddInvoice from '../components/add-invoice';
import AddVendor from '../components/add-vendor';
import AddCustomer from '../components/add-customer';
// Import the AdminLogin component with the correct relative path
import AdminLogin from '../components/admin-login';
import AdminDashboard from "../components/admin-dashboard"; // Import the AdminDashboard component
import UserDashboard from '../components/user-dashboard'; // Import the UserDashboard component
import Companies from '../components/companies';
import Subscription from '../components/subscription'; // Import the Subscription component
import Packages from '../components/packages';
import Domain from '../components/domain'; // Import the Domain component
import PurchaseTransaction from '../components/purchase-transaction'; // Import the PurchaseTransaction component
import Invoices from '../components/invoices'; // Import the Invoices component
import Expenses from '../components/expenses';
import AddExpenses from '../components/add-expenses'; // Import the AddExpenses component


import Quotations from '../components/quotations'; // Update the import path if necessary
import AddQuotations from '../components/add-quotations';




function AppRoutes() {
    return (
        <Routes>
            <Route path="/customer-registration" element={<CustomerRegistration />} />
            <Route path="/vendor-profile" element={<VendorProfile />} />
            <Route path="/add-invoice" element={<AddInvoice />} />
            <Route path="/add-vendor" element={<AddVendor />} />
            <Route path="/add-customer" element={<AddCustomer />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard />} /> {/* Add this route */}
            <Route path="/companies" element={<Companies />} /> {/* Use element prop instead of component */}
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/purchase-transaction" element={<PurchaseTransaction />} />
            <Route path="/quotations" element={<Quotations />} />
            <Route path="/add-quotations" element={<AddQuotations />} />
            <Route path="/invoices" element={<Invoices />} /> {/* Add this route */}
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/add-expenses" element={<AddExpenses />} /> {/* Add this route */}




        </Routes>
    );
}

export default AppRoutes;
