import React, { useState } from "react";
import { Data, ProjectManager } from "./Data";
import { AiOutlineDown } from "react-icons/ai";
import {
  BiSolidDashboard,
  BiLogoProductHunt,
  BiSolidOffer,
} from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineWallet, AiOutlineRight } from "react-icons/ai";
import { MdLiveHelp } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbHexagonNumber0 } from "react-icons/tb";
export default function Sidemenu() {
  return (
    <div className="side-menu">
      <nav>
        <ul>
          <div className="menu-name">
            <h2>
              <TbHexagonNumber0 className="icon1" />
            </h2>
          </div>
          <Link style={{ color: "#2e97a7" }} to="/dashboard">
            <ol id="Dashboard">
              <BiSolidDashboard />
              Dashboard
              <AiOutlineRight />
            </ol>
          </Link>
          <Link style={{ color: "#2e97a7" }} to="/Product">
            <ol>
              <BiLogoProductHunt />
              Product
              <AiOutlineRight />
            </ol>
          </Link>
          <Link style={{ color: "#2e97a7" }} to="/customers">
            <ol>
              <CgProfile />
              Customers
              <AiOutlineRight />
            </ol>
          </Link>
          <Link style={{ color: "#2e97a7" }} to="/income">
            <ol>
              <AiOutlineWallet />
              Income
              <AiOutlineRight />
            </ol>
          </Link>
          <Link style={{ color: "#2e97a7" }} to="/promote">
            <ol>
              <BiSolidOffer />
              Promote
              <AiOutlineRight />
            </ol>
          </Link>
          <Link style={{ color: "#2e97a7" }} to="/help">
            <ol>
              <MdLiveHelp />
              Help
              <AiOutlineRight />
            </ol>
          </Link>
          <Avatar />
        </ul>
      </nav>
    </div>
  );
}

const Avatar = function () {
  const [open, setopen] = useState(false);
  return (
    <div className="Avatar">
      <img src="./Images/img6.png" alt="img" className="profile" />
      <div className="profile-inner">
        {Data.map((data) => {
          return (
            <>
              <h2>{data.ReportedTo}</h2>
              <h2>{data.ReportingPosition}</h2>
              <AiOutlineDown
                style={{
                  fontSize: "15px",
                }}
                onClick={() => setopen(!open)}
              />
              <div className="Dropdown">
                {open && (
                  <div className="Dropdown-menu">
                    {ProjectManager.map((res) => {
                      return (
                        <div className="Dropdown-Data">
                          <h2>AssignedCustomer:{res.AssignedCustomer}</h2>
                          <h2>Comments:{res.Comments}</h2>
                          <h2>ManagerRating:{res.ManagerRating}</h2>
                          <h2>CustomerAddress:{res.CustomerAddress}</h2>
                          <h2>EmploymentType:{res.EmploymentType}</h2>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
