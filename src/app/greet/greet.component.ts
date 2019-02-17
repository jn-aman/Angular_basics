import {Component} from "@angular/core";

@Component({
    
    
    selector:'app-greet',
    template:'<div>hello {{name}}</div>'

})

export class GreetComponent{
    name:string;
    constructor()
    {
        this.name="aman";
    }


}