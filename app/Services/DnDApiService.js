import { ProxyState } from "../AppState.js"
import { SpellDetails } from "../Models/SpellDetails.js"
import { SpellLink } from "../Models/SpellLink.js"

// @ts-ignore
let dndApi = 'https://www.dnd5eapi.co'

class DnDApiService {
    async getSpellDetails(url) {
        // @ts-ignore
        let res = await axios.get(dndApi + url)
        ProxyState.spellDetails = new SpellDetails(res.data)
    }
    async getSpellLinks(){
        // @ts-ignore
        let res = await axios.get(dndApi + '/api/spells')
        ProxyState.spellLinks = res.data.results.map(sl => new SpellLink(sl))
    }

}

export const dndApiService = new DnDApiService()