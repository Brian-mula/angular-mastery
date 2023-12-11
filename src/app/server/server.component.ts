import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";


@Component({
    standalone:true,
    selector:'app-server',
    templateUrl:'./server.component.html',
    imports:[CommonModule]
})
export class ServerComponent {
    newServerEnabled:boolean = false;
    serverId:number = 10;
    serverStatus:string = 'offline';
    paragraphStatus:boolean = false;
     logs = [];

    getServerStatus(){
        return this.serverStatus;
    }
    constructor(){
        setTimeout(()=>{
            this.newServerEnabled = true;
        },2000);
    }

    toggleParagraph(){
        this.paragraphStatus = !this.paragraphStatus;
        this.logs.push(this.logs.length + 1);
    }

}