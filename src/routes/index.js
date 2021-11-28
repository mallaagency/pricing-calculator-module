import React from "react";
import { Routes as RenderRoutes, Route } from "react-router-dom";

import { NoFoundPage } from "../pages/404";
import PricingPage from "../pages/pricing/PricingPage";
import PrivateExamplePage from "../pages/private-xample-page/PrivateExamplePage";

function Routes() {
  return (
    <RenderRoutes>
      <Route path="private" element={<PrivateExamplePage />} />
      <Route path="price" element={<PricingPage />} />
      <Route path="*" element={<NoFoundPage />} />
    </RenderRoutes>
  );
}

export default Routes;
