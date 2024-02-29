import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


// this function is a secure container for all the components or pages that cannot be accessed without authentication
export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  // here if authentication is true that means that we need to login first
  // and if authentication is false that means that we are already authenticated

  useEffect(() => {
    // if authentication is true, then check for authStatus !== authentication
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    // if authentication is false, then check for authStatus !== authentication
    } else if(!authentication && authStatus !== authentication) {
      navigate("/");
    }
  }, [authStatus, navigate, authentication]);

  return <div></div>;
}
