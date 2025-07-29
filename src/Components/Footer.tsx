// import React from 'react'

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pb-2.5">
        <div className="flex gap-10 justify-center my-10">
           <FaGithub href="https://x.com/farmacrypt" />
           <CiLinkedin href="https://x.com/farmacrypt" />
           <FaXTwitter href="https://x.com/farmacrypt" />
           <FaFacebookSquare href="https://x.com/farmacrypt" />
        </div>
    </div>
  )
}

export default Footer