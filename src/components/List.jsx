import React from "react";
import PropTypes from "prop-types";
import { theme } from "../styles";

function List({ renderItem, data, showBottomDivider, listClasses }) {
  const renderItemComponent = (item) => {
    return (
      <div className={showBottomDivider ? theme.divider.small : ""}>
        {renderItem(item)}
      </div>
    );
  };

  const result = data?.map(renderItemComponent);

  return <div className={listClasses || theme.list.container}>{result}</div>;
}

List.propTypes = {
  renderItem: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  showBottomDivider: PropTypes.bool,
  listClasses: PropTypes.string,
};

export default List;
