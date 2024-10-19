import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Home from "./Home";
import AboutPage from "./AboutPage";
import FeaturePage from "./FeaturePage";
import ShopPage from "./ShopPage";
import TestimonialPage from "./TestimonialPage";
import ErrorPage from "./ErrorPage";
import ContactUsPage from "./ContactUsPage";

import AdminHome from "../Admin/Home/AdminHome";

import AdminMaincategory from "../Admin/Maincategory/AdminMaincategory";
import AdminCreateMaincategory from "../Admin/Maincategory/AdminCreateMaincategory";
import AdminUpdateMaincategory from "../Admin/Maincategory/AdminUpdateMaincategory";

import AdminSubcategory from "../Admin/Subcategory/AdminSubcategory";
import AdminCreateSubcategory from "../Admin/Subcategory/AdminCreateSubcategory";
import AdminUpdateSubcategory from "../Admin/Subcategory/AdminUpdateSubcategory";

import AdminBrand from "../Admin/Brand/AdminBrand";
import AdminCreateBrand from "../Admin/Brand/AdminCreateBrand";
import AdminUpdateBrand from "../Admin/Brand/AdminUpdateBrand";
import AdminTestimonial from "../Admin/Testimonial/AdminTestimonial";
import AdminCreateTestimonial from "../Admin/Testimonial/AdminCreateTestimonial";
import AdminUpdateTestimonial from "../Admin/Testimonial/AdminUpdateTestimonial";
import AdminProduct from "../Admin/Product/AdminProduct";
import AdminCreateProduct from "../Admin/Product/AdminCreateProduct";
import AdminUpdateProduct from "../Admin/Product/AdminUpdateProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminHome />} />

          {/* Admin Maincategory routes  */}
          <Route path="/admin/maincategory" element={<AdminMaincategory />} />
          <Route
            path="/admin/maincategory/create"
            element={<AdminCreateMaincategory />}
          />
          <Route
            path="/admin/maincategory/update/:id"
            element={<AdminUpdateMaincategory />}
          />

          {/* Admin Subcategory routes  */}
          <Route path="/admin/subcategory" element={<AdminSubcategory />} />
          <Route
            path="/admin/subcategory/create"
            element={<AdminCreateSubcategory />}
          />
          <Route
            path="/admin/subcategory/update/:id"
            element={<AdminUpdateSubcategory />}
          />

          {/* Admin Brand routes  */}
          <Route path="/admin/brand" element={<AdminBrand />} />
          <Route path="/admin/brand/create" element={<AdminCreateBrand />} />
          <Route
            path="/admin/brand/update/:id"
            element={<AdminUpdateBrand />}
          />

          {/* Admin Testimonial routes  */}
          <Route path="/admin/testimonial" element={<AdminTestimonial />} />
          <Route
            path="/admin/testimonial/create"
            element={<AdminCreateTestimonial />}
          />
          <Route
            path="/admin/testimonial/update/:id"
            element={<AdminUpdateTestimonial />}
          />

          {/* Admin Product routes  */}
          <Route path="/admin/product" element={<AdminProduct />} />
          <Route
            path="/admin/product/create"
            element={<AdminCreateProduct />}
          />
          <Route
            path="/admin/product/update/:id"
            element={<AdminUpdateProduct />}
          />

          {/* Error routes  */}
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
