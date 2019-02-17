import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
@Input() message;
@Input() font;
@Output() messageChanged = new EventEmitter();

changeMessage()
{
this.messageChanged.emit(this.message+"new added");

}

}
