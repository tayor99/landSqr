import Logo from "../../../Assets/Logo.svg";
import "./Sidebar.scss";
import { sidebarLinks } from "../../../Helpers/Sidebar-links";

const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar__logo">
        <div className="logo">
          <div className="img__container">
            <img src={Logo} alt="logo img" />
          </div>
        </div>
      </div>
      <div className="sidebar__links">
        <ul>
          {sidebarLinks.map((sidebarLink) => {
            return (
              <li key={sidebarLink.id} className={sidebarLink?.class}>
                <nav>
                  {sidebarLink?.icon && (
                    <div className="icons">
                      <img src={sidebarLink?.icon} alt="" />
                    </div>
                  )}
                  <p className="title">{sidebarLink?.title}</p>
                </nav>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
