import React from "react";
import { Routes as RouteList, Route } from "react-router-dom";

import { Home, StreamerRecord } from "../pages";

import { NESTED_PATHS, PATHS } from "./paths";

const Routes: React.FC = () => {
  return (
    <RouteList>
      <Route path={PATHS.DEFAULT} element={<Home />} />
      <Route path={NESTED_PATHS.STREAMER} element={<StreamerRecord />} />

      <Route path={PATHS.NOT_FOUND} element={<Home />} />
    </RouteList>
  );
};

export default Routes;
