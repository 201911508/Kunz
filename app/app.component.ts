import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class appcomponent implements OnInit {

  constructor() { }
  values =["First","Second","Third","Fourth"];
  ngOnInit():void{

  }
  
}
