import "./user.scss";
import { PageTitle } from "../../Components";
import { userTypes } from "../../Helpers/userTypes";
import { numberFormat } from "../../Helpers/numberFormater";

const Users = () => {
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
        </div>
      </div>
    </>
  );
};

export default Users;
