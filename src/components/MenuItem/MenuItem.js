import React from "react";
import { withRouter } from 'react-router-dom'; 

// STYLE
import "./MenuItem.scss";




const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {

  const style = {
      backgroundImage: `url(${imageUrl})`,
  }

  const handleChangeRoute = () => {
    history.push(`${match.url}${linkUrl}`)
}



  return (
    <div className={`menu-item ${size}`} onClick={handleChangeRoute}>
      <div className="background-image" style={style}></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
