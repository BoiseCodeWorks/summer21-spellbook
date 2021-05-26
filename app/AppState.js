import { SpellDetails } from "./Models/SpellDetails.js"
import { SpellLink } from "./Models/SpellLink.js"
import { UserSpell } from "./Models/UserSpell.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  
  /** @type {SpellLink[]} */
  spellLinks = []

  /** @type {SpellDetails} */
  spellDetails = null

  /** @type {UserSpell[]} */
  userSpells = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
