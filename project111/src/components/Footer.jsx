

// // src/components/Footer.js
// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

// const Footer = () => {
//   return (
//     <footer>
//       <p>&copy; 2024 Toy Store. All Rights Reserved.</p>
//       <div className="social-media-links">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//       </div>
//       <style jsx>{`
        // footer {
        //   padding: 20px;
        //   text-align: center;
        //   background: #f1f1f1;
        // }
        // .social-media-links {
        //   margin-top: 10px;
        // }
        // .social-media-links a {
        //   margin: 0 10px;
        //   color: #333;
        //   text-decoration: none;
        //   font-size: 24px;
        // }
        // .social-media-links a:hover {
        //   color: #0073e6; /* Change color on hover */
        // }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;
// import React from "react";
// import Button from "./Button";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

// function Footer() {
//   return (
//     <div style={footerContainerStyle}>
//       <div style={contactStyle}>
//         <p style={textStyle}>
//         16 Gandhi Road,Coimbatore,Tamil Nadu641002
//         </p>
//         <p style={textStyle}>brindhasubramani@gmail.com</p>
//         <div style={iconContainerStyle}>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={iconWrapperStyle}>
//             <FontAwesomeIcon icon={faFacebookF} style={iconStyle} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={iconWrapperStyle}>
//             <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
//           </a>
//           <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={iconWrapperStyle}>
//             <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={iconWrapperStyle}>
//             <FontAwesomeIcon icon={faGithub} style={iconStyle} />
//           </a>
//         </div>
//       </div>
//       <div style={sectionStyle}>
//         <h3 style={titleStyle}>HOT CATEGORIES</h3>
//         <ul style={listStyle}>
//           <li style={linkStyle}>Special Offers</li>
        
          
//           <li style={linkStyle}>Discounts</li>
//           <li style={linkStyle}>Top Brands</li>
//           <li style={linkStyle}>Online Exclusive</li>
//         </ul>
//       </div>
//       <div style={sectionStyle}>
//         <h3 style={titleStyle}>CUSTOMER SERVICE</h3>
//         <ul style={listStyle}>
//           <li style={linkStyle}>Wishlist</li>
//           <li style={linkStyle}>Privacy Policy</li>
//           <li style={linkStyle}>Theme FAQs</li>
//           <li style={linkStyle}>Store Locations</li>
//         </ul>
//       </div>
      {/* <div style={sectionStyle}>
        <h3 style={titleStyle}>SIGN UP TO NEWSLETTER</h3>
        <p style={textStyle}>
          Enter your email address to get $10 off your first order and free shipping. Updates information on Sales and Offers.
        </p>
        <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
            required
          />
          <Button title="Subscribe" class="bg-black text-white px-10 w-full" />
        </form>
      </div> */}
//     </div>
//   );
// }

// const footerContainerStyle = {
//   padding: '20px 16px',
//   marginTop: '96px',
//   borderTop: '2px solid #dbdbdd',
//   display: 'flex',
//   flexWrap: 'wrap',
//   justifyContent: 'space-between',
// };

// const contactStyle = {
//   flex: '1 1 200px',
//   marginBottom: '20px',
// };

// const sectionStyle = {
//   flex: '1 1 200px',
//   marginBottom: '20px',
// };

// const titleStyle = {
//   fontWeight: 'bold',
//   fontSize: '1.25rem',
//   marginBottom: '16px',
// };

// const textStyle = {
//   opacity: 0.9,
// };

// const iconContainerStyle = {
//   display: 'flex',
//   gap: '8px',
//   marginTop: '16px',
// };

// const iconWrapperStyle = {
//   width: '32px',
//   height: '32px',
//   borderRadius: '50%',
//   border: '2px solid #555555',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
//   color: '#555555',
// };

// const iconStyle = {
//   fontSize: '1.25rem',
// };

// const listStyle = {
//   listStyle: 'none',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '8px',
//   paddingLeft: '0',
// };

// const linkStyle = {
//   cursor: 'pointer',
//   textDecoration: 'none',
//   color: 'inherit',
//   transition: 'color 0.2s ease-in-out',
// };

// const formStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '16px',
// };

// const inputStyle = {
//   padding: '10px 8px',
//   border: '2px solid black',
//   width: '100%',
//   borderRadius: '9999px',
// };

import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div style={footerContainerStyle}>
      <div style={contactStyle}>
        <p style={textStyle}>16 Gandhi Road, Coimbatore, Tamil Nadu 641002</p>
        <p style={textStyle}>brindhasubramani@gmail.com</p>
        <div style={iconContainerStyle}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={iconWrapperStyle}>
            <FontAwesomeIcon icon={faFacebookF} style={iconStyle} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={iconWrapperStyle}>
            <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={iconWrapperStyle}>
            <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={iconWrapperStyle}>
            <FontAwesomeIcon icon={faGithub} style={iconStyle} />
          </a>
        </div>
      </div>
      <div style={sectionStyle}>
        <h3 style={titleStyle}>HOT CATEGORIES</h3>
        <ul style={listStyle}>
          <li style={linkStyle}>Special Offers</li>
          <li style={linkStyle}>Discounts</li>
          <li style={linkStyle}>Top Brands</li>
          <li style={linkStyle}>Online Exclusive</li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h3 style={titleStyle}>CUSTOMER SERVICE</h3>
        <ul style={listStyle}>
          <li style={linkStyle}>Wishlist</li>
          <li style={linkStyle}>Privacy Policy</li>
          <li style={linkStyle}>Theme FAQs</li>
          <li style={linkStyle}>Store Locations</li>
        </ul>
      </div>
    </div>
  );
}

const footerContainerStyle = {
  padding: '20px 16px',
  marginTop: '96px',
  borderTop: '2px solid #dbdbdd',
  backgroundColor: '#00008B', // Dark Blue
  color: 'white', // White text for contrast
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const contactStyle = {
  flex: '1 1 200px',
  marginBottom: '20px',
};

const sectionStyle = {
  flex: '1 1 200px',
  marginBottom: '20px',
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '1.25rem',
  marginBottom: '16px',
  color: 'white', // White text for contrast
};

const textStyle = {
  opacity: 0.9,
};

const iconContainerStyle = {
  display: 'flex',
  gap: '8px',
  marginTop: '16px',
};

const iconWrapperStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '2px solid #1E90FF', // Dodger Blue
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  color: '#1E90FF', // Dodger Blue
};

const iconStyle = {
  fontSize: '1.25rem',
};

const listStyle = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  paddingLeft: '0',
  color: 'white', // White text for contrast
};

const linkStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'color 0.2s ease-in-out',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const inputStyle = {
  padding: '10px 8px',
  border: '2px solid #1E90FF', // Dodger Blue
  width: '100%',
  borderRadius: '9999px',
};

export default Footer;

