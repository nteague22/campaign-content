import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CampaignRoot from "./Campaigns";
import { Routes as Greenwalde } from "./greenwalde/index";
import { Routes as Ariston } from "./ariston/index";

const mount = document.getElementById("mountpoint");
if (mount instanceof HTMLDivElement) {
    const router = createBrowserRouter([
        CampaignRoot,
        Ariston,
        Greenwalde
    ]);
    const root = createRoot(mount);
    root.render(<RouterProvider router={router} />);
}