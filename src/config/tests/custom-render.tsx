import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { RenderOptions, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeConfig } from "../../styles/theme";

const ProvidersWrapper: React.FCWithChildren = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeConfig>{children}</ThemeConfig>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: ProvidersWrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
