import React, { useState } from "react";
import "./Navbar.css";
import { IoMdMenu } from "react-icons/io";
import {
  MdHome,
  MdExitToApp,
  MdBook,
  MdDriveFileRenameOutline,
  MdBookmarkAdd,
} from "react-icons/md";
const Navbar = () => {
  const [tabstate, setTabstate] = useState(1);
  {
    /* const [open, setOpen] = useState(true);
  
    /*This fucntion is to create a tabstate based on the index 
  
  const action = (index) => {
    setTabstate(index);
  }; */
  }
 
  const sidebarData = [
    {
      title: "Home",
      icon: <MdHome />,

    },
    {
      title: "Books",
      icon: <MdBook />,
 
    },
    {
      title: "Genres",
      icon: <MdBookmarkAdd />,
   
    },
    {
      title: "Creator",
      icon: <MdDriveFileRenameOutline />,
     
    },
    {
      title: "Logout",
      icon: <MdExitToApp />,
   
    },
  ];

  const [isopen, setIsopen] = useState(false);
  const toggle = () => {
    setIsopen(!isopen);
  };

  // the function below the return state if retuen is false return hello
  return (
    <div
      className="sidebarContainer shadow-lg"
      style={{ width: isopen ? "200px" : "80px" }}
    >
      <div className="flex gap-4  p-[8px] text-sm">
        <h5 style={{ display: isopen ? "block" : "none" }} className="watch">
          Movie Hub
        </h5>
        <div className="bars">
          <IoMdMenu onClick={toggle} />
        </div>
      </div>

      <div className="sidebarlistcont">
        {sidebarData.map((data, key) => (
          <li
            className="sidebarlist  flex justify-center items-center "
            id={window.location.pathname === data.link ? "active" : ""}
            key={data.title}
        
          >
            <div className="dataIcon"> {data.icon} </div>
            <div style={{ display: isopen ? "block" : "none" }}>
              {data.title}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
