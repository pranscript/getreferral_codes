import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { modelData } from '../model';
import { PassDataService } from '../pass-data.service';

@Component({
  selector: 'app-refinfo',
  templateUrl: './refinfo.component.html',
  styleUrls: ['./refinfo.component.css']
})
export class RefinfoComponent implements OnInit {

  ref:modelData | undefined;
  title:string | undefined;
  data:modelData[] = [];
  constructor(private route: ActivatedRoute, private service: PassDataService, private router: Router) { 
    this.route.paramMap.subscribe(params => {
      let refName = params.get('refName');
      console.log("ref info "+refName);
      this.data= this.service.getData();
      this.ref = this.data.find(e => e.name === refName);
      if(this.ref == undefined) this.router.navigate(['']);
   })
  }

  ngOnInit(): void {

  }

}
