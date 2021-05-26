import { SpellDetails } from "./SpellDetails.js";

// REVIEW inheritance principle of oop
export class UserSpell extends SpellDetails {
    constructor(data){
        super(data)
        this.id = data.id
        this.user = data.user
    }

    
    get listTemplate(){

        return `
            <li class="list-group-item d-flex justify-content-between">
                <span>${this.name}</span>
                <span 
                    class="action p-1 rounded-circle" 
                    onclick="app.userSpellsController.removeSpell('${this.id}')"
                    >
                    <i class="mdi mdi-trash-can text-danger"></i>
                </span>

            

            </li>
        `

    }
}