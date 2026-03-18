import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() item: any;
 
}







