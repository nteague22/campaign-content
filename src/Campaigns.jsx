import { NavLink } from "react-router-dom";
import { info as greenwaldeInfo } from "./greenwalde";
import { root as aristonAdv } from "./ariston";

function CampaignLanding() {
    const infos = [greenwaldeInfo];
    const adventures = [aristonAdv];
    return (
        <div>
            <main>
                <h1>
                    <strong>Campaign Content Pages</strong>
                </h1>
                <br />
                <p>
                    This is the landing page for the campaigns collection!
                    Choose one of the campaigns below:
                    <ul>
                        {adventures.map(adv => <li key={adv.name}><NavLink to={adv.path}>{adv.name}</NavLink></li>)}
                    </ul>
                    <br />
                    For information on locations:
                    <ul>
                        {infos.map(info => <li key={info.name}><NavLink to={info.path}>{info.name}</NavLink></li>)}
                    </ul>
                </p>
            </main>
        </div>
    );
}

export default {
    path: "/",
    element: <CampaignLanding />
}