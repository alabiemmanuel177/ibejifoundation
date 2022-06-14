import React from "react";
import './table.css'
import FullBtn from '../SvgFunc/FullBtn'
import "./posttable.css";


export const Table = ({post}) => {
  return (
    <div className="table-holder2">
      <table className="table table-bordered table-width table-pos">
      
        <tbody>
          <tr className="wrap">
            <th scope="row">1</th>
            <td className="bb">{post.title}</td>
            <td className="bb" >{post.desc}</td>
            <td className="bb">Farm.jpg</td>
            <td className="bb">{post.beneficiary}</td>
            <td className="bb">
              <FullBtn/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
