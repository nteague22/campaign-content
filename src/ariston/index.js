import { NavLink, Outlet } from "react-router-dom";

const campaigns = {
    newBeginning: "a-new-beginning"
};

function Ariston() {
    return <div>
        <header>
            <ul>
                <li><NavLink to={campaigns.newBeginning}>A New Beginning</NavLink></li>
            </ul>
        </header>
        <Outlet />
    </div>
}

function Landing() {
    return (
        <main>
            <p>
                Select one of the campaigns
            </p>
        </main>
    );
}

export const Routes = {
    path: "/ariston",
    Component: Ariston,
    children: [
        { index: true, Component: Landing },
        { path: campaigns.newBeginning, lazy: (() => import("./a-new-beginning")) }
    ]
};