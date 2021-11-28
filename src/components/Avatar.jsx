import React from "react";
import PropTypes from "prop-types";

function Avatar({ src, alt }) {
  const defaultImage = require("../assets/images/avatars/user.png").default;
  return (
    <img
      className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700"
      src={src || defaultImage}
      alt={alt}
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Avatar;
