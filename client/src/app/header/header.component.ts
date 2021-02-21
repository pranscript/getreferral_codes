import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
import { modelData } from '../model';
import { PassDataService } from '../pass-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() outputData: EventEmitter<any> = new EventEmitter<any>();
  data: modelData[]=[];
  searchTerm: string="";
  topnav:any = "popular";
  popular:string = "popular";
  latest:string = "latest";
  recommended:string = "recommended";
  active:string[] = ["active", "inactive", "inactive"];
  email:string="";
  confirmation:boolean= false;
  
  constructor(private route: ActivatedRoute, private service: PassDataService) {
    this.route.paramMap.subscribe(params => {
      this.topnav = params.get('topnav')!==null ? params.get('topnav'):"popular";
      this.showActive(this.topnav);
      this.data= this.service.getData();
   })
   }

  ngOnInit(): void {
  }

  showActive(path:string) {
    if(path =="popular"){
      this.active =  ["active", "inactive", "inactive"]
    }else if(path =="latest"){
      this.active =  ["actiinactiveve", "active", "inactive"]
    }else if(path =="recommended"){
      this.active =  ["inactive", "inactive", "active"]
    }else{
      this.active =  ["inactive", "inactive", "inactive"]
    }
  }

  public onSelection() {
    // console.log("inside emitter");
    // console.log("selection is" + selection.name);
    // this.outputData.emit(selection);
    // this.searchTerm ="";
    this.active =  ["inactive", "inactive", "inactive"]
    }

  submitEmail(email:string){
    if(email!=undefined){
      this.service.saveEmail(email);
    }
    this.email="";
    this.confirmation=true;
  }

}
