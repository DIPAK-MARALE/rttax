/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const UserDashboard = () => {
  return (
    <>
      {/* Mirrored from kanakku.dreamstechnologies.com/html/template/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 11 Apr 2024 05:56:56 GMT */}
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
            "@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:100;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:200;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:300;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:400;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:500;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:600;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:700;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:800;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek-ext/wght/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Inter;font-style:normal;font-weight:900;src:url(https://kanakku.dreamstechnologies.com/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}",
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
            <img
              src="assets/img/logo.png"
              className="img-fluid logo2"
              alt="Logo"
            />
          </a>
          <div className="main-logo d-inline float-start d-lg-flex align-items-center d-none d-sm-none d-md-none">
            <div className="logo-white">
              <a href="/user-dashboard">
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
                    <span>Main</span>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-home" /> <span> Dashboard</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="index.html" className="active">
                          Admin Dashboard
                        </a>
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
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fe fe-user" /> <span> Super Admin</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="dashboard.html">Dashboard</a>
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
                      <i className="fe fe-users" />
                      <span>Customers</span> <span className="menu-arrow" />
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
                      <i className="fe fe-file-plus" />
                      <span>Signature</span> <span className="menu-arrow" />
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
                        <a href="payment-report-2.html">Payment Report</a>
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
                  <li>
                    <a href="login.html">
                      <i className="fe fe-power" /> <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <ul className="sidebar-vertical">
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-home" /> <span> Dashboard</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a className="active" href="index.html">
                        Admin Dashboard
                      </a>
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
                </li>
                <li className="submenu">
                  <a href="#" className="">
                    <i className="fe fe-user" /> <span> Super Admin</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="dashboard.html">Dashboard</a>
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
                <li className="menu-title">
                  <span>Customer</span>
                </li>
                <li>
                  <a href="/add-customer">
                    <i className="fe fe-users" /> <span>Add Customers</span>
                  </a>
                </li>
                <li>
                  <a href="customer-details.html">
                    <i className="fe fe-file" /> <span>Customer Details</span>
                  </a>
                </li>
                <li>
                  <a href="vendors.html">
                    <i className="fe fe-user" /> <span>Vendors</span>
                  </a>
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
                </li>
                <li className="menu-title">
                  <span>Sales</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fe fe-file" /> <span>Invoices</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="dash-widget-icon bg-1">
                        <i className="fas fa-dollar-sign" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Amount Due</div>
                        <div className="dash-counts">
                          <p>1,642</p>
                        </div>
                      </div>
                    </div>
                    <div className="progress progress-sm mt-3">
                      <div
                        className="progress-bar bg-5"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="text-muted mt-3 mb-0">
                      <span className="text-danger me-1">
                        <i className="fas fa-arrow-down me-1" />
                        1.15%
                      </span>{" "}
                      since last week
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="dash-widget-icon bg-2">
                        <i className="fas fa-users" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Customers</div>
                        <div className="dash-counts">
                          <p>3,642</p>
                        </div>
                      </div>
                    </div>
                    <div className="progress progress-sm mt-3">
                      <div
                        className="progress-bar bg-6"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="text-muted mt-3 mb-0">
                      <span className="text-success me-1">
                        <i className="fas fa-arrow-up me-1" />
                        2.37%
                      </span>{" "}
                      since last week
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="dash-widget-icon bg-3">
                        <i className="fas fa-file-alt" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Invoices</div>
                        <div className="dash-counts">
                          <p>1,041</p>
                        </div>
                      </div>
                    </div>
                    <div className="progress progress-sm mt-3">
                      <div
                        className="progress-bar bg-7"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="text-muted mt-3 mb-0">
                      <span className="text-success me-1">
                        <i className="fas fa-arrow-up me-1" />
                        3.77%
                      </span>{" "}
                      since last week
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="dash-widget-header">
                      <span className="dash-widget-icon bg-4">
                        <i className="far fa-file" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Estimates</div>
                        <div className="dash-counts">
                          <p>2,150</p>
                        </div>
                      </div>
                    </div>
                    <div className="progress progress-sm mt-3">
                      <div
                        className="progress-bar bg-8"
                        role="progressbar"
                        style={{ width: "45%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="text-muted mt-3 mb-0">
                      <span className="text-danger me-1">
                        <i className="fas fa-arrow-down me-1" />
                        8.68%
                      </span>{" "}
                      since last week
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-7 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">Sales Analytics</h5>
                      <div className="dropdown main">
                        <button
                          className="btn btn-white btn-sm dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Monthly
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <li>
                            <a href="#" className="dropdown-item">
                              Weekly
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              Monthly
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              Yearly
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
                      <div className="w-md-100 d-flex align-items-center mb-3 flex-wrap flex-md-nowrap">
                        <div>
                          <span>Total Sales</span>
                          <p className="h3 text-primary me-5">$1000</p>
                        </div>
                        <div>
                          <span>Receipts</span>
                          <p className="h3 text-success me-5">$1000</p>
                        </div>
                        <div>
                          <span>Expenses</span>
                          <p className="h3 text-danger me-5">$300</p>
                        </div>
                        <div>
                          <span>Earnings</span>
                          <p className="h3 text-dark me-5">$700</p>
                        </div>
                      </div>
                    </div>
                    <div id="sales_chart" />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">Invoice Analytics</h5>
                      <div className="dropdown main">
                        <button
                          className="btn btn-white btn-sm dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Monthly
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a href="#" className="dropdown-item">
                              Weekly
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              Monthly
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              Yearly
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="invoice_chart" />
                    <div className="text-center text-muted">
                      <div className="row">
                        <div className="col-4">
                          <div className="mt-4">
                            <p className="mb-2 text-truncate">
                              <i className="fas fa-circle text-primary me-1" />{" "}
                              Invoiced
                            </p>
                            <h5>$2,132</h5>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mt-4">
                            <p className="mb-2 text-truncate">
                              <i className="fas fa-circle text-success me-1" />{" "}
                              Received
                            </p>
                            <h5>$1,763</h5>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mt-4">
                            <p className="mb-2 text-truncate">
                              <i className="fas fa-circle text-danger me-1" />{" "}
                              Pending
                            </p>
                            <h5>$973</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="card mb-0">
                  <div className="card-header">
                    <div className="row align-center">
                      <div className="col">
                        <h5 className="card-title">Recent Invoices</h5>
                      </div>
                      <div className="col-auto">
                        <a
                          href="invoices.html"
                          className="btn-right btn btn-sm btn-outline-primary"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="progress progress-md rounded-pill mb-3">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "47%" }}
                          aria-valuenow={47}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "28%" }}
                          aria-valuenow={28}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "15%" }}
                          aria-valuenow={15}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="row">
                        <div className="col-auto">
                          <i className="fas fa-circle text-success me-1" /> Paid
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-circle text-warning me-1" />{" "}
                          Unpaid
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-circle text-danger me-1" />{" "}
                          Overdue
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-circle text-info me-1" /> Draft
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-stripped table-hover">
                        <thead className="thead-light">
                          <tr>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-04.jpg"
                                    alt="User Image"
                                  />
                                  Barbara Moore
                                </a>
                              </h2>
                            </td>
                            <td>$118</td>
                            <td>23 Nov 2020</td>
                            <td>
                              <span className="badge bg-success-light">
                                Paid
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
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
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as sent
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-paper-plane me-2" />
                                    Send Invoice
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-copy me-2" />
                                    Clone Invoice
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-06.jpg"
                                    alt="User Image"
                                  />
                                  Karlene Chaidez
                                </a>
                              </h2>
                            </td>
                            <td>$222</td>
                            <td>18 Nov 2020</td>
                            <td>
                              <span className="badge bg-info-light text-info">
                                Sent
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
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
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as sent
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-paper-plane me-2" />
                                    Send Invoice
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-copy me-2" />
                                    Clone Invoice
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-08.jpg"
                                    alt="User Image"
                                  />
                                  Russell Copeland
                                </a>
                              </h2>
                            </td>
                            <td>$347</td>
                            <td>10 Nov 2020</td>
                            <td>
                              <span className="badge bg-warning-light text-warning">
                                Partially Paid
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
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
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as sent
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-paper-plane me-2" />
                                    Send Invoice
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-copy me-2" />
                                    Clone Invoice
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-10.jpg"
                                    alt="User Image"
                                  />
                                  Joseph Collins
                                </a>
                              </h2>
                            </td>
                            <td>$826</td>
                            <td>25 Sep 2020</td>
                            <td>
                              <span className="badge bg-danger-light">
                                Overdue
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
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
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as sent
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-paper-plane me-2" />
                                    Send Invoice
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-copy me-2" />
                                    Clone Invoice
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-11.jpg"
                                    alt="User Image"
                                  />
                                  Jennifer Floyd
                                </a>
                              </h2>
                            </td>
                            <td>$519</td>
                            <td>18 Sep 2020</td>
                            <td>
                              <span className="badge bg-success-light">
                                Paid
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
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
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as sent
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-paper-plane me-2" />
                                    Send Invoice
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-copy me-2" />
                                    Clone Invoice
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="card mb-0">
                  <div className="card-header">
                    <div className="row align-center">
                      <div className="col">
                        <h5 className="card-title">Recent Estimates</h5>
                      </div>
                      <div className="col-auto">
                        <a
                          href="invoice-details.html"
                          className="btn-right btn btn-sm btn-outline-primary"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="progress progress-md rounded-pill mb-3">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "39%" }}
                          aria-valuenow={39}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow={35}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "26%" }}
                          aria-valuenow={26}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="row">
                        <div className="col-auto">
                          <i className="fas fa-circle text-success me-1" /> Sent
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-circle text-warning me-1" />{" "}
                          Draft
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-circle text-danger me-1" />{" "}
                          Expired
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="thead-light">
                          <tr>
                            <th>Customer</th>
                            <th>Expiry Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-05.jpg"
                                    alt="User Image"
                                  />{" "}
                                  Greg Lynch
                                </a>
                              </h2>
                            </td>
                            <td>5 Nov 2020</td>
                            <td>$175</td>
                            <td>
                              <span className="badge bg-info-light text-info">
                                Sent
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="edit-invoice.html"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="invoice-details.html"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-file-alt me-2" />
                                    Convert to Invoice
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as sent
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-paper-plane me-2" />
                                    Send Estimate
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as Accepted
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-times-circle me-2" />
                                    Mark as Rejected
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-06.jpg"
                                    alt="User Image"
                                  />{" "}
                                  Karlene Chaidez
                                </a>
                              </h2>
                            </td>
                            <td>28 Oct 2020</td>
                            <td>$1500</td>
                            <td>
                              <span className="badge bg-warning-light text-warning">
                                Expired
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="edit-invoice.html"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="invoice-details.html"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-file-alt me-2" />
                                    Convert to Invoice
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as sent
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-paper-plane me-2" />
                                    Send Estimate
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as Accepted
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-times-circle me-2" />
                                    Mark as Rejected
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-07.jpg"
                                    alt="User Image"
                                  />{" "}
                                  John Blair
                                </a>
                              </h2>
                            </td>
                            <td>17 Oct 2020</td>
                            <td>$2350</td>
                            <td>
                              <span className="badge bg-success-light">
                                Accepted
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="edit-invoice.html"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="invoice-details.html"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-file-alt me-2" />
                                    Convert to Invoice
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as sent
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-paper-plane me-2" />
                                    Send Estimate
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as Accepted
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-times-circle me-2" />
                                    Mark as Rejected
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-08.jpg"
                                    alt="User Image"
                                  />{" "}
                                  Russell Copeland
                                </a>
                              </h2>
                            </td>
                            <td>8 Oct 2020</td>
                            <td>$1890</td>
                            <td>
                              <span className="badge bg-success-light">
                                Accepted
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="edit-invoice.html"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="invoice-details.html"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-file-alt me-2" />
                                    Convert to Invoice
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as sent
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-paper-plane me-2" />
                                    Send Estimate
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as Accepted
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-times-circle me-2" />
                                    Mark as Rejected
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html">
                                  <img
                                    className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-09.jpg"
                                    alt="User Image"
                                  />{" "}
                                  Leatha Bailey
                                </a>
                              </h2>
                            </td>
                            <td>30 Sep 2020</td>
                            <td>$785</td>
                            <td>
                              <span className="badge bg-success-light">
                                Accepted
                              </span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="edit-invoice.html"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="invoice-details.html"
                                  >
                                    <i className="far fa-eye me-2" />
                                    View
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-file-alt me-2" />
                                    Convert to Invoice
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as sent
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-paper-plane me-2" />
                                    Send Estimate
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as Accepted
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-times-circle me-2" />
                                    Mark as Rejected
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        className="offcanvas offcanvas-end border-0 "
        tabIndex={-1}
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
          <div data-simplebar="" className="h-100">
            <div className="settings-mains">
              <div className="layout-head">
                <h5>Layout</h5>
                <h6>Choose your layout</h6>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-check card-radio p-0">
                    <input
                      id="customizer-layout01"
                      name="data-layout"
                      type="radio"
                      defaultValue="vertical"
                      className="form-check-input"
                    />
                    <label
                      className="form-check-label avatar-md w-100"
                      htmlFor="customizer-layout01"
                    >
                      <img src="assets/img/vertical.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Vertical</h5>
                </div>
                <div className="col-4">
                  <div className="form-check card-radio p-0">
                    <input
                      id="customizer-layout02"
                      name="data-layout"
                      type="radio"
                      defaultValue="horizontal"
                      className="form-check-input"
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="customizer-layout02"
                    >
                      <img src="assets/img/horizontal.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Horizontal</h5>
                </div>
                <div className="col-4 d-none">
                  <div className="form-check card-radio p-0">
                    <input
                      id="customizer-layout03"
                      name="data-layout"
                      type="radio"
                      defaultValue="twocolumn"
                      className="form-check-input"
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="customizer-layout03"
                    >
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
                    <label htmlFor="rtl" className="checktoggle checkbox-bg">
                      checkbox
                    </label>
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
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-blue"
                        defaultValue="blue"
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="layout-mode-blue"
                      >
                        <img src="assets/img/vertical.png" alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 mb-2">Blue</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-light"
                        defaultValue="light"
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="layout-mode-light"
                      >
                        <img src="assets/img/vertical.png" alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 mb-2">Light</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio dark  p-0 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-dark"
                        defaultValue="dark"
                      />
                      <label
                        className="form-check-label avatar-md w-100 "
                        htmlFor="layout-mode-dark"
                      >
                        <img src="assets/img/vertical.png" alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 mb-2">Dark</h5>
                  </div>
                  <div className="col-4 d-none">
                    <div className="form-check card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-orange"
                        defaultValue="orange"
                      />
                      <label
                        className="form-check-label  avatar-md w-100 "
                        htmlFor="layout-mode-orange"
                      >
                        <img src="assets/img/vertical.png" alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 mb-2">Orange</h5>
                  </div>
                  <div className="col-4 d-none">
                    <div className="form-check card-radio maroon p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-maroon"
                        defaultValue="maroon"
                      />
                      <label
                        className="form-check-label  avatar-md w-100 "
                        htmlFor="layout-mode-maroon"
                      >
                        <img src="assets/img/vertical.png" alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 mb-2">Brink Pink</h5>
                  </div>
                  <div className="col-4 d-none">
                    <div className="form-check card-radio purple p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-purple"
                        defaultValue="purple"
                      />
                      <label
                        className="form-check-label  avatar-md w-100 "
                        htmlFor="layout-mode-purple"
                      >
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
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-width"
                        id="layout-width-fluid"
                        defaultValue="fluid"
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="layout-width-fluid"
                      >
                        <img src="assets/img/vertical.png" alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Fluid</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio p-0 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-width"
                        id="layout-width-boxed"
                        defaultValue="boxed"
                      />
                      <label
                        className="form-check-label avatar-md w-100 px-2"
                        htmlFor="layout-width-boxed"
                      >
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
                <div
                  className="btn-group bor-rad-50 overflow-hidden radio"
                  role="group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="data-layout-position"
                    id="layout-position-fixed"
                    defaultValue="fixed"
                  />
                  <label
                    className="btn btn-light w-sm"
                    htmlFor="layout-position-fixed"
                  >
                    Fixed
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="data-layout-position"
                    id="layout-position-scrollable"
                    defaultValue="scrollable"
                  />
                  <label
                    className="btn btn-light w-sm ms-0"
                    htmlFor="layout-position-scrollable"
                  >
                    Scrollable
                  </label>
                </div>
              </div>
              <div className="layout-head pt-3">
                <h5>Topbar Color</h5>
                <h6>Choose Light or Dark Topbar Color.</h6>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-check card-radio  p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-topbar"
                      id="topbar-color-light"
                      defaultValue="light"
                    />
                    <label
                      className="form-check-label avatar-md w-100"
                      htmlFor="topbar-color-light"
                    >
                      <img src="assets/img/vertical.png" alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Light</h5>
                </div>
                <div className="col-4">
                  <div className="form-check card-radio p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-topbar"
                      id="topbar-color-dark"
                      defaultValue="dark"
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="topbar-color-dark"
                    >
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
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar-size"
                        id="sidebar-size-default"
                        defaultValue="lg"
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="sidebar-size-default"
                      >
                        <img src="assets/img/vertical.png" alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Default</h5>
                  </div>
                  <div className="col-4 d-none">
                    <div className="form-check sidebar-setting card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar-size"
                        id="sidebar-size-compact"
                        defaultValue="md"
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="sidebar-size-compact"
                      >
                        <img src="assets/img/compact.png" alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Compact</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check sidebar-setting card-radio p-0 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar-size"
                        id="sidebar-size-small-hover"
                        defaultValue="md"
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="sidebar-size-small-hover"
                      >
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
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-style"
                        id="sidebar-view-default"
                        defaultValue="default"
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="sidebar-view-default"
                      >
                        <img src="assets/img/compact.png" alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Default</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check sidebar-setting card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-style"
                        id="sidebar-view-detached"
                        defaultValue="detached"
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="sidebar-view-detached"
                      >
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
                    <div
                      className="form-check sidebar-setting card-radio p-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBgGradient.show"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar"
                        id="sidebar-color-light"
                        defaultValue="light"
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="sidebar-color-light"
                      >
                        <span className="bg-light bg-sidebarcolor" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Light</h5>
                  </div>
                  <div className="col-4">
                    <div
                      className="form-check sidebar-setting card-radio p-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBgGradient.show"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar"
                        id="sidebar-color-dark"
                        defaultValue="dark"
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="sidebar-color-dark"
                      >
                        <span className="bg-darks bg-sidebarcolor" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Dark</h5>
                  </div>
                  <div className="col-4 d-none">
                    <div className="form-check sidebar-setting card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar"
                        id="sidebar-color-gradient"
                        defaultValue="gradient"
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="sidebar-color-gradient"
                      >
                        <span className="bg-gradients bg-sidebarcolor" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Gradient</h5>
                  </div>
                  <div className="col-4 d-none">
                    <button
                      className="btn btn-link avatar-md w-100 p-0 overflow-hidden border collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBgGradient"
                      aria-expanded="false"
                    >
                      <span className="d-flex gap-1 h-100">
                        <span className="flex-shrink-0">
                          <span className="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
                            <span className="d-block p-1 px-2 bg-soft-light rounded mb-2" />
                            <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                            <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                            <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                          </span>
                        </span>
                        <span className="flex-grow-1">
                          <span className="d-flex h-100 flex-column">
                            <span className="bg-light d-block p-1" />
                            <span className="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </button>
                    <h5 className="fs-13 text-center mt-2">Gradient</h5>
                  </div>
                </div>
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
      {/* Mirrored from kanakku.dreamstechnologies.com/html/template/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 11 Apr 2024 05:57:03 GMT */}
    </>
  );
};

export default UserDashboard;