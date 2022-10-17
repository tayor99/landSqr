import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import "./SharedLayout.scss";
import { UserDetail, Users } from "../../Pages";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div className="sharedLayout">
        <div className="sharedLayout__side">
          <Sidebar />
        </div>
        <div className="sharedLayout__body">
          <Navbar />
         
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
