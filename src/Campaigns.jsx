import { NavLink } from "react-router-dom";

function CampaignLanding() {
    return (
        <div>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="greenwalde">Greenwalde</NavLink>
                <NavLink to="ariston">Ariston</NavLink>
            </header>
            <main>
                <h1>Campaign Content Pages</h1>
            </main>
            <p>
                Please select one of the campaigns to the left to view the content for the campaign.
            </p>
        </div>
    );
}

export default {
    path: "/",
    element: <CampaignLanding />
}