import { ProxyState } from "../AppState.js";
import { dndApiService } from "../Services/dndApiService.js";

function draw(){

    let template = ''
    ProxyState.spellLinks.forEach(sl => template += sl.template)

    document.getElementById('spell-links').innerHTML = `
        <ul class="list-group">
            ${template}
        </ul>
    `
}

export class SpellLinksController
{
    constructor(){
        ProxyState.on('spellLinks', draw)
        dndApiService.getSpellLinks()
    }
}