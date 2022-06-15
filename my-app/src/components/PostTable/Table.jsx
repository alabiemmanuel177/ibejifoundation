import React from "react";
import "./table.css";
import FullBtn from "../SvgFunc/FullBtn";

export const Table = ({ post }) => {
  return (
    <div className="table-holder2">
      <table className="table table-bordered table-width table-pos">
      
        <tbody>
          <tr className="wrap">
            <td>{post.title}</td>
            <td className="hold">{post.desc}</td>
            <td>Farm.jpg</td>
            <td>{post.beneficiary}</td>
            <td>
              <FullBtn
                path={post._id}
                post={post}                
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
