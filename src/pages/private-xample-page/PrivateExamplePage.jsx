import React from "react";
import withAuthentication from "../../HOC/withAuthentication";

function PrivateExamplePage() {
  return <div>demo private example page</div>;
}
export default withAuthentication(PrivateExamplePage);
