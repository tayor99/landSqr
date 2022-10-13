import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import "./SharedLayout.scss";
const SharedLayout = () => {
  return (
    <>
      <div className="sharedLayout">
        <div className="sharedLayout__side">
          <Sidebar />
        </div>
        <div className="sharedLayout__header">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
