import "./Layout.css";
import logo from "./../images/Swnac-Ekiraya-Services-Pvt-Ltd-Sharepal-1.png";
import Header from "./Header";
import OrderList from "../orderList/OrderList";

const Layout = () => {
  return (
    <div className="container-layout">
      <div className="container-page">
        <Header />
        <OrderList />
      </div>
    </div>
  );
};

export default Layout;
