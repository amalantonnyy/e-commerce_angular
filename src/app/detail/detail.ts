import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
    item:any;
    id: number =0;

  constructor(private apiservice: ApiService, private cdr: ChangeDetectorRef, private route: ActivatedRoute){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.apiservice.getitem(this.id).subscribe((data: any) =>{
      this.item = data;
      this.cdr.detectChanges();
    });

  }
}
