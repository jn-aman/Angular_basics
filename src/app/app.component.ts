import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string= 'todoList';
  taskList:Array<string>;
  number1:Number=25;
  number2:Number;
  name:string="aman";
  messageName:string="Hello World";
  font:string="";
  constructor(){
    this.taskList=[];
    this.number2=2;
  }

addTask(val){
  this.taskList.push(val);
console.log(this.taskList);


}

OnClick()
{
  this.name="Change aman";
}
OnClick2(name)
{
  this.name=name;
}

OnClick3(font1)
{
  this.font=font1;
}

collectMessage(ev)
{
  console.log(ev);
}

}
