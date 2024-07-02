import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div>
      <h2>404 | Page not Found</h2>
      <h6>
        This page does not exist. Go page to home page to see other pages in
        website
      </h6>
      <Link href="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
