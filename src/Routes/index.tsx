import React, { lazy, Suspense } from "react";
import { Routes as RouteList, Route } from "react-router-dom";

import { CircularProgress } from "@mui/material";

const Home = lazy(() => import("../pages/Home"));
const StreamerRecord = lazy(() => import("../pages/StreamerRecord"));

import { NESTED_PATHS, PATHS } from "./paths";

const Routes: React.FC = () => {
  return (
    <RouteList>
      <Suspense fallback={<CircularProgress />}>
        <Route path={PATHS.DEFAULT} element={<Home />} />
        <Route path={NESTED_PATHS.STREAMER} element={<StreamerRecord />} />

        <Route path={PATHS.NOT_FOUND} element={<Home />} />
      </Suspense>
    </RouteList>
  );
};

export default Routes;
