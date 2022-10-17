import "./UserDetail.scss";
import backIcon from "../../Assets/icons/np_back.svg";
import { PageTitle } from "../../Components";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { formatCurrency } from "../../Helpers/numberFormater";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

let stars = 2;
const UserDetail = () => {
  const [userDetails, setUserDetails] = useState([]);
  let { userId } = useParams();
  useEffect(() => {
    const getUserDetails = async () => {
      const { data } = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
      );
      setUserDetails(data);
    };
    getUserDetails();
  }, [userId]);

  const starCount = Array.from({ length: 3 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill style={{ color: "ffb900" }} />
        ) : stars >= number ? (
          <BsStarHalf style={{ color: "ffb900" }} />
        ) : (
          <BsStar style={{ color: "ffb900" }} />
        )}
      </span>
    );
  });
  return (
    <div className="userdetail">
      <div className="userdetail__container">
        <div className="userdetail__header">
          <div className="previous__page">
            <img src={backIcon} alt="" />
            <p>Back to Users</p>
          </div>
          <div className="pageHero">
            <PageTitle title="User Details" />
            <div className="pageHero__btns">
              <button className="blacklist">BlackList user</button>
              <button className="active">Activate User</button>
            </div>
          </div>
          <div className="userdetail__overview">
            <div className="userdetailOverview__container">
              <div className="user__info">
                <div className="img__container">
                  <img src={userDetails?.profile?.avatar} alt="" />
                </div>
                <div className="userName">
                  <h2>{`${userDetails?.profile?.firstName} ${userDetails?.profile?.lastName} `}</h2>
                  <p>LSQFf587g90</p>
                </div>
              </div>
              <div className="user__tier">
                <p>User's Tier</p>
                <div className="starRating">{starCount}</div>
              </div>
              <div className="user__account">
                <p className="account__balance">{formatCurrency(200000)}</p>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>
            <div className="userDetail__Nav">
              <ul>
                <li>General Details</li>
                <li>Documents</li>
                <li>Bank Details</li>
                <li>Loans</li>
                <li>Savings</li>
                <li>App and System</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="userdetail__body">
          <h1>Personal Information</h1>
          <div className="personal__info">
            <div className="info__details">
              <h2>Full name</h2>
              <p>{`${userDetails?.profile?.firstName} ${userDetails?.profile?.lastName} `}</p>
            </div>
            <div className="info__details">
              <h2>Phone Number</h2>
              <p>{userDetails?.phoneNumber}</p>
            </div>
            <div className="info__details">
              <h2>Email Address</h2>
              <p>{userDetails?.email}</p>
            </div>
            <div className="info__details">
              <h2>Bvn</h2>
              <p>{userDetails?.profile?.bvn}</p>
            </div>
            <div className="info__details">
              <h2>Gender</h2>
              <p>{userDetails?.profile?.gender}</p>
            </div>
            <div className="info__details">
              <h2>Marital Status</h2>
              <p>single</p>
            </div>
            <div className="info__details">
              <h2>Children</h2>
              <p>None</p>
            </div>
            <div className="info__details">
              <h2>Type Of residence</h2>
              <p>Parents Apartment</p>
            </div>
          </div>
          <h1>Education and Employment</h1>
          <div className="personal__info">
            <div className="info__details">
              <h2>Level of Education</h2>
              <p> {userDetails?.education?.level}</p>
            </div>
            <div className="info__details">
              <h2>Employment Status</h2>
              <p> {userDetails?.education?.employmentStatus}</p>
            </div>
            <div className="info__details">
              <h2>Sector Of Employment</h2>
              <p> {userDetails?.education?.sector}</p>
            </div>
            <div className="info__details">
              <h2>Duration of Employment</h2>
              <p> {userDetails?.education?.duration}</p>
            </div>
            <div className="info__details">
              <h2>Office Email</h2>
              <p> {userDetails?.education?.officeEmail}</p>
            </div>
            <div className="info__details">
              <h2>Monthly Income</h2>
              <p>{`${formatCurrency(
                userDetails?.education?.monthlyIncome[0]
              )} - ${formatCurrency(
                userDetails?.education?.monthlyIncome[1]
              )}`}</p>
            </div>
            <div className="info__details">
              <h2>Loan REpayment</h2>
              <p>{`${formatCurrency(
                userDetails?.education?.loanRepayment
              )}`}</p>
            </div>
          </div>

          <h1>Socials</h1>
          <div className="personal__info">
            <div className="info__details">
              <h2>Twitter</h2>
              <p> {userDetails?.socials?.twitter}</p>
            </div>
            <div className="info__details">
              <h2>Facebook</h2>
              <p> {userDetails?.socials?.facebook}</p>
            </div>
            <div className="info__details">
              <h2>Instagram</h2>
              <p> {userDetails?.socials?.instagram}</p>
            </div>
          </div>
          <h1>Guarantor</h1>
          <div className="personal__info">
            <div className="info__details">
              <h2>Full name</h2>
              <p>{`${userDetails?.guarantor?.firstName} ${userDetails?.guarantor?.lastName} `}</p>
            </div>
            <div className="info__details">
              <h2>Phone Number</h2>
              <p>{userDetails?.guarantor?.phoneNumber}</p>
            </div>
            <div className="info__details">
              <h2>Email Address</h2>
              <p>{`${userDetails?.guarantor?.firstName}@gmail.com`}</p>
            </div>
            <div className="info__details">
              <h2>Relationship</h2>
              <p>Family</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
