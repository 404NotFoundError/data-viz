import React from 'react';
import FilterItemStyled from './FilterItemStyled';

const svg = {
    "grade": 
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.80269 9.73875L12.8 2.66675L15.7974 9.73875L23.4667 10.3894L17.6427 15.4347L19.392 22.9334L12.8 18.9547L6.20803 22.9334L7.95736 15.4347L2.13336 10.3894L9.80269 9.73875ZM13.8347 10.5814L12.8 8.13875L11.7654 10.5601L11.264 11.7441L9.98403 11.8507L7.34936 12.0747L9.35469 13.8134L10.3254 14.6561L10.0374 15.9147L9.44003 18.4854L11.7014 17.1201L12.8 16.4587L13.8987 17.1414L16.16 18.5067L15.5627 15.9361L15.2747 14.6774L16.2454 13.8347L18.2507 12.0961L15.616 11.8721L14.336 11.7654L13.8347 10.5814Z"/>
        </svg>,
    "vintage": 
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.9333 5.33332C14.9333 6.50665 13.984 7.46665 12.8 7.46665C11.6267 7.46665 10.6667 6.50665 10.6667 5.33332C10.6667 4.92798 10.7733 4.55465 10.976 4.23465L12.8 1.06665L14.624 4.23465C14.8267 4.55465 14.9333 4.92798 14.9333 5.33332ZM13.8667 10.6666H19.2C20.9707 10.6666 22.4 12.096 22.4 13.8666V23.4666C22.4 24.0533 21.92 24.5333 21.3333 24.5333H4.26668C3.68001 24.5333 3.20001 24.0533 3.20001 23.4666V13.8666C3.20001 12.096 4.62935 10.6666 6.40001 10.6666H11.7333V8.53332H13.8667V10.6666ZM20.2667 22.4H5.33335V19.2C6.29335 19.1893 7.21068 18.8053 7.89335 18.1227L9.05601 16.9813L10.1973 18.1227C11.5947 19.52 14.0267 19.5093 15.4133 18.1227L16.5653 16.9813L17.7067 18.1227C18.3893 18.8053 19.3067 19.1893 20.2667 19.2V22.4ZM18.8267 16.992C19.2107 17.3866 19.7227 17.5893 20.2667 17.6V13.8666C20.2667 13.28 19.7867 12.8 19.2 12.8H6.40001C5.81335 12.8 5.33335 13.28 5.33335 13.8666V17.6C5.87735 17.5893 6.38935 17.376 6.76268 16.992L9.04535 14.72L11.3173 16.992C12.1067 17.7813 13.4827 17.7813 14.272 16.992L16.5547 14.72L18.8267 16.992Z"/>
        </svg>,
    "price":
        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7143 19.7333C14.037 19.7333 11.7223 18.2186 10.5703 15.9999H16.7143V13.8666H9.86631C9.81297 13.5146 9.78097 13.1626 9.78097 12.7999C9.78097 12.4373 9.81297 12.0853 9.86631 11.7333H16.7143V9.59995H10.5703C11.7223 7.38128 14.0476 5.86662 16.7143 5.86662C18.4316 5.86662 20.0103 6.49595 21.2263 7.54128L23.1143 5.65328C21.4183 4.12795 19.1676 3.19995 16.7143 3.19995C12.533 3.19995 8.99164 5.87728 7.66897 9.59995H3.91431V11.7333H7.17831C7.13564 12.0853 7.11431 12.4373 7.11431 12.7999C7.11431 13.1626 7.13564 13.5146 7.17831 13.8666H3.91431V15.9999H7.66897C8.99164 19.7226 12.533 22.3999 16.7143 22.3999C19.1783 22.3999 21.4183 21.4719 23.1143 19.9466L21.2156 18.0586C20.0103 19.1039 18.4423 19.7333 16.7143 19.7333Z"/>
        </svg>,
    "taste":
        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5143 4.02133L12.7143 4.91733C12.7143 4.91733 11.3489 6.464 9.97292 8.46933C8.59692 10.4747 7.11426 12.8747 7.11426 15.1787C7.11426 16.876 7.78854 18.5039 8.98877 19.7041C10.189 20.9044 11.8169 21.5787 13.5143 21.5787C15.2116 21.5787 16.8395 20.9044 18.0397 19.7041C19.24 18.5039 19.9143 16.876 19.9143 15.1787C19.9143 12.8747 18.4316 10.4747 17.0556 8.46933C15.6796 6.464 14.3143 4.91733 14.3143 4.91733L13.5143 4.02133ZM13.5143 7.36C13.9836 7.91467 14.4103 8.37333 15.3063 9.67466C16.5969 11.552 17.7809 13.9413 17.7809 15.1787C17.7809 17.5467 15.8823 19.4453 13.5143 19.4453C11.1463 19.4453 9.24759 17.5467 9.24759 15.1787C9.24759 13.9413 10.4316 11.552 11.7223 9.67466C12.6183 8.37333 13.0449 7.91467 13.5143 7.36Z"/>
        </svg>
};

const FilterItem = ({title, isActive, changeCurrentFilter}) => (
    <FilterItemStyled isActive={isActive} onClick={changeCurrentFilter}>
        {svg[title]}
        <h5 className="title">{title}</h5>
    </FilterItemStyled>
);
    
export default FilterItem;