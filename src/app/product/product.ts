import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../api-service';
import { Card } from '../card/card';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class product {
  items:any[] = []

  constructor(private apiservice: ApiService, private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.apiservice.getproducts().subscribe((data: any) =>{
      this.items = data;
      this.cdr.detectChanges();
    });
  }
}

