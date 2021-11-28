import React from "react";
import PropTypes from "prop-types";

function Title({ children = [], type }) {
  let classStyle;
  switch (type) {
    case "h1":
      classStyle =
        "xxl:text-6xl  xl:text-4xl text-gray-700 md:text-3xl tracking-tighter font-extrabold f-f-l";
      break;
    case "h2":
      classStyle =
        "xxl:text-5xl xl:text-3xl text-gray-700 md:text-2xl tracking-tighter font-bold f-f-l dark:text-gray-400";
      break;
    case "h3":
      classStyle = "text-lg font-bold text-gray-700 dark:text-gray-400";
      break;
    case "h4":
      classStyle = "text-md font-bold text-blue-600";
      break;
    case "h5":
      classStyle = "text-sm font-bold text-gray-700";
      break;
    case "h6":
      classStyle = "text-xs font-bold text-gray-700";
      break;
    default:
      break;
  }
  const title = React.createElement(type, { className: classStyle }, children);
  return title;
}

Title.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  children: PropTypes.node,
  color: PropTypes.string,
};

export default React.memo(Title);
