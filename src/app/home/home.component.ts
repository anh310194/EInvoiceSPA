import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isCollapsed = 1;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    if(this.isCollapsed == 1){
      this.isCollapsed = 0;
    }
    else{
      this.isCollapsed = 1
    }
  }
}
