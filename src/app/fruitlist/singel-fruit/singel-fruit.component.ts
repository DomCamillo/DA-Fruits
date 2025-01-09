import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singel-fruit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './singel-fruit.component.html',
  styleUrl: './singel-fruit.component.scss'
})
export class SingelFruitComponent {
  @Input()fruit =  { color: "red",
    name: "Apfel",
    img:"apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews:[{name: "Kevin W.", text: "ist lecker"},{name: "Arne P.", text: "nicht so meins"}],
  };

  inputData = "";

  @Output()fruitname = new EventEmitter<string>();

  sendInputData(){
    this.fruitname.emit(this.inputData)
    this.inputData = "";
    
  }

}
