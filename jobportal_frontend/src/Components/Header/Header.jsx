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
  let path = location.pathname;

  if(path.startsWith("/post-job/")){
    path="/post-job/0"

  }
  else if(path.startsWith("/posted-jobs/")){
    path="/posted-jobs/0"
  }

  let links= [
    {name:"Find job",url:"/find-jobs"},
    {name:"Find Talent",url:"/find-talent"},
    {name:"Post Job",url:"/post-job/0"},
    {name:"Posted Job",url:"/posted-jobs/0"},
    {name:"Job History",url:"/job-history"},
    
    
  ]

    if (!user) {
  links.push({ name: "Sign Up", url: "/signup" });
} else if (user.accountType === "APPLICANT") {
  // remove specific links
  
  const removeList = ["/find-talent", "/post-job/0", "/posted-jobs/0"];
  links = links.filter(link => !removeList.includes(link.url));
}
else if(user.accountType === "EMPLOYER"){

  const removeList = ["/find-jobs", "/job-history"];

  
  links = links.filter(link => !removeList.includes(link.url));

}

  const isActive = (pathName) => {
    return path === pathName ? "text-bright-sun-400 " : "text-mine-shaft-300";
  };

  useEffect(() => {
    setupResponseInterceptor(navigate);
  }, [navigate]);

useEffect(() => {
  if (token) {
    const decoded = jwtDecode(token);
    dispatch(setUser({ ...decoded, email: decoded.sub }));
  }
}, [token]);

// 2️⃣ Fetch profile only when user changes
useEffect(() => {
  if (user?.profileId) {
    getProfile(user.profileId)
      .then((data) => {
        dispatch(setProfile(data));
      })
      .catch((err) => console.log(err));
  }
}, [user]);

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
