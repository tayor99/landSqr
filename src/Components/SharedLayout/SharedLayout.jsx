import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import "./SharedLayout.scss";
import { Users } from "../../Pages";

const SharedLayout = () => {
  return (
    <>
      <div className="sharedLayout">
        <div className="sharedLayout__side">
          <Sidebar />
        </div>
        <div className="sharedLayout__body">
          <Navbar />
          <Users />
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
