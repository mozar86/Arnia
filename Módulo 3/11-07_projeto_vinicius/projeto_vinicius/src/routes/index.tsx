import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
} from "react-router-dom";
import About from "../pages/About";
import { Contact } from "../pages/Contact";
import Home from "../pages/Home";
import React from "react";

 
const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact">
          <Route path="/contact" element={<Contact />} />
          <Route path="director" element={<Contact toPerson="Director"/>} />
          <Route path="rh" element={<Contact toPerson="RH" />} />
        </Route>
      </>
    )
  );

  export const RouterProviderApp: React.FC = () =>
    <RouterProvider router={router} />