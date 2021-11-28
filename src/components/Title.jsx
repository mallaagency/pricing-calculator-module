import React from "react";
import PropTypes from "prop-types";
import { theme } from "../styles";

function Title({ children = [], type }) {
  const classes = theme.title.size[type];
  const title = React.createElement(type, { className: classes }, children);
  return title;
}

Title.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  children: PropTypes.node,
  color: PropTypes.string,
};

export default React.memo(Title);
