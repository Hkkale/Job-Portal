import { Indicator, Notification, Stack } from "@mantine/core";
import React, { useState } from "react";
import { FaCheck, FaRegBell } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Menu } from "@mantine/core";

import { FaRegUserCircle } from "react-icons/fa";

const NotificationMenu = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  return (
    <Menu shadow="md" width={400} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="bg-mine-shaft-900 p-2 rounded-full hover:cursor-pointer">
          <Indicator color="brightSun.4" size={7} offset={3}>
            <FaRegBell color="white" size={20} />
          </Indicator>
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>


      <div className="flex flex-col gap-0.5">

        <Notification
          className="hover:!bg-mine-shaft-800 cursor-pointer"

          icon={<FaCheck className="text-xl font-semibold" />} color="teal" title="All good" mt="sm"
          
          
          >Everythin is fine</Notification>
          <Notification
          className="hover:!bg-mine-shaft-800 cursor-pointer"

          icon={<FaCheck className="text-xl font-semibold" />} color="teal" title="All good" mt="xs"
          
          
          >Everythin is fine</Notification>



      </div>

        
        
          
          

          
       {/* <Menu.Divider /> */}
      </Menu.Dropdown>
    </Menu>
  );
};

export default NotificationMenu;
