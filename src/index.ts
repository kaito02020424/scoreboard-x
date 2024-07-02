import { ScoreboardX } from "..";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";


const intrval = setInterval(() => {
    for (const player of bedrockServer.level.getPlayers().filter(player => !player.isSimulated())) {
        ScoreboardX.sendTo(player);
    }
}, ScoreboardX.getSpeed());

events.serverStop.on(() => {
    clearInterval(intrval);
});
