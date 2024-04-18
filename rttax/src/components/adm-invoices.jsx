/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const AdmInvoices = () => {
  return (
    <>
      {/* Mirrored from kanakku.dreamstechnologies.com/html/template/dashboard.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 11 Apr 2024 05:55:13 GMT */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Kanakku provides clean Admin Templates for managing Sales, Payment, Invoice, Accounts and Expenses in HTML, Bootstrap 5, ReactJs, Angular, VueJs and Laravel."
      />
      <meta
        name="keywords"
        content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects"
      />
      <meta name="author" content="Dreamguys - Bootstrap Admin Template" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dreamstechnologies" />
      <meta
        name="twitter:title"
        content="Finance & Accounting Admin Website Templates | Kanakku"
      />
      <meta
        name="twitter:description"
        content="Kanakku is a Sales, Invoices & Accounts Admin template for Accountant or Companies/Offices with various features for all your needs. Try Demo and Buy Now."
      />
      <meta name="twitter:image" content="../../assets/img/kanakku.html" />
      <meta name="twitter:image:alt" content="Kanakku" />
      <meta
        property="og:url"
        content="https://kanakku.dreamstechnologies.com/"
      />
      <meta
        property="og:title"
        content="Finance & Accounting Admin Website Templates | Kanakku"
      />
      <meta
        property="og:description"
        content="Kanakku is a Sales, Invoices & Accounts Admin template for Accountant or Companies/Offices with various features for all your needs. Try Demo and Buy Now."
      />
      <meta property="og:image" content="../../assets/img/kanakku.html" />
      <meta
        property="og:image:secure_url"
        content="../../assets/img/kanakku.html"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={1200} />
      <meta property="og:image:height" content={600} />
      <title>Kanakku - Bootstrap Admin HTML Template</title>
      <link rel="shortcut icon" href="assets/img/favicon.png" />
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}",
        }}
      />
      <link
        rel="stylesheet"
        href="assets/plugins/fontawesome/css/fontawesome.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/plugins/fontawesome/css/all.min.css"
      />
      <link rel="stylesheet" href="assets/plugins/feather/feather.css" />
      <link
        rel="stylesheet"
        href="assets/plugins/select2/css/select2.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/css/bootstrap-datetimepicker.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/plugins/datatables/datatables.min.css"
      />
      <link rel="stylesheet" href="assets/css/style.css" />
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
                              <span className="noti-title">Ray Arnold</span>{" "}
                              left 6 comments{" "}
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
                              system's compiling for eighteen minutes, or
                              twenty. So, some minor systems may go on and off
                              for a while.”
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
                <span className="user-img">
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
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <nav className="greedys sidebar-horizantal">
                <ul className="list-inline-item list-unstyled links">
                  <li className="menu-title">
                    <span> Main</span>
                  </li>
                  {/* <li className="submenu">
                    <a href="#">
                      <i className="fe fe-home" /> <span> Dashboard</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="index.html">Admin Dashboard</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-grid" /> <span> Applications</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="chat.html">Chat</a>
                      </li>
                      <li>
                        <a href="calendar.html">Calendar</a>
                      </li>
                      <li>
                        <a href="inbox.html">Email</a>
                      </li>
                    </ul>
                  </li> */}
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-user" /> <span> Super Admin</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="dashboard.html" className="active">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="companies.html">Companies</a>
                      </li>
                      <li>
                        <a href="subscription.html">Subscription</a>
                      </li>
                      <li>
                        <a href="packages.html">Packages</a>
                      </li>
                      <li>
                        <a href="domain.html">Domain</a>
                      </li>
                      <li>
                        <a href="purchase-transaction.html">
                          Purchase Transaction
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <span>
                        {" "}
                        <i className="fe fe-users" /> Customers
                      </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="customers.html">
                          <i className="fe fe-users" /> <span>Customers</span>
                        </a>
                      </li>
                      <li>
                        <a href="customer-details.html">
                          <i className="fe fe-file" />{" "}
                          <span>Customer Details</span>
                        </a>
                      </li>
                      <li>
                        <a href="vendors.html">
                          <i className="fe fe-user" /> <span>Vendors</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">
                    <span>Inventory</span>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-package" />{" "}
                      <span> Products / Services</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="product-list.html">Product List</a>
                      </li>
                      <li>
                        <a href="category.html">Category</a>
                      </li>
                      <li>
                        <a href="units.html">Units</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="inventory.html">
                      <i className="fe fe-user" /> <span>Inventory</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      {" "}
                      <i className="fe fe-file-plus" />
                      <span>Signature </span> <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="signature-list.html">
                          <i className="fe fe-clipboard" />{" "}
                          <span>List of Signature</span>
                        </a>
                      </li>
                      <li>
                        <a href="signature-invoice.html">
                          <i className="fe fe-box" />{" "}
                          <span>Signature Invoice</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">
                    <span>Sales</span>
                  </li>
                  <li className="submenu">
                    <a href="invoices.html">
                      <i className="fe fe-file" /> <span>Invoices</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="invoices.html">Invoices List</a>
                      </li>
                      <li>
                        <a href="invoice-details-admin.html">
                          Invoice Details (Admin)
                        </a>
                      </li>
                      <li>
                        <a href="invoice-details.html">
                          Invoice Details (Customer)
                        </a>
                      </li>
                      <li>
                        <a href="invoice-template.html">Invoice Templates</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <button className="viewmoremenu">More Menu</button>
                <ul className="hidden-links hidden">
                  <li>
                    <a href="recurring-invoices.html">
                      <i className="fe fe-clipboard" />{" "}
                      <span>Recurring Invoices</span>
                    </a>
                  </li>
                  <li>
                    <a href="credit-notes.html">
                      <i className="fe fe-edit" /> <span>Credit Notes</span>
                    </a>
                  </li>
                  <li className="menu-title">
                    <span>Purchases</span>
                  </li>
                  <li>
                    <a href="purchases.html">
                      <i className="fe fe-shopping-cart" />{" "}
                      <span>Purchases</span>
                    </a>
                  </li>
                  <li>
                    <a href="purchase-orders.html">
                      <i className="fe fe-shopping-bag" />{" "}
                      <span>Purchase Orders</span>
                    </a>
                  </li>
                  <li>
                    <a href="debit-notes.html">
                      <i className="fe fe-file-text" /> <span>Debit Notes</span>
                    </a>
                  </li>
                  <li className="menu-title">
                    <span>Finance &amp; Accounts</span>
                  </li>
                  <li>
                    <a href="expenses.html">
                      <i className="fe fe-file-plus" /> <span>Expenses</span>
                    </a>
                  </li>
                  <li>
                    <a href="payments.html">
                      <i className="fe fe-credit-card" /> <span>Payments</span>
                    </a>
                  </li>
                  <li className="menu-title">
                    <span>Quotations</span>
                  </li>
                  <li>
                    <a href="quotations.html">
                      <i className="fe fe-clipboard" /> <span>Quotations</span>
                    </a>
                  </li>
                  <li>
                    <a href="delivery-challans.html">
                      <i className="fe fe-file-text" />{" "}
                      <span>Delivery Challans</span>
                    </a>
                  </li>
                  <li className="menu-title">
                    <span>Reports</span>
                  </li>
                  <li>
                    <a href="payment-summary.html">
                      <i className="fe fe-credit-card" />{" "}
                      <span>Payment Summary</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-box" />
                      <span>Reports</span> <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="expense-report.html">Expense Report</a>
                      </li>
                      <li>
                        <a href="purchase-report.html">Purchase Report</a>
                      </li>
                      <li>
                        <a href="purchase-return.html">
                          Purchase Return Report
                        </a>
                      </li>
                      <li>
                        <a href="sales-report.html">Sales Report</a>
                      </li>
                      <li>
                        <a href="sales-return-report.html">
                          Sales Return Report
                        </a>
                      </li>
                      <li>
                        <a href="quotation-report.html">Quotation Report</a>
                      </li>
                      <li>
                        <a href="payment-report.html">Payment Report</a>
                      </li>
                      <li>
                        <a href="stock-report.html">Stock Report</a>
                      </li>
                      <li>
                        <a href="low-stock-report.html">Low Stock Report</a>
                      </li>
                      <li>
                        <a href="income-report.html">Income Report</a>
                      </li>
                      <li>
                        <a href="tax-purchase.html">Tax Report</a>
                      </li>
                      <li>
                        <a href="profit-loss-list.html">Profit &amp; Loss</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">
                    <span>User Management</span>
                  </li>
                  <li>
                    <a href="users.html">
                      <i className="fe fe-user" /> <span>Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="roles-permission.html">
                      <i className="fe fe-clipboard" />{" "}
                      <span>Roles &amp; Permission</span>
                    </a>
                  </li>
                  <li>
                    <a href="delete-account-request.html">
                      <i className="fe fe-trash-2" />{" "}
                      <span>Delete Account Request</span>
                    </a>
                  </li>
                  <li className="menu-title">
                    <span>Membership</span>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-book" /> <span> Membership</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
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
                      <i className="fe fe-folder" /> <span>Pages</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-book" /> <span> Blog</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
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
                      <i className="fe fe-map-pin" /> <span> Location</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
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
                      <i className="fe fe-message-square" />{" "}
                      <span>Testimonials</span>
                    </a>
                  </li>
                  <li>
                    <a href="faq.html">
                      <i className="fe fe-alert-circle" /> <span>FAQ</span>
                    </a>
                  </li>
                  <li className="menu-title">
                    <span>Support</span>
                  </li>
                  <li>
                    <a href="contact-messages.html">
                      <i className="fe fe-printer" />{" "}
                      <span>Contact Messages</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-save" /> <span> Tickets</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
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
                      <i className="fe fe-user" /> <span>Profile</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-lock" /> <span> Authentication </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
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
                      <i className="fe fe-x-square" /> <span>Error Pages</span>
                    </a>
                  </li>
                  <li>
                    <a href="blank-page.html">
                      <i className="fe fe-file" /> <span>Blank Page</span>
                    </a>
                  </li>
                  <li>
                    <a href="maps-vector.html">
                      <i className="fe fe-image" /> <span>Vector Maps</span>
                    </a>
                  </li>
                  <li className="menu-title">
                    <span>UI Interface</span>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-pocket" /> <span>Base UI </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
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
                      <i className="fe fe-box" /> <span>Elements </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="ribbon.html">Ribbon</a>
                      </li>
                      <li>
                        <a href="clipboard.html">Clipboard</a>
                      </li>
                      <li>
                        <a href="drag-drop.html">Drag &amp; Drop</a>
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
                        <a href="horizontal-timeline.html">
                          Horizontal Timeline
                        </a>
                      </li>
                      <li>
                        <a href="form-wizard.html">Form Wizard</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-bar-chart" /> <span> Charts </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
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
                      <i className="fe fe-award" /> <span> Icons </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
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
                      <i className="fe fe-sidebar" /> <span> Forms </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
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
                      <i className="fe fe-layout" /> <span> Tables </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
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
                    <a href="settings.html">
                      <i className="fe fe-settings" /> <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="fe fe-power" /> <span>Logout</span>
                    </a>
                  </li>
                  <li className="menu-title">
                    <span>Extras</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fe fe-file-text" />{" "}
                      <span>Documentation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fe fe-lock" /> <span>Change Log</span>{" "}
                      <span className="badge badge-primary ms-auto">
                        v2.0.4
                      </span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fa fa-list" /> <span>Multi Level</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li className="submenu">
                        <a href="#">
                          {" "}
                          <span>Level 1</span> <span className="menu-arrow" />
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
                              <span className="menu-arrow" />
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
                </ul>
              </nav>
              <ul className="sidebar-vertical">
                <li className="menu-title">
                  <span> </span>
                </li>
                {/* <li className="submenu">
                  <a href="#">
                    <i className="fe fe-home" /> <span> Dashboard</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="index.html">Admin Dashboard</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-grid" /> <span> Applications</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="chat.html">Chat</a>
                    </li>
                    <li>
                      <a href="calendar.html">Calendar</a>
                    </li>
                    <li>
                      <a href="inbox.html">Email</a>
                    </li>
                  </ul>
                </li> */}
                <li className="submenu">
                  <a href="/admin-dashboard" className="menu">
                    <i className="fe fe-user" /> <span> Super Admin</span>{" "}
                    <span className="menu-arrow" />
                  </a>

                  <li>
                    <a href="/admin-dashboard" className="menu">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/companies">Companies</a>
                  </li>
                  <li>
                    <a href="/subscription">Subscription</a>
                  </li>
                  <li>
                    <a href="/packages">Packages</a>
                  </li>
                  <li>
                    <a href="/domain">Domain</a>
                  </li>
                  <li>
                    <a href="/purchase-transaction">Purchase Transaction</a>
                  </li>
                </li>
                <li className="menu-title">
                  <span>Customers & Vendor</span>
                </li>
                <li className="menu">
                  <a href="/adm-add-customer">
                    <i className="fe fe-users" /> <span>Add Customers</span>
                  </a>
                </li>
                {/* <li>
                  <a href="customer-details.html">
                    <i className="fe fe-file" /> <span>Customer Details</span>
                  </a>
                </li> */}
                <li>
                  <a href="/adm-add-vendor">
                    <i className="fe fe-user" /> <span>Add Vendors</span>
                  </a>
                </li>
                {/* <li className="menu-title">
                  <span>Inventory</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-package" />{" "}
                    <span> Products / Services</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="product-list.html">Product List</a>
                    </li>
                    <li>
                      <a href="category.html">Category</a>
                    </li>
                    <li>
                      <a href="units.html">Units</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="inventory.html">
                    <i className="fe fe-user" /> <span>Inventory</span>
                  </a>
                </li>
                <li className="menu-title">
                  {" "}
                  <span>Signature</span>
                </li>
                <li>
                  <a href="signature-list.html">
                    <i className="fe fe-clipboard" />{" "}
                    <span>List of Signature</span>
                  </a>
                  <a href="signature-invoice.html">
                    <i className="fe fe-box" /> <span>Signature Invoice</span>
                  </a>
                </li> */}
                <li className="menu-title">
                  <span>Invoices</span>
                </li>
                <li className="active">
                  <a href="/adm-invoices">
                    <i className="fe fe-file" /> <span>Invoices</span>
                    <span className="menu-arrow" />
                  </a>
                  {/* <ul style={{ display: "none" }}> */}
                  {/* <li>
                      <a href="invoices.html">Invoices List</a>
                    </li>
                    <li>
                      <a href="invoice-details-admin.html">
                        Invoice Details (Admin)
                      </a>
                    </li>
                    <li>
                      <a href="invoice-details.html">
                        Invoice Details (Customer)
                      </a>
                    </li>
                    <li>
                      <a href="invoice-template.html">Invoice Templates</a>
                    </li> */}
                  {/* </ul> */}
                </li>
                <li>
                  <a href="/adm-add-invoice">
                    <i className="fe fe-folder" /> <span>Add Invoices</span>
                  </a>
                </li>
                {/* <li>
                  <a href="recurring-invoices.html">
                    <i className="fe fe-clipboard" />{" "}
                    <span>Recurring Invoices</span>
                  </a>
                </li>
                <li>
                  <a href="credit-notes.html">
                    <i className="fe fe-edit" /> <span>Credit Notes</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Purchases</span>
                </li>
                <li>
                  <a href="purchases.html">
                    <i className="fe fe-shopping-cart" /> <span>Purchases</span>
                  </a>
                </li>
                <li>
                  <a href="purchase-orders.html">
                    <i className="fe fe-shopping-bag" />{" "}
                    <span>Purchase Orders</span>
                  </a>
                </li>
                <li>
                  <a href="debit-notes.html">
                    <i className="fe fe-file-text" /> <span>Debit Notes</span>
                  </a>
                </li> */}
                <li className="menu-title">
                  <span>Finance &amp; Accounts</span>
                </li>
                <li className="menu">
                  <a href="/adm-expenses">
                    <i className="fe fe-file-plus" /> <span>Expenses</span>
                  </a>
                </li>
                <li className="menu">
                  <a href="/adm-add-expenses">
                    <i className="fe fe-credit-card" />{" "}
                    <span>Add Expenses</span>
                  </a>
                </li>
                {/* <li className="menu-title">
                  <span>Quotations</span>
                </li>
                <li>
                  <a href="quotations.html">
                    <i className="fe fe-clipboard" /> <span>Quotations</span>
                  </a>
                </li>
                <li>
                  <a href="delivery-challans.html">
                    <i className="fe fe-file-text" />{" "}
                    <span>Delivery Challans</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Reports</span>
                </li>
                <li>
                  <a href="payment-summary.html">
                    <i className="fe fe-credit-card" />{" "}
                    <span>Payment Summary</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-box" />
                    <span>Reports</span> <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="expense-report.html">Expense Report</a>
                    </li>
                    <li>
                      <a href="purchase-report.html">Purchase Report</a>
                    </li>
                    <li>
                      <a href="purchase-return.html">Purchase Return Report</a>
                    </li>
                    <li>
                      <a href="sales-report.html">Sales Report</a>
                    </li>
                    <li>
                      <a href="sales-return-report.html">Sales Return Report</a>
                    </li>
                    <li>
                      <a href="quotation-report.html">Quotation Report</a>
                    </li>
                    <li>
                      <a href="payment-report.html">Payment Report</a>
                    </li>
                    <li>
                      <a href="stock-report.html">Stock Report</a>
                    </li>
                    <li>
                      <a href="low-stock-report.html">Low Stock Report</a>
                    </li>
                    <li>
                      <a href="income-report.html">Income Report</a>
                    </li>
                    <li>
                      <a href="tax-purchase.html">Tax Report</a>
                    </li>
                    <li>
                      <a href="profit-loss-list.html">Profit &amp; Loss</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>User Management</span>
                </li>
                <li>
                  <a href="users.html">
                    <i className="fe fe-user" /> <span>Users</span>
                  </a>
                </li>
                <li>
                  <a href="roles-permission.html">
                    <i className="fe fe-clipboard" />{" "}
                    <span>Roles &amp; Permission</span>
                  </a>
                </li>
                <li>
                  <a href="delete-account-request.html">
                    <i className="fe fe-trash-2" />{" "}
                    <span>Delete Account Request</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Membership</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-book" /> <span> Membership</span>{" "}
                    <span className="menu-arrow" />
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
                    <i className="fe fe-folder" /> <span>Pages</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-book" /> <span> Blog</span>{" "}
                    <span className="menu-arrow" />
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
                    <i className="fe fe-map-pin" /> <span> Location</span>{" "}
                    <span className="menu-arrow" />
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
                    <i className="fe fe-message-square" />{" "}
                    <span>Testimonials</span>
                  </a>
                </li>
                <li>
                  <a href="faq.html">
                    <i className="fe fe-alert-circle" /> <span>FAQ</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Support</span>
                </li>
                <li>
                  <a href="contact-messages.html">
                    <i className="fe fe-printer" />{" "}
                    <span>Contact Messages</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-save" /> <span> Tickets</span>{" "}
                    <span className="menu-arrow" />
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
                </li> */}
                {/* <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li>
                  <a href="profile.html">
                    <i className="fe fe-user" /> <span>Profile</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-lock" /> <span> Authentication </span>{" "}
                    <span className="menu-arrow" />
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
                    <i className="fe fe-x-square" /> <span>Error Pages</span>
                  </a>
                </li>
                <li>
                  <a href="blank-page.html">
                    <i className="fe fe-file" /> <span>Blank Page</span>
                  </a>
                </li>
                <li>
                  <a href="maps-vector.html">
                    <i className="fe fe-image" /> <span>Vector Maps</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-pocket" /> <span>Base UI </span>{" "}
                    <span className="menu-arrow" />
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
                    <i className="fe fe-box" /> <span>Elements </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="ribbon.html">Ribbon</a>
                    </li>
                    <li>
                      <a href="clipboard.html">Clipboard</a>
                    </li>
                    <li>
                      <a href="drag-drop.html">Drag &amp; Drop</a>
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
                    <i className="fe fe-bar-chart" /> <span> Charts </span>{" "}
                    <span className="menu-arrow" />
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
                    <i className="fe fe-award" /> <span> Icons </span>{" "}
                    <span className="menu-arrow" />
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
                    <i className="fe fe-sidebar" /> <span> Forms </span>{" "}
                    <span className="menu-arrow" />
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
                    <i className="fe fe-layout" /> <span> Tables </span>{" "}
                    <span className="menu-arrow" />
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
                  <a href="settings.html">
                    <i className="fe fe-settings" /> <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="fe fe-power" /> <span>Logout</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Extras</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fe fe-file-text" /> <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fe fe-lock" /> <span>Change Log</span>{" "}
                    <span className="badge badge-primary ms-auto">v2.0.4</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fa fa-list" /> <span>Multi Level</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li className="submenu">
                      <a href="#">
                        {" "}
                        <span>Level 1</span> <span className="menu-arrow" />
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
                            <span className="menu-arrow" />
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
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="content-page-header">
                <h5>Invoices</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <a
                        className="btn btn-filters w-auto popup-toggle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Filter"
                      >
                        <span className="me-2">
                          <img
                            src="assets/img/icons/filter-icon.svg"
                            alt="filter"
                          />
                        </span>
                        Filter{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn-filters"
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Settings"
                      >
                        <span>
                          <i className="fe fe-settings" />
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a className="btn btn-primary" href="/add-invoice">
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        New Invoice
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="filter_inputs" className="card filter-card">
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Email</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Phone</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                <div className="card inovices-card w-100">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="inovices-widget-icon bg-info-light">
                        <img
                          src="assets/img/icons/receipt-item.svg"
                          alt="invoice"
                        />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Total Invoice</div>
                        <div className="dash-counts">
                          <p>$298</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="inovices-all">
                        No of Invoice{" "}
                        <span className="rounded-circle bg-light-gray">02</span>
                      </p>
                      <p className="inovice-trending text-success-light">
                        02{" "}
                        <span className="ms-2">
                          <i className="fe fe-trending-up" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                <div className="card inovices-card w-100">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="inovices-widget-icon bg-primary-light">
                        <img
                          src="assets/img/icons/transaction-minus.svg"
                          alt="invoice"
                        />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Outstanding</div>
                        <div className="dash-counts">
                          <p>$325,215</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="inovices-all">
                        No of Invoice{" "}
                        <span className="rounded-circle bg-light-gray">03</span>
                      </p>
                      <p className="inovice-trending text-success-light">
                        04{" "}
                        <span className="ms-2">
                          <i className="fe fe-trending-up" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                <div className="card inovices-card w-100">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="inovices-widget-icon bg-warning-light">
                        <img
                          src="assets/img/icons/archive-book.svg"
                          alt="archivebook"
                        />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Total Overdue</div>
                        <div className="dash-counts">
                          <p>$7825</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="inovices-all">
                        No of Invoice{" "}
                        <span className="rounded-circle bg-light-gray">01</span>
                      </p>
                      <p className="inovice-trending text-danger-light">
                        03{" "}
                        <span className="ms-2">
                          <i className="fe fe-trending-down" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                <div className="card inovices-card w-100">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="inovices-widget-icon bg-primary-light">
                        <img
                          src="assets/img/icons/clipboard-close.svg"
                          alt="clipboard"
                        />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Cancelled</div>
                        <div className="dash-counts">
                          <p>100</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="inovices-all">
                        No of Invoice{" "}
                        <span className="rounded-circle bg-light-gray">04</span>
                      </p>
                      <p className="inovice-trending text-danger-light">
                        05{" "}
                        <span className="ms-2">
                          <i className="fe fe-trending-down" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                <div className="card inovices-card w-100">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="inovices-widget-icon bg-green-light">
                        <img
                          src="assets/img/icons/message-edit.svg"
                          alt="message"
                        />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Draft</div>
                        <div className="dash-counts">
                          <p>$125,586</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="inovices-all">
                        No of Invoice{" "}
                        <span className="rounded-circle bg-light-gray">06</span>
                      </p>
                      <p className="inovice-trending text-danger-light">
                        02{" "}
                        <span className="ms-2">
                          <i className="fe fe-trending-down" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                <div className="card inovices-card w-100">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="inovices-widget-icon bg-danger-light">
                        <img
                          src="assets/img/icons/3d-rotate.svg"
                          alt="invoice"
                        />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Recurring</div>
                        <div className="dash-counts">
                          <p>$86,892</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="inovices-all">
                        No of Invoice{" "}
                        <span className="rounded-circle bg-light-gray">03</span>
                      </p>
                      <p className="inovice-trending text-success-light">
                        02{" "}
                        <span className="ms-2">
                          <i className="fe fe-trending-up" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card invoices-tabs-card">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <a href="invoices.html" className="active">
                            All
                          </a>
                        </li>
                        {/* <li><a href="invoices-paid.html">Paid</a></li>
                                  <li><a href="invoices-overdue.html">Overdue</a></li>
                                  <li><a href="invoices-cancelled.html">Cancelled</a></li>
                                  <li><a href="invoices-recurring.html">Partially Paid</a></li>
                                  <li><a href="invoices-unpaid.html">Unpaid</a></li>
                                  <li><a href="invoices-refunded.html">Refunded</a></li>
                                  <li><a href="invoices-draft.html">Draft</a></li> */}
                        <li>
                          <a href="invoices.html">NON GST</a>
                        </li>
                        <li>
                          <a href="invoices.html">EXPORT</a>
                        </li>
                        <li>
                          <a href="invoices.html">DEEMED EXPORT</a>
                        </li>
                        <li>
                          <a href="invoices.html">SEZ</a>
                        </li>
                        <li>
                          <a href="invoices.html">NIL RATED</a>
                        </li>
                        <li>
                          <a href="invoices.html">EXEMPT</a>
                        </li>
                        <li>
                          <a href="invoices-paid.html" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-stripped table-hover datatable">
                        <thead className="thead-light">
                          <tr>
                            <th>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                              Invoice NO
                            </th>
                            {/* <th>Category</th>
                                          <th>Created On</th>
                                          <th>Invoice To</th>
                                          <th>Total</th>
                                          <th>Paid</th>
                                          <th>Payment Mode</th>
                                          <th>Balance</th>
                                          <th>Due Date</th>
                                          <th>Status</th> */}
                            <th>GST NO / State (In case of no GSTIN)</th>
                            <th>Party's Name</th>
                            <th>Invoice Date</th>
                            <th>Goods / Service</th>
                            <th>Taxable Value</th>
                            <th>HSN/SAC Code</th>
                            <th>Quantity</th>
                            <th>
                              UQC
                              <div className="input-group input-group-sm">
                                <select
                                  className="form-select"
                                  style={{ width: 100 }}
                                >
                                  <option value="select">select</option>
                                  <option value="NO OF PCS">NO OF PCS</option>
                                  <option value="KG">KG</option>
                                  <option value="METER">METER</option>
                                  <option value="DOZEN">DOZEN</option>
                                  <option value="LITER">LITER</option>
                                  <option value="ETC">ETC</option>
                                </select>
                              </div>
                            </th>
                            <th>GST RATE</th>
                            <th className="text-end">Action</th>
                            <th>IGST</th>
                            <th>CGST / UTGST</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                              <a
                                href="invoice-details.html"
                                className="invoice-link"
                              >
                                #4987
                              </a>
                            </td>
                            <td>Advertising</td>
                            <td>23 Mar 2023</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-14.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">
                                  John Smith <span>+1 843-443-3282</span>
                                </a>
                              </h2>
                            </td>
                            <td>$1,54,220</td>
                            <td>$1,50,000</td>
                            <td>Cash</td>
                            <td>$0</td>
                            <td>-</td>
                            <td>
                              <span className="badge bg-success-light">
                                Paid
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="btn-action-icon"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-v" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end customer-dropdown">
                                  <a
                                    className="dropdown-item"
                                    href="edit-invoice.html"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="invoice-details.html"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_modal"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View Delivery Challans
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-send me-2" />
                                    Send
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-download me-2" />
                                    Download
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="add-credit-notes.html"
                                  >
                                    <i className="fe fe-file-text me-2" />
                                    Convert to Sales Return
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-copy me-2" />
                                    Clone as Invoice
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                              <a
                                href="invoice-details.html"
                                className="invoice-link"
                              >
                                #4988
                              </a>
                            </td>
                            <td>Food</td>
                            <td>16 Mar 2023</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-15.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">
                                  Johnny <span>+1 917-409-0861</span>
                                </a>
                              </h2>
                            </td>
                            <td>$3,54,220</td>
                            <td>$2,50,000</td>
                            <td>Cheque</td>
                            <td>$4,220</td>
                            <td>16 Jan 2023</td>
                            <td>
                              <span className="badge bg-warning-light text-warning">
                                Overdue
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="btn-action-icon"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-v" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end customer-dropdown">
                                  <a
                                    className="dropdown-item"
                                    href="edit-invoice.html"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="invoice-details.html"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_modal"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View Delivery Challans
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-send me-2" />
                                    Send
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-download me-2" />
                                    Download
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="add-credit-notes.html"
                                  >
                                    <i className="fe fe-file-text me-2" />
                                    Convert to Sales Return
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-copy me-2" />
                                    Clone as Invoice
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                              <a
                                href="invoice-details.html"
                                className="invoice-link"
                              >
                                #4989
                              </a>
                            </td>
                            <td>Marketing</td>
                            <td>25 Feb 2023</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-16.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">
                                  Robert <span>+1 956-623-2880</span>
                                </a>
                              </h2>
                            </td>
                            <td>$1,54,220</td>
                            <td>$1,50,000</td>
                            <td>Cash</td>
                            <td>$4,220</td>
                            <td>16 Jan 2023</td>
                            <td>
                              <span className="badge bg-danger-light">
                                Cancelled
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="btn-action-icon"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-v" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end customer-dropdown">
                                  <a
                                    className="dropdown-item"
                                    href="edit-invoice.html"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="invoice-details.html"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_modal"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View Delivery Challans
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-send me-2" />
                                    Send
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-download me-2" />
                                    Download
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="add-credit-notes.html"
                                  >
                                    <i className="fe fe-file-text me-2" />
                                    Convert to Sales Return
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-copy me-2" />
                                    Clone as Invoice
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                              <a
                                href="invoice-details.html"
                                className="invoice-link"
                              >
                                #4990
                              </a>
                            </td>
                            <td>Repairs</td>
                            <td>25 Mar 2023</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-17.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">
                                  Sharonda <span>+1 707-439-1732</span>
                                </a>
                              </h2>
                            </td>
                            <td>$1,54,220</td>
                            <td>$1,50,000</td>
                            <td>Cash</td>
                            <td>$4,220</td>
                            <td>12 May 2023</td>
                            <td>
                              <span className="badge bg-primary-light">
                                Partially Paid
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="btn-action-icon"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-v" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end customer-dropdown">
                                  <a
                                    className="dropdown-item"
                                    href="edit-invoice.html"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="invoice-details.html"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_modal"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View Delivery Challans
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-send me-2" />
                                    Send
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-download me-2" />
                                    Download
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="add-credit-notes.html"
                                  >
                                    <i className="fe fe-file-text me-2" />
                                    Convert to Sales Return
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-copy me-2" />
                                    Clone as Invoice
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                              <a
                                href="invoice-details.html"
                                className="invoice-link"
                              >
                                #4991
                              </a>
                            </td>
                            <td>Software</td>
                            <td>12 May 2022</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-18.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">
                                  Pricilla <span>+1 559-741-9672</span>
                                </a>
                              </h2>
                            </td>
                            <td>$5,54,220</td>
                            <td>$3,50,000</td>
                            <td>Cheque</td>
                            <td>$4,220</td>
                            <td>18 May 2022</td>
                            <td>
                              <span className="badge bg-light-gray text-secondary">
                                Unpaid
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="btn-action-icon"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-v" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end customer-dropdown">
                                  <a
                                    className="dropdown-item"
                                    href="edit-invoice.html"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="invoice-details.html"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_modal"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View Delivery Challans
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-send me-2" />
                                    Send
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-download me-2" />
                                    Download
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="add-credit-notes.html"
                                  >
                                    <i className="fe fe-file-text me-2" />
                                    Convert to Sales Return
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-copy me-2" />
                                    Clone as Invoice
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                              <a
                                href="invoice-details.html"
                                className="invoice-link"
                              >
                                #4992
                              </a>
                            </td>
                            <td>Stationary</td>
                            <td>16 Nov 2022</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-19.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">
                                  Randall <span>+1 989-438-3131</span>
                                </a>
                              </h2>
                            </td>
                            <td>$5,54,220</td>
                            <td>$6,50,000</td>
                            <td>Cash</td>
                            <td>$4,220</td>
                            <td>25 Feb 2022</td>
                            <td>
                              <span className="badge bg-info-lights">
                                Refunded
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="btn-action-icon"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-v" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end customer-dropdown">
                                  <a
                                    className="dropdown-item"
                                    href="edit-invoice.html"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="invoice-details.html"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_modal"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View Delivery Challans
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-send me-2" />
                                    Send
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-download me-2" />
                                    Download
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="add-credit-notes.html"
                                  >
                                    <i className="fe fe-file-text me-2" />
                                    Convert to Sales Return
                                  </a>
                                  <a className="dropdown-item" href="">
                                    <i className="fe fe-copy me-2" />
                                    Clone as Invoice
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                                      2024 © All Rights Reserved | Cooked with
                                      ❤️ by Psyber Inc
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmInvoices;
