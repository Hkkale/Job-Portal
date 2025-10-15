import { Indicator, Notification, Stack } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FaCheck, FaRegBell } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Menu } from "@mantine/core";

import { FaRegUserCircle } from "react-icons/fa";
import { getNotifications, readNotification } from "../../Services/NotfService";

const NotificationMenu = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const [notifications,setNotifications]=useState([])

  const user = useSelector((state) => state.user);


  useEffect(()=>{


  getNotifications(user.id)
  .then((res)=>{
    console.log(res)
    setNotifications(res)
  })
  .catch((error)=>console.log(error))





  },[user])

  const unread=(index)=>{

    let notfs=[...notifications]
    notfs=notfs.filter((noti,i)=>i!=index);
    setNotifications(notfs);


    readNotification(notifications[index].id)
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error))
  }

  return (
    <Menu shadow="md" width={400} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="bg-mine-shaft-900 p-2 rounded-full hover:cursor-pointer hover:bg-mine-shaft-800">
          <Indicator disabled={notifications.length==0} color="brightSun.4" size={7} offset={3}>
            <FaRegBell color="white" size={20} />
          </Indicator>
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>


      <div className="flex flex-col gap-0.5">


        {notifications.map((notf,index)=><Notification
          className="hover:!bg-mine-shaft-800 cursor-pointer"
          key={index}
          onClick={()=>{
            navigate(notf.routes);
            unread(index);
            setOpened(false)
          }}
          onClose={()=>unread(index)}
          icon={<FaCheck className="text-xl font-semibold" />} color="teal" title={notf.action} mt="sm"
          
          
          >{notf.message}</Notification>
          )}


          {
            notifications.length==0 && <div className="text-center text-mine-shaft-300 p-4">No new notifications</div>
          }






        



      </div>

        
        
          
          

          
       {/* <Menu.Divider /> */}
      </Menu.Dropdown>
    </Menu>
  );
};

export default NotificationMenu;
