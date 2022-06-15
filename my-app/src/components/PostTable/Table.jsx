import React from "react";
import "./table.css";
import FullBtn from "../SvgFunc/FullBtn";

export const Table = ({ post }) => {
  return (
    <div className="table-holder2">
      <table className="table table-bordered table-width">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Post Header</th>
            <th scope="col">Post Summary</th>
            <th scope="col">Post Image </th>
            <th scope="col">Beneficiary</th>
            <th scope="col">Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr className="wrap">
            <th scope="row">{post._id}</th>
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
