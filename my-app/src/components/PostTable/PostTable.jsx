import React from "react";
import "./posttable.css";
import { Table } from "./Table";

export const PostTable= ({posts}) => {
  return (
    <div>
      <div className="posts">
        <h1 className="page-head">Post Configuration</h1>
        {posts.map((p) => (
          <Table post={p} 
          />
        ))}
      </div>
    </div>
  );
}

export default PostTable;
