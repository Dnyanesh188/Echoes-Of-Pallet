import { Routes, Route } from "react-router-dom";
import Header from "./NavbarComponent/Header";
import AdminRegisterForm from "./UserComponent/AdminRegisterForm";
import UserLoginForm from "./UserComponent/UserLoginForm";
import UserRegister from "./UserComponent/UserRegister";


import HomePage from "./PageComponent/HomePage";
import AddCategoryForm from "./CategoryComponent/AddCategoryForm";
import AddProductForm from "./ProductComponent/AddProductForm";
import Product from "./ProductComponent/Product";
import SellerProducts from "./ProductComponent/SellerProducts";
import ViewSellerProducts from "./ProductComponent/ViewSellerProducts";
import UpdateProductForm from "./ProductComponent/UpdateProductForm";
import ViewAllCategories from "./CategoryComponent/ViewAllCategories";
import UpdateCategoryForm from "./CategoryComponent/UpdateCategoryForm";
import ViewAllProducts from "./ProductComponent/ViewAllProducts";
import AddCardDetails from "./OrderComponent/AddCardDetails";
import ViewMyOrders from "./OrderComponent/ViewMyOrders";
import ViewAllOrders from "./OrderComponent/ViewAllOrders";
import ViewSellerDeliveryPerson from "./UserComponent/ViewSellerDeliveryPerson";
import ViewSellerOrders from "./OrderComponent/ViewSellerOrders";
import ViewAllSellers from "./UserComponent/ViewAllSellers";
import ViewAllDeliveryPersons from "./UserComponent/ViewAllDeliveryPersons";
import ViewAllCustomers from "./UserComponent/ViewAllCustomers";
import ViewDeliveryOrders from "./OrderComponent/ViewDeliveryOrders";
import MyBids from "./ProductOfferComponent/MyBids";
import MyWallet from "./UserComponent/MyWallet";
import ViewAllProductsBlog from "./ProductComponent/ViewAllProductsBlog";
import Footer from "./NavbarComponent/Footer";
import About from "./static/About";

import ContactForm from "./static/ContactFrom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user/admin/register" element={<AdminRegisterForm />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/customer/register" element={<UserRegister />} />
        <Route path="/user/seller/register" element={<UserRegister />} />
        <Route path="/seller/delivery/register" element={<UserRegister />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<ContactForm/>} />
        <Route path="/Blog" element={<ViewAllProductsBlog />} />
        <Route
          path="/product/category/:categoryId/:categoryName"
          element={<HomePage />}
        />
        <Route path="/category/add" element={<AddCategoryForm />} />
        <Route path="/product/add" element={<AddProductForm />} />
        <Route
          path="/product/:productId/category/:categoryId"
          element={<Product />}
        />

        <Route
          path="/product/seller/:sellerId/:sellerName"
          element={<SellerProducts />}
        />
        <Route
          path="/product/seller/:sellerId/:sellerName/category/:categoryId/:categoryName"
          element={<SellerProducts />}
        />
        <Route path="/seller/product/all" element={<ViewSellerProducts />} />
        <Route path="/seller/product/update" element={<UpdateProductForm />} />
        <Route path="/admin/category/all" element={<ViewAllCategories />} />
        <Route path="/admin/category/update" element={<UpdateCategoryForm />} />
        <Route path="/admin/product/all" element={<ViewAllProducts />} />
        <Route path="/customer/order/payment" element={<AddCardDetails />} />
        <Route path="/customer/order" element={<ViewMyOrders />} />
        <Route path="/admin/order/all" element={<ViewAllOrders />} />
        <Route
          path="/seller/delivery-person/all"
          element={<ViewSellerDeliveryPerson />}
        />
        <Route path="/seller/order/all" element={<ViewSellerOrders />} />
        <Route path="/admin/seller/all" element={<ViewAllSellers />} />
        <Route
          path="/admin/delivery-person/all"
          element={<ViewAllDeliveryPersons />}
        />
        <Route path="/admin/customer/all" element={<ViewAllCustomers />} />
        <Route
          path="/delivery-person/order/all"
          element={<ViewDeliveryOrders />}
        />
        <Route path="/customer/bid/all" element={<MyBids />} />
        <Route path="/customer/wallet" element={<MyWallet />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
