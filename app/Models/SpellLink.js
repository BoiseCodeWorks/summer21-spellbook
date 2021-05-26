
export class SpellLink {
    constructor(data) {
        this.index = data.index;
        this.name = data.name;
        this.url = data.url;
    }

    get template(){
        return `
            <li class="list-group-item action" onclick="app.spellDetailsController.getSpellDetails('${this.url}')">${this.name}</li>
        `

    }
}


