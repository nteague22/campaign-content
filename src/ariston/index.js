import { NavLink, Outlet } from "react-router-dom";

export const root = {path: "ariston", name: "Ariston Adventures"};

const adventures = {
    newBeginning: { path: "a-new-beginning", name: "A New Beginning"}
};

function Ariston() {
    return <div>
        <header>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/ariston"}>Ariston</NavLink></li>
            </ul>
        </header>
        <Outlet />
    </div>
}

function Landing() {
    return (
        <main>
            <p>
                Adventures in the town of Ariston
                <br />
                <ul>
                    {Object.values(adventures).map(adv => <li key={adv.path}><NavLink to={adv.path}>{adv.name}</NavLink></li>)}
                </ul>
            </p>
        </main>
    );
}

export const Routes = {
    path: "/ariston",
    Component: Ariston,
    children: [
        { index: true, Component: Landing },
        { path: adventures.newBeginning.path, lazy: (() => import("./a-new-beginning")) }
    ]
};