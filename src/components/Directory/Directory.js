import React from "react";
import { connect } from "react-redux";

// STYLE
import "./Directory.scss";

// COMPONENTS
import MenuItem from "../MenuItem/MenuItem";

const Directory = ({ sections }) => {
  const renderMenuItems = () => {
    return sections.map(({ title, imageUrl, size, id, linkUrl }) => {
      return (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      );
    });
  };

  return <div className="directory-menu">{renderMenuItems()}</div>;
};

const mapStateToProps = state => {
  return {
    sections: state.directory.sections
  };
};

export default connect(mapStateToProps)(Directory);
