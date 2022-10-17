import "./user.scss";
import filter from "../../Assets/icons/filter.svg";
import { PageTitle } from "../../Components";
import { userTypes } from "../../Helpers/userTypes";
import { numberFormat } from "../../Helpers/numberFormater";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showFilterModal, setShowFilterModel] = useState(false);
  const [showOpionModal, setShowOptionModal] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      setUsers(data.slice(0, 10));
    };
    getUserData();
  }, []);

  return (
    <>
      <div className="users">
        <div className="users__container">
          <div className="users__header">
            <PageTitle title="Users" />
            <div className="typeOfusers">
              {userTypes.map((userType) => {
                return (
                  <div className="typeOfusers__card" key={userType?.id}>
                    <div className={`icon ${userType?.classes}`}>
                      <img src={userType?.icon} alt="icons" />
                    </div>
                    <p className="userType">{userType?.userType}</p>
                    <p className="no_Ofusers">
                      {numberFormat(userType?.no_OfUsers)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="users__body">
            <table className="users__table">
              <thead>
                <tr>
                  <th>
                    <div className="table__header">
                      <p>Organisation</p>
                      <div className="icon">
                        <img src={filter} alt="" />
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="table__header">
                      <p>Username</p>
                      <div className="icon">
                        <img src={filter} alt="" />
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="table__header">
                      <p>Email</p>
                      <div className="icon">
                        <img src={filter} alt="" />
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="table__header">
                      <p>Phone number</p>
                      <div className="icon">
                        <img src={filter} alt="" />
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="table__header">
                      <p>Date joined</p>
                      <div className="icon">
                        <img src={filter} alt="" />
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="table__header">
                      <p>Status</p>
                      <div className="icon">
                        <img src={filter} alt="" />
                      </div>
                    </div>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.orgName}</td>
                      <td>{user.userName}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.createdAt}</td>
                      <td>Pending</td>
                      <td>
                        <BsThreeDotsVertical />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {showFilterModal && (
              <div className="users__filterModal">
                <form className="filterModal">
                  <div className="input__field">
                    <label htmlFor="Organisation">Organisation</label>
                    <select>
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option selected value="coconut">
                        Coconut
                      </option>
                      <option value="mango">Mango</option>
                    </select>
                  </div>
                  <div className="input__field">
                    <label htmlFor="Username">Username</label>
                    <input type="text" placeholder="User" />
                  </div>
                  <div className="input__field">
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="input__field">
                    <label htmlFor="Date">Date</label>
                    <input type="date" />
                  </div>
                  <div className="input__field">
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <input type="text" placeholder="Phone number" />
                  </div>
                  <div className="input__field">
                    <label htmlFor="status">Status</label>
                    <select>
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option selected value="coconut">
                        Coconut
                      </option>
                      <option value="mango">Mango</option>
                    </select>
                  </div>
                  <div className="filter__btn">
                    <button type="reset" className="btn__reset">
                      Reset
                    </button>
                    <button type="submit" className="btn__filter">
                      Filter
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="users__filter">
            <div className="users__display">
              <p>Showing </p>
              <div
                className="filter"
                onClick={() => {
                  setShowFilterModel(!showFilterModal);
                }}
              >
                100 <AiOutlineDown />
              </div>
              <p>out of 100 </p>
            </div>
            <div className="users__pages">{/* <span> < </span> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
