import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeColor } from '../../change-color';
import { KebabCasePipe } from '../../kebab-case.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgStyle, ChangeColor, UpperCasePipe, LowerCasePipe, CurrencyPipe, DatePipe, FormsModule, KebabCasePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  isHighlighted = false;
  boxColor = 'lightblue';
  boxFontSize = 18;
  sampleText: string = "Hello world ";

  increaseFont() {                    
    this.boxFontSize += 4;
  }


  toggleClass() {
    this.isHighlighted = !this.isHighlighted;
  }

  changeColor(color: string) {
    this.boxColor = color;
  }

 

  /* Pipes & Data */
  studentName: string = "Sambardhana Bishoyi";
  tvprice = 59999.4567;                 
  expiryDate = new Date('2026-07-18');  
}