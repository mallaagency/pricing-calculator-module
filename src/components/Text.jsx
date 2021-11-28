import React from "react";
import PropTypes from "prop-types";
import { theme } from "../styles";

function Text({ children = [], size = "md", ...rest }) {
  const title = React.createElement(
    "p",
    { className: theme.text.size[size], rest },
    children
  );
  return title;
}

Text.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  children: PropTypes.node,
};

export default React.memo(Text);
