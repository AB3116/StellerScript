import React from "react";

function BlogLayout({ children }) {
  return (
    <div>
      <h1>This is a blog wrapper</h1>
      {children}
    </div>
  );
}

export default BlogLayout;
