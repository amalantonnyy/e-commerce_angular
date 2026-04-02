import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service';
import { Card } from '../card/card';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class product implements OnInit {
  items:any[] = []

  constructor(private apiservice: ApiService, private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.apiservice.getproducts().subscribe({
      next: (data: any) => {
        this.items = data.products;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}

