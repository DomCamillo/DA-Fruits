import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingelFruitComponent } from './singel-fruit/singel-fruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SingelFruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {
 
  
  fruitlistdata = inject(FruitlistdataService)  
 

 

  addcomment(comment:string, index:number){
   this.fruitlistdata.fruitlist[index].reviews.push({
      name: "Dom Camillo",
      text: comment,
   })
    
  }

  nameLog(name:string){
      console.log(name)
  }

}
