import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { Accordion } from '../accordion/accordion';
import { Detail } from '../detail/detail';

@Component({
  selector: 'app-home',
  imports: [Carousel,Accordion,],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
