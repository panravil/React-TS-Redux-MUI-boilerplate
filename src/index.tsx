import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Button, Card } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { IRootState } from "./store";
import { getData } from "./utils/api";
import { Home } from "./pages/home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is Home Page</div>,
  },
  {
    path: "/home",
    element: (
      <div>
        This is Home Page 
        <Home/>
      </div>
    ),
  },
  {
    path: "/About",
    element: (
      <div>
        This is About Page 
        <div>
          <Card style={{width:'300px', height:'fit'}}>
            <div style={{display:'flex', flexDirection:'row'}}>
              Name
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>Attack:</div>
            <div style={{display:'flex', flexDirection:'row'}}>Defense:</div>
            <div style={{display:'flex', flexDirection:'row'}}>Health:</div>
            <div style={{display:'flex', flexDirection:'row'}}>Type:</div>
          </Card>
        </div>
        <Button>MUI Button</Button>
      </div>
    ),
  },
  {
    path: "/faq",
    element: <div>This is FAQ Page</div>,
  },
  {
    path: "/Contact",
    element: <div>This is Contact Page</div>,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <a href='/home' style={{ marginLeft: "20px" }}>
          Home
        </a>
        <a href='/About' style={{ marginLeft: "20px" }}>
          About
        </a>
        <a href='/Contact' style={{ marginLeft: "20px" }}>
          Contact
        </a>
        <a href='/Faq' style={{ marginLeft: "20px" }}>
          FAQ
        </a>
      </div>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
);

const mapStateToProps = ({ demo }: IRootState) => {
  const { list } = demo;
  return { list };
};
type ReduxType = ReturnType<typeof mapStateToProps>;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
