import { animate, style, transition, trigger, state, query, stagger} from '@angular/animations';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute  } from '@angular/router';
import { PassDataService } from './pass-data.service';
import { TabsComponent } from './tabs/tabs.component';
import { modelData } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ]),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit{
  title = 'client';
  relativeRoute:ActivatedRoute | undefined;
  dataSource!: MatTableDataSource<any>;
  // @ViewChild(TabsComponent) child: TabsComponent;
  searchTerm: string="";
  data: modelData[] = [];
  constructor(private _snackBar: MatSnackBar, private router:Router, private route: ActivatedRoute, private service: PassDataService) {
    this.relativeRoute =  route;
  }
  
  ngOnInit() {
    // this.data = this.service.getData();
  }
  
  // public doSomething(data: any):void {
  //   console.log("inside do something");
  //   this.dataSource= data;
    
  // }

  // public routeTo(selectedRef: modelData):void {
  //   console.log("route to " + selectedRef.name);
  //   // this.router.navigateByUrl('/ref/'+selectedRef.name.toLocaleLowerCase());
    
  //   // this.router.navigate(['/ref', selectedRef.name.toLocaleLowerCase()]);
  // }

  // applyFilter() {
  //   console.log("filter");
  //   this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  //   console.log(this.dataSource);
  // }
  
  openSnackBar() {
    this._snackBar.open("Copied", "Hurray!!", {
      duration: 2000,
    });
  }
}
