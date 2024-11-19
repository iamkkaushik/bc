import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "@/components/ui/skeleton";
import PaypalReturnPage from "./pages/shopping-view/paypal-return";
import PaymentSuccessPage from "./pages/shopping-view/payment-success";
import SearchProducts from "./pages/shopping-view/search";
import AboutPage from "./pages/shopping-view/aboutus";
import ContactPage from "./pages/shopping-view/contactus";
// hello
function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);

  return (
    
    <div className="flex flex-col overflow-hidden bg-white">
  <Routes>
    <Route path="/" element={<ShoppingLayout />}>
      <Route index element={<ShoppingHome />} />
      <Route path="/shop/listing" element={<ShoppingListing />} />
      <Route path="/shop/checkout" element={<ShoppingCheckout />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/contactus" element={<ContactPage />} />
      <Route path="/shop/search" element={<SearchProducts />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
</div>

  );
}

export default App;
