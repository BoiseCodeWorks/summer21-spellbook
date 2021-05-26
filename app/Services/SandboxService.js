import { ProxyState } from "../AppState.js"
import { UserSpell } from "../Models/UserSpell.js"

// @ts-ignore
const sandboxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/jake"
})

class SandboxService{

    // GET
    async getUserSpells(){
        let res = await sandboxApi.get('spells')
        ProxyState.userSpells = res.data.map(us => new UserSpell(us))
    }
    
    
    // POST
    async addUserSpell(){
        if(ProxyState.userSpells.length >= 10){
            throw new Error("Nope your brain is full...")
        }
        if(ProxyState.userSpells.find(us => us.name == ProxyState.spellDetails.name)){
            throw new Error(`But why? You already know ${ ProxyState.spellDetails.name }!`)
        }

        let res = await sandboxApi.post('spells', ProxyState.spellDetails)
        ProxyState.userSpells = [...ProxyState.userSpells, new UserSpell(res.data)]
    }

    // DELETE
    async removeUserSpell(spellId){
        // https://bcw-sandbox.herokuapp.com/api/jake/spells/1929034i9032
        await sandboxApi.delete('spells/'+spellId)
        ProxyState.userSpells = ProxyState.userSpells.filter(us => us.id != spellId)

    }

}

export const sandboxService = new SandboxService()