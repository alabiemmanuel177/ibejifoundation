import React from "react";
import "./admin.css";
import PostTable from "../components/PostTable/PostTable";
import Apptable from "../components/AppTable/Apptable";
import { useState, useEffect} from "react";
import { BsPeople } from "react-icons/bs";
import { AiOutlineTable } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import axios from 'axios'

export const Admin = () => {
  const [active, setActive] = useState("FirstTable");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get("/posts");
      setPosts(res.data)
    };
    fetchPosts();
  }, []);

  return (
    <div className="admin-holder">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="sidebar">
        {" "}
        <div>
          <div className="sidebar1">
            <div className="user1">
              <h4>Ibeji Foundation</h4>
              <img src="images/icon.png" className="user-icon" alt="icon" />
              <div className="dropdown">
                <div className="logout-dropdown">
                  <p>
                    Mike Myers <MdArrowDropDown className="aIcon-pos" />
                  </p>
                </div>
                <div className="dropdown-content">
                  <a>Logout</a>
                  <a>Change Password</a>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="options">
              <p className="option">
                <BsPeople className="o-icon" />
                <a onClick={() => setActive("FirstTable")}>Posts</a>
              </p>
              <p className="option">
                <AiOutlineTable className="o-icon" />
                <a onClick={() => setActive("SecondTable")}>Applicants</a>
              </p>
              <p className="option">
                <BsPeople className="o-icon" />
                <a>Applicants</a>
              </p>
              <p className="option">
                <AiOutlineTable className="o-icon" />
                <a>Posts</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {active === "FirstTable" && <PostTable posts={posts} />}
      {active === "SecondTable" && <Apptable />}
    </div>
  );
};
