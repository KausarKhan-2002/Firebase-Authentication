import React from "react";
import { useSelector } from "react-redux";

const Browse = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="text-center mt-5 w-[70%] mx-auto">
      <h2 className="text-2xl"><span className="text-red-600">Welcome</span>, {user?.displayName}</h2>
      <p className="mt-1 text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos placeat,
        eaque id quam voluptates perferendis distinctio repellendus, culpa
        necessitatibus aperiam dolorem recusandae corporis nobis deleniti
        nesciunt odit esse, molestiae impedit! Officiis voluptate quaerat
        doloribus delectus. Minima quae temporibus aperiam at adipisci magnam
        praesentium voluptatum, voluptatem ducimus, animi cum blanditiis
        explicabo numquam aspernatur harum quia ab iure totam asperiores optio.
        Culpa. Enim maxime aut adipisci totam sit sed. Veniam modi alias earum
        quo minus nam illum quibusdam sed voluptates tempora eum eius possimus
        consequuntur, officia quasi commodi repellat cum blanditiis porro!
      </p>
    </div>
  );
};

export default Browse;
