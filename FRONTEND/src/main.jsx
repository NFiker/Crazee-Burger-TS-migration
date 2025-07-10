import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import GlobalStyle from "./theme/GlobalStyle.js";
import { router } from "./routers/router.jsx";
import { theme } from "./theme/index.js";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { OrderContextProvider } from "./context/OrderContext.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <OrderContextProvider>
        <RouterProvider router={router} />
      </OrderContextProvider>
    </ThemeProvider>
  </StrictMode>
);
