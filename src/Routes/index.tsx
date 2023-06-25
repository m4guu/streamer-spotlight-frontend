import React from "react";
import { Routes as RouteList, Route } from "react-router-dom";

import { Home, StreamerRecord } from "../pages";

import { PATHS } from "./paths";

const Routes: React.FC = () => {
  return (
    <RouteList>
      <Route path={PATHS.default} element={<Home />} />
      <Route path={PATHS.STREAMER} element={<StreamerRecord />} />

      <Route path={PATHS.notFound} element={<Home />} />
    </RouteList>
  );
};

export default Routes;
