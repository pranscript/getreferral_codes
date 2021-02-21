import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { modelData } from '../model';
import { PassDataService } from '../pass-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Output() outputData: EventEmitter<any> = new EventEmitter<any>();
  topnav:any = "popular";
  popular:string = "popular";
  latest:string = "latest";
  recommended:string = "recommended";
  sidenav:string="sidenav"
  showPopular:string="show active"
  showLatest:string="show active"
  showRecommended:string="show active"
  showSidenav:string="show active"
  data:modelData[] = [];
  tags:string[] =[];
  // data:modelData[] = [
  //   { name: "Coinbase", text: "Free stock worth $2.50–$200", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" },
  //   { name: "Rakuten", text: "$20 bonus", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Lyft", text: "esf selj eshf shkf ke hfk", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Coinbase", text: "esf selj eshf shkf ke hfk", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" },
  //   { name: "Coinbase", text: "Free stock worth $2.50–$200", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" },
  //   { name: "Rakuten", text: "esf selj eshf shkf ke hfk", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Lyft", text: "esf selj eshf shkf ke hfk", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Coinbase", text: "esf selj eshf shkf ke hfk", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" },
  //   { name: "Coinbase", text: "esf selj eshf shkf ke hfk", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" },
  //   { name: "Rakuten", text: "esf selj eshf shkf ke hfk", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Lyft", text: "esf selj eshf shkf ke hfk", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Coinbase", text: "esf selj eshf shkf ke hfk", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" },
  //   { name: "Coinbase", text: "esf selj eshf shkf ke hfk", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" },
  //   { name: "Rakuten", text: "esf selj eshf shkf ke hfk", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Lyft", text: "esf selj eshf shkf ke hfk", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Coinbase", text: "esf selj eshf shkf ke hfk", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" },
  //   { name: "Coinbase", text: "esf selj eshf shkf ke hfk", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" },
  //   { name: "Rakuten", text: "esf selj eshf shkf ke hfk", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Lyft", text: "esf selj eshf shkf ke hfk", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Coinbase", text: "esf selj eshf shkf ke hfk", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" },
  //   { name: "Coinbase", text: "esf selj eshf shkf ke hfk", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" },
  //   { name: "Rakuten", text: "esf selj eshf shkf ke hfk", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Lyft", text: "esf selj eshf shkf ke hfk", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"" },
  //   { name: "Coinbase", text: "esf selj eshf shkf ke hfk", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" }
  // ];

  // public onFocus(): void {
  //   console.log("inside emitter");
  //   this.outputData.emit(this.data);
  // }

  constructor(private route: ActivatedRoute, private service: PassDataService, private router: Router) { 
    // console.log("topnav info "+this.topnav);
    this.route.paramMap.subscribe(params => {
      this.topnav = params.get('topnav')!==null ? params.get('topnav'):"popular";
      console.log("topnav info "+this.topnav);
      this.data= this.service.getData();
      for(let i=0; i<this.data.length;i++){
        this.tags.push(this.data[i].tag);
      }
      
      this.showActive(this.topnav);
      // this.data= this.service.getData();
      
   })

  }

  ngOnInit() {

  }

  showActive(path:string) {
    console.log("path is " + path);
    if(path =="popular"){
      this.showLatest = "";
      this.showRecommended="";
      this.showSidenav=""
      this.showPopular = "show active";
    }else if(path =="latest"){
      this.showRecommended="";
      this.showPopular = "";
      this.showSidenav=""
      this.showLatest = "show active";
    }else if(path =="recommended"){
      this.showLatest = "";
      this.showPopular = "";
      this.showSidenav=""
      this.showRecommended="show active";
    }else if(this.tags.includes(path)){
      this.showLatest = "";
      this.showPopular = "";
      this.showRecommended="";
      this.showSidenav="show active"
    }
    else{
      this.showLatest = "";
      this.showRecommended="";
      this.showPopular = "show active";
      this.router.navigate([''])
    }
  }

}
