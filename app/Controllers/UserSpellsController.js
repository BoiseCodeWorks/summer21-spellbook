import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";

function _draw(){
    let template = ''
    ProxyState.userSpells.forEach(us => template += us.listTemplate)

    document.getElementById('user-spells').innerHTML = `
     <div>
        ${ProxyState.userSpells.length}/10
     </div>
     <ul>
        ${template}
     </ul>
    ` 

}

export class UserSpellsController
{
    constructor(){
        ProxyState.on('userSpells', _draw)
        sandboxService.getUserSpells()
    }

    async addSpell(){
        try {
           await sandboxService.addUserSpell()
        }catch(e){
            // @ts-ignore
            Swal.fire({
                title: e.message,
                width: 600,
                padding: '3em',
                background: '#000',
                color: "#fff",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://sweetalert2.github.io/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
            })
        }
    }

    async removeSpell(spellId){
        // @ts-ignore
        let result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          if(result.isConfirmed){
            sandboxService.removeUserSpell(spellId)
          }


    }

}