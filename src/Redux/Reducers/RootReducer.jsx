import { combineReducers } from "@reduxjs/toolkit";

import MaincategoryReducer from "./MaincategoryReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import BrandReducer from "./BrandReducer";
import ProductReducer from "./ProductReducer";
import TestimonialReducer from "./TestimonialReducer";
import CartReducer from "./CartReducer";
import CheckoutReducer from "./CheckoutReducer";
import WishlistReducer from "./WishlistReducer";
import NewsletterReducer from "./NewsletterReducer";
import ContactUsReducer from "./ContactUsReducer";

export default combineReducers({
  MaincategoryStateData: MaincategoryReducer,
  SubcategoryStateData: SubcategoryReducer,
  BrandStateData: BrandReducer,
  ProductStateData: ProductReducer,
  TestimonialStateData: TestimonialReducer,
  CartStateData: CartReducer,
  CheckoutStateData: CheckoutReducer,
  WishlistStateData: WishlistReducer,
  NewsletterStateData: NewsletterReducer,
  ContactUsStateData: ContactUsReducer,
});
