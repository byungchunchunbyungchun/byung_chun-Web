import React from "react";
import "../Global.css";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/index"
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
const Router = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};
export default Router;
