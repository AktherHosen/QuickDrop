import React, { useEffect, useState } from "react";
import Heading from "../../../components/common/Heading";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import moment from "moment";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    getUserProfile();
  }, []);
  const getUserProfile = async () => {
    try {
      // code here
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/${user?.email}`
      );
      if (res.status === 200) {
        setUserData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const createdAt = moment(userData.timestamp).format(
    "MMMM DD, YYYY hh:mm:ss A"
  );
  return (
    <div>
      <Heading title="profile" small={true} />
      <div className="flex justify-end ">
        <div className="h-[250px] w-[250px] bg-gray-200 rounded-md p-4  flex flex-col items-center justify-between">
          <div className="">
            <img
              src={userData?.profilePhoto}
              className="h-[120px] w-[120px] rounded-full"
              alt=""
            />
          </div>
          <span className="text-[12px] flex justify-end items-end">
            {createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
