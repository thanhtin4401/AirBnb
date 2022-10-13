import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.scss';
function Footer() {
  return (
    <div className="bg-[#F7F7F7] pt-8 pb-[5rem]  w-full border-t-[1px] border-[#DDDDDD] ">
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
      <div className="footer-sticky w-full mb:hidden sm:hidden lg:block">
        <div className="container py-3 m-auto  flex justify-between items-center">
          <div className="text-[0.8] font-[400] flex items-center">
            © 2022 Airbnb, Inc.
            <div className="flex items-center">
              <span className="mx-4 inline">.</span>
              <a className="font-[400] text-[0.8]" href="#">
                Privacy
              </a>
              <span className="mx-4 inline">.</span>
              <a className="font-[400] text-[0.8]" href="#">
                Privacy
              </a>
              <span className="mx-4 inline">.</span>
              <a className="font-[400] text-[0.8]" href="#">
                Privacy
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="language flex items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>

              <button href="#" className="text-[0.8] font-[400] hover:underline">
                English(EN)
              </button>
            </div>
            <div className="USD flex items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <button href="#" className="text-[0.8rem] font-[400]hover:underline">
                USD
              </button>
            </div>
            <div className="social flex justify-center">
              <FaFacebook size="1.3rem" />
              <FaInstagram size="1.3rem" className="mx-4" />
              <FaGithub size="1.3rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
