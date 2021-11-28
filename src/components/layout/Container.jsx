import React from "react";
import PropTypes from "prop-types";
import { theme } from "../../styles";

function Container({ children }) {
  return <div className={theme.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
