import user from "../Assets/icons/np_users_1.svg";
import multiUser from "../Assets/icons/np_users.svg";
import loan from "../Assets/icons/np_loan.svg";
import money from "../Assets/icons/np_money.svg";

export const userTypes = [
  {
    id: 0,
    userType: "users",
    no_OfUsers: " 2453",
    icon: user,
    classes: "user",
  },
  {
    id: 1,
    userType: "active users",
    no_OfUsers: "2453",
    icon: multiUser,
    classes: "userActive",
  },
  {
    id: 2,
    userType: "users with loan",
    no_OfUsers: "12453",
    icon: loan,
    classes: "loan",
  },
  {
    id: 3,
    userType: "users with savings",
    no_OfUsers: "102453",
    icon: money,
    classes: "money",
  },
];
