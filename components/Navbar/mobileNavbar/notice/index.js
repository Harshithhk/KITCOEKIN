import React, { useState, useEffect } from 'react'
import Link from "next/link";

const Alumni = (props) => {
  const [nav1, setNav1] = React.useState(false);
  const [nav2, setNav2] = React.useState(false);
  const [nav3, setNav3] = React.useState(false);
  return (
    <ul className="px-4 w-full   pb-6 pt-6 ">
      <Link passHref href="">
    <h3  className="font-bold text-xl flex items-center  text-bold mb-2">
      NOTICE
   
    </h3>
   </Link>
  </ul>
 
      );
};

export default Alumni