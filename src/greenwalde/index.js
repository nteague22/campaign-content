import { Link, NavLink, Outlet } from "react-router-dom";

const locations = {
    dunleavys: "dunleavys",
    temple: "temple",
    whispers: "whispers",
    calandors: "calandors",
    lucidDreams: "lucid-dreams"
};

export default function Greenwalde() {
    return (
        <div>
            <header>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/greenwalde">Greenwalde</NavLink></li>
                    <li><NavLink to={locations.dunleavys}>Dunleavy&apos;s</NavLink></li>
                    <li><NavLink to={locations.temple}>Community Temple</NavLink></li>
                    <li><NavLink to={locations.whispers}>Whisper In The Trees</NavLink></li>
                    <li><NavLink to={locations.calandors}>Calandor&apos;s Arcana</NavLink></li>
                    <li><NavLink to={locations.lucidDreams}>Lucid Dreams</NavLink></li>
                </ul>
            </header>
            <br />
            <Outlet />
        </div>
    );
}

function Landing() {
    return (
        <main>
            <h1>
                <strong>Greenwalde</strong>
            </h1>
            <br />
            <p>
                Greenwalde is a quaint little town nestled on the southeastern edge of Neverwinter Wood.  It supplies most
                common amenities a small town would offer, with:
            </p>
                <ul>
                    <li><Link to={locations.dunleavys}>Dunleavy&apos;s Outfitters: A general provisions and outfitter store</Link></li>
                    <li><Link to={locations.temple}>Community Temple: offers healing and other curative/restorative services</Link></li>
                    <li><Link to={locations.whispers}>Whispers In The Trees: tavern and inn</Link></li>
                    <li><Link to={locations.calandors}>Calandor&apos;s: arcana and mage supplies</Link></li>
                    <li><Link to={locations.lucidDreams}>Lucid Dreams: alchemical supplies and potions</Link></li>
                </ul>
                <h2>Characters</h2>
                <br />
                <ul>
                    <li><Link to="characters/dunleavy">Master Dunleavy</Link></li>
                </ul>
        </main>
    );
}

export const Routes = {
    path: "/greenwalde",
    Component: Greenwalde,
    children: [
        { index: true, Component: Landing },
        { path: locations.dunleavys, lazy: (() => import("./Dunleavys")) },
        { path: locations.temple, lazy: (() => import("./Temple")) },
        { path: locations.whispers, lazy: (() => import("./Whispers")) },
        { path: locations.calandors, lazy: (() => import("./Calandors")) },
        { path: locations.lucidDreams, lazy: (() => import("./LucidDreams")) },
        {
            path: "characters",
            children: [
                {
                    path: "dunleavy",
                    lazy: (() => import("./characters/Dunleavy"))
                }
            ]
        }]
    };