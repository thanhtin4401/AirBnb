import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { localStorageService } from '../../services/localStorageService';
import './Footer.scss';
import FooterMobile from './FooterMobile';

function Footer() {

  return (
    <div className="footer-infor bg-[#F7F7F7] pt-8 pb-[5rem]  w-full border-t-[1px] border-[#DDDDDD] ">
      <div className="container m-auto grid mb:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="text-left">
          <h2 className="mb-4 font-[600] text-[0.8rem]">Support</h2>
          <ul className="text-[0.8rem]">
            <li className="mb-4 font-[400]">
              {' '}
              <a>Help Center</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>AirCover</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Safety information</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Supporting people with disabilities</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Cancellation option</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Out COVID-19 Respone</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Report a neightborhood concern</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Safety information</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Supporting people with disabilities</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Cancellation option</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Out COVID-19 Respone</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Report a neightborhood concern</a>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="mb-4 font-[600] text-[0.8rem]">Community</h2>
          <ul className="text-[0.8rem]">
            <li className="mb-4 font-[400]">
              {' '}
              <a>Airbnb.org:disaster relief housing</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Support Afghan refugess</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Combating discrimination</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Support Afghan refugess</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Combating discrimination</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Support Afghan refugess</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Combating discrimination</a>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="mb-4 font-[600] text-[0.8rem]">Hosting</h2>
          <ul className="text-[0.8rem]">
            <li className="mb-4 font-[400]">
              {' '}
              <a>Try hosting</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>AirCover for Hosts</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Explore hosting resources</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Visit our community forum</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>How to host responsibly</a>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="mb-4 font-[600] text-[0.8rem]">Airbnb</h2>
          <ul className="text-[0.8rem]">
            <li className="mb-4 font-[400]">
              {' '}
              <a>Newsroom</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Learn about new feature</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Letter from our found</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Careers</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Investors</a>
            </li>
            <li className="mb-4 font-200">
              {' '}
              <a>Gift cards</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
