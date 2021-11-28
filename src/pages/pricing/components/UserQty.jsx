import React from "react";
// import PropTypes from "prop-types";
import { Text, Title } from "../../../components";

function UserQty({ subTitle }) {
  return (
    <div className="mb-12">
      <Title type="h3">Elige la cantidad de usuarios</Title>
      <Text>{subTitle}</Text>
    </div>
  );
}

UserQty.propTypes = {};

export default UserQty;
