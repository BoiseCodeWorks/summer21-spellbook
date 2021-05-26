import { ProxyState } from "./AppState.js";
import { SpellDetailsController } from "./Controllers/SpellDetailsController.js";
import { SpellLinksController } from "./Controllers/SpellLinksController.js";
import { UserSpellsController } from "./Controllers/UserSpellsController.js";


class App {
  userSpellsController = new UserSpellsController() 
  spellDetailsController = new SpellDetailsController() 
  spellLinksController = new SpellLinksController() 
  
}

// DEBUG ONLY
// @ts-ignore
window.proxyState = ProxyState


window["app"] = new App();
