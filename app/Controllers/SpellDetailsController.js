import { ProxyState } from "../AppState.js";
import { dndApiService } from "../Services/dndApiService.js";

function draw(){
    document.getElementById('spell-details').innerHTML = ProxyState.spellDetails.template
}

export class SpellDetailsController
{
    constructor(){
        ProxyState.on('spellDetails', draw)
    }

    getSpellDetails(url){
        dndApiService.getSpellDetails(url)
    }

}