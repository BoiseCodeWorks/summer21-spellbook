export class SpellDetails {
    constructor(data) {        
        this.name = data.name
        this.description = data.description || data.desc.join('')
        this.level = data.level
        this.range = data.range
        this.duration = data.duration
        this.components = data.components
    }


    get template(){
        return `
        <div class="card shadow">
            <div class="card-body">
                <h3 class="card-title d-flex justify-content-between">
                    <span>${this.name}</span>
                    <span><i class="mdi mdi-clock"></i> ${this.duration}</span>
                </h3>
                <p>${this.description}</p>
                <p>
                    <b>Range: ${this.range}</b>
                </p>
            </div>
            <div class="card-footer text-right">
                <button onclick="app.userSpellsController.addSpell()" class="btn btn-primary">Learn Spell</button>
            </div>
        </div>
        `
    }

}
