import React from "react";
import "./Sidebar.css"; // Import the CSS file with the styles
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        
        <li style={{ display: 'flex', alignItems: 'center' }}>
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 2H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 10.5L10.2929 9.20711C10.6262 8.87377 10.7929 8.70711 11 8.70711C11.2071 8.70711 11.3738 8.87377 11.7071 9.20711L12.2929 9.79289C12.6262 10.1262 12.7929 10.2929 13 10.2929C13.2071 10.2929 13.3738 10.1262 13.7071 9.79289L15 8.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 21L12 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10 22L12 21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 22L12 21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 2V10.5C20 13.5641 20 15.0962 18.9958 16.0481C17.9916 17 16.3753 17 13.1429 17H10.8571C7.62465 17 6.00841 17 5.00421 16.0481C4 15.0962 4 13.5641 4 10.5V2" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>
          <Link to="/dashboard" style={{ marginLeft: '8px' }}>Dashboard</Link>
        </li>


        <li style={{ display: 'flex', alignItems: 'center' }}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z" fill="#ffffff"></path> </g></svg>
        <Link to="/surfbooks" style={{ marginLeft: '8px' }}>Surf E-books</Link>
        </li>

        <li style={{ display: 'flex', alignItems: 'center' }}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.19825 3.29918C5.80046 2 7.86697 2 12 2C16.133 2 18.1995 2 18.8017 3.29918C18.8535 3.41086 18.8972 3.52686 18.9323 3.6461C19.3414 5.0333 17.8802 6.64111 14.9577 9.85674L13 12L14.9577 14.1433C17.8802 17.3589 19.3414 18.9667 18.9323 20.3539C18.8972 20.4731 18.8535 20.5891 18.8017 20.7008C18.1995 22 16.133 22 12 22C7.86697 22 5.80046 22 5.19825 20.7008C5.14649 20.5891 5.10282 20.4731 5.06765 20.3539C4.65857 18.9667 6.11981 17.3589 9.0423 14.1433L11 12L9.0423 9.85674C6.11981 6.64111 4.65857 5.0333 5.06765 3.6461C5.10282 3.52686 5.14649 3.41086 5.19825 3.29918Z" fill="#ffffff"></path> </g></svg>
          <Link to="/takequiz" style={{ marginLeft: '8px' }}>Take Quiz</Link>
        </li>

        <li style={{ display: 'flex', alignItems: 'center', marginTop: 400 }}>
        <svg width="24px" height="24px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_14_1899)"> <path d="M29.666 27.032L34.999 32.335L29.666 37.698" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M34.999 32.335H13.667" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M32.333 53.666C44.1149 53.666 53.666 44.1149 53.666 32.333C53.666 20.5511 44.1149 11 32.333 11C20.5511 11 11 20.5511 11 32.333C11 44.1149 20.5511 53.666 32.333 53.666Z" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_14_1899"> <rect width="46.666" height="46.666" fill="white" transform="translate(9 9)"></rect> </clipPath> </defs> </g></svg>
          <Link to="/logout" style={{ marginLeft: '8px' }}>logout</Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;
