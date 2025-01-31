import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Sign from "./Sign";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../AppStore/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        const { email, uid, displayName, photoURL } = user;
        dispatch(addUser({ email, uid, displayName, photoURL }));
        navigate("/browse")
      } else {
        // user is signed out
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
};

export default Body;
