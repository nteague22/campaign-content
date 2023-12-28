const { Route, NavLink, Outlet } = require("react-router-dom")

export default function Campaigns() {
    return (
            <Route path="/" element={<CampaignLanding />}>
                <Route index={true} element={<Landing />} />
                <Route path="ariston" element={<Ariston />} />
            </Route>
        );
}

function Landing() {
    return (
    <div>
        <main>
            <h1>Campaign Content Pages</h1>
        </main>
        <p>
            Please select one of the campaigns to the left to view the content for the campaign.
        </p>
    </div>
    );
}

export function Ariston() {
    return <div>
        <main>
            <h1>Ariston: A new beginning...</h1>
        </main>
    </div>;
}

export function CampaignLanding() {
    return (
        <div>
        <header>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/ariston"}>Ariston</NavLink>
        </header>
        <Outlet />
        </div>
    );
}