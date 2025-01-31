import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="shadow-md py-5 font-bold text-xl px-10 flex items-center justify-between">
      <div id="logo">
        My<span className="text-red-700">Logo</span>
      </div>
      {user && (
        <div className="flex items-center gap-2">
          <h3>{user.displayName}</h3>
          <img
            className="w-15 h-15 object-cover rounded-full"
            src={user.photoURL}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Header;
