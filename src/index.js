import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Campaigns from "./Campaigns";

const mount = document.getElementById("mountpoint");
if (mount instanceof HTMLDivElement) {
    const router = createBrowserRouter(
        createRoutesFromElements(<Campaigns />)
    );
    const root = createRoot(mount);
    root.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>);
}