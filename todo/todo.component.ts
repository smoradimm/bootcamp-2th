import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  totalindex=0;  
  tempnameoftask=""
  temp:any;
  
  Menulistitem :any[]= [{
          task:"" ,
          isdo:false,
          index:0 
  }
];
  onHandledo(){
    var Menulistitem1:any []=[{
      task :"",
      isdo:false,
      index: Number
    } ]   ;
    console.log(this.temp);
    
    Menulistitem1= this.Menulistitem.filter(({task})=>task===this.temp);

    Menulistitem1[0].isdo=true;            
  }
  onHandlemiit(){
    this.Menulistitem= this.Menulistitem.filter(({task})=>task!==this.temp);

  }
  onHandleinsert(){
      this.totalindex++;
      var Menulistitem1={
      task :this.temp,
      isdo:false,
      index:this.totalindex    
    }    
      this.Menulistitem.push(Menulistitem1);
      console.log(Menulistitem1);
    
  }
  onChangeTextin(e:any)
  {  
    console.log(e.target.value);
    this.temp=e.target.value;
  
  }
  
}
function Callback(): (value: any, index: number, array: any[]) => value is any {
  throw new Error('Function not implemented.');
}

