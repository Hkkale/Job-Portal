import { notifications } from "@mantine/notifications";
import { FaCheck, FaX } from "react-icons/fa6";



const successNotification = (title,message) =>{

   notifications.show({
                title: title,
                message: message,
                withCloseButton: true,
                icon: <FaCheck className="w-[85%] h-[85%]" />,
                color: "teal",
                withBorder: true,
                className: "!border-green-500",
              });

}



const errorNotifiaction = (title,message) =>{

   notifications.show({
                 title: title,
                 message: message,
                 withCloseButton: true,
                 icon: <FaX className="w-[85%] h-[85%] p-0.5" />,
                 color: "red",
                 withBorder: true,
                 className: "!border-red-500",
               });

}



export {successNotification,errorNotifiaction}