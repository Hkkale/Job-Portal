import React from "react";
import { IoBag } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Avatar, Button, Indicator } from "@mantine/core";
import Navlinks from "./Navlinks";
import { useLocation, useNavigate } from "react-router";
import Profile from "../TalentProfile/Profile";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Services/ProfileSevice";
import { setProfile } from "../../Slices/ProfileSlice";
import { useEffect } from "react";
const Header = () => {
  const user = useSelector((state) => state.user);
  

  const dispatch = useDispatch();

 

  useEffect(() => {
    getProfile(user.id)

      

      .then((data) => {
        console.log(data);
        dispatch(setProfile(data));
      })
      .catch((err) => console.log(err));
  }, []);


  const navigate = useNavigate();
  const location = useLocation();
  return location.pathname != "/signup" && location.pathname != "/login" ? (
    <div className="w-full h-20 text-white flex justify-between px-6 items-center bg-mine-shaft-950 font-[poppins]  ">
      <div
        onClick={() => navigate("/")}
        className="flex gap-2 cursor-pointer   h-full items-center  text-bright-sun-400 "
      >
        <IoBag className="text-4xl pb-1" color="text-bright-sun-400" />
        <div className="text-3xl font-semibold">Jobify</div>
      </div>

      <Navlinks />

      <div className="flex gap-4 items-center h-full ">
        {user ? (
          <ProfileMenu />
        ) : (
          <>
            <Button
              onClick={() => navigate("/login")}
              variant="subtle"
              color="brightSun.4"
            >
              Login
            </Button>
          </>
        )}

        {/* <div className='bg-mine-shaft-900 p-2 rounded-full'> <IoSettingsOutline color='white' size={20}/></div> */}

        <div className="bg-mine-shaft-900 p-2 rounded-full">
          <Indicator color="brightSun.4" size={7} offset={3}>
            <FaRegBell color="white" size={20} />
          </Indicator>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
