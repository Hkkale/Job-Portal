import React from "react";
import { IoBag } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Avatar, Burger, Button, Drawer, Indicator } from "@mantine/core";
import Navlinks from "./Navlinks";
import { useLocation, useNavigate } from "react-router";
import Profile from "../TalentProfile/Profile";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Services/ProfileSevice";
import { setProfile } from "../../Slices/ProfileSlice";
import { useEffect } from "react";
import NotificationMenu from "./NotificationMenu";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../../Slices/UserSlice";
import { setupResponseInterceptor } from "../../Interceptor/AxiosInterceptor";
import { useDisclosure } from "@mantine/hooks";
import { FaXmark } from "react-icons/fa6";


const Header = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.jwt);
  const [opened,{open,close}]=useDisclosure(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const location = useLocation();
  const path = location.pathname;

  const links= [
    {name:"Find job",url:"/find-jobs"},
    {name:"Find Talent",url:"/find-talent"},
    {name:"Post Job",url:"/post-job/0"},
    {name:"Posted Job",url:"/posted-jobs/0"},
    {name:"Job History",url:"/job-history"},
    
    
  ]

  if(!user){
    links.push({name:"Sign Up",url:"/signup"})
    
  }

  const isActive = (pathName) => {
    return path === pathName ? "text-bright-sun-400 " : "text-mine-shaft-300";
  };

  useEffect(() => {
    setupResponseInterceptor(navigate);
  }, [navigate]);

  useEffect(() => {
    if (token != "") {
      const decoded = jwtDecode(token);
      dispatch(setUser({ ...decoded, email: decoded.sub }));
    }

    if (user) {
      getProfile(user?.profileId)
        .then((data) => {
          console.log(data);
          dispatch(setProfile(data));
        })
        .catch((err) => console.log(err));
    }
  }, [token, navigate]);

  return location.pathname != "/signup" && location.pathname != "/login" ? (
    <div className="w-full h-20 text-white flex justify-between px-6 items-center bg-mine-shaft-950 font-[poppins]  ">
      <div
        onClick={() => navigate("/")}
        className="flex gap-2 cursor-pointer   h-full items-center  text-bright-sun-400 "
      >
        <IoBag className="text-4xl pb-1" color="text-bright-sun-400" />
        <div className="text-3xl max-[476px]:hidden  font-semibold">Jobify</div>
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

        {user ? <NotificationMenu /> : <></>}



        <Burger className="bs:hidden" opened={opened} onClick={open} aria-label="Toggle navigation" />  

        <Drawer opened={opened} onClose={close} title="" padding="xl" position="right" size="xs" overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}   closeButtonProps={{
          icon: <FaXmark size={26}  />,
        }}>

          <div className="flex  flex-col gap-6 items-center">
            {
        links.map((link,index)=><h2 key={index}
        onClick={() => {
          navigate(link.url)
          setTimeout(()=>{
            close()
          },[500])
        }}
        className={`${isActive(link.url)} cursor-pointer h-full flex items-center justify-center px-2 text-xl hover:text-bright-sun-400`}
      >
        {link.name}
      </h2>)
      }
          </div>

        </Drawer>

       
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
