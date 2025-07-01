import { Menu, Button, Text, Avatar, Switch } from "@mantine/core";

import React, { useState } from "react";
import { IoSettings } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

import { BsFillMoonStarsFill } from "react-icons/bs";

import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router";


const ProfileMenu = () => {
  const [checked, setChecked]= useState(false);
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="flex items-center gap-2 cursor-pointer">
          <div>Hiten</div>
          <Avatar
            src="./src/assets/avatar-9.png"
            alt="it's me"
            radius="xl"
            size={34}
          />
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        
        <Menu.Item onClick={()=>navigate("/profile")} leftSection={<FaRegUserCircle size={14} />}>Profile</Menu.Item>
        <Menu.Item leftSection={<FaRegMessage size={14} />}>Messages</Menu.Item>
        <Menu.Item leftSection={<FaRegFileAlt size={14} />}>Resume</Menu.Item>
        <Menu.Item
          leftSection={<FaRegMoon size={14} />}
          rightSection={
            
            
            <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}  size="md" color="dark.4" onLabel={<MdSunny className="text-bright-sun-400 h-3 w-3"/> }  offLabel={<BsFillMoonStarsFill className="text-bright-sun-400 h-3 w-3" /> }  />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />

       
        
        <Menu.Item color="red" leftSection={<TbLogout2 size={14} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
