import React from "react";
import { createRoot } from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Campaigns, { Ariston, CampaignLanding, Landing } from "./Campaigns";

const mount = document.getElementById("mountpoint");
if (mount instanceof HTMLDivElement) {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<CampaignLanding />}>
                <Route index={true} element={<Landing />} />
                <Route path="ariston" element={<Ariston />} />
            </Route>)
    );
    const root = createRoot(mount);
    root.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>);
}