import { all } from "redux-saga/effects";

import maincategorySaga from "./MaincategorySagas";
import subcategorySaga from "./SubcategorySagas";
import brandSaga from "./BrandSagas";
import productSaga from "./ProductSagas";
import testimonialSaga from "./TestimonialSagas";
import cartSaga from "./CartSagas";
import wishlistSaga from "./WishlistSagas";
import newsletterSaga from "./NewsletterSagas";
import contactusSaga from "./ContactUsSagas";
import checkoutSaga from "./CheckoutSagas";

export default function* RootSaga() {
  yield all([
    maincategorySaga(),
    subcategorySaga(),
    brandSaga(),
    productSaga(),
    testimonialSaga(),
    cartSaga(),
    wishlistSaga(),
    newsletterSaga(),
    contactusSaga(),
    checkoutSaga(),
  ]);
}
