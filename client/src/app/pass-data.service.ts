import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { modelData } from './model';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  data:modelData[] = [
    { name: "coinbase",title:"Coinbase", text: "Free stock worth $2.50–$200",description:"Get a $20 welcome bonus when you sign up for Rakuten (previously known as Ebates) using a friend’s referral link and make $20 worth of purchases within 90 days of signing up. The referrer gets a $20 bonus once you do so.", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"coinbase-code", referralURL:"https://coinbaseurl.com", tag:"crypto"},
    { name: "rakuten",title:"Rakuten", text: "$20 bonus",description:"", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"CDCDSSDC", referralURL:"", tag:"entertainment" },
    { name: "lyft",title:"Lyft", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"", tag:"travel" },
    { name: "coinbase2",title:"Coinbase2", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"coinbase-code2", referralURL:"https://coinbaseurl2.com", tag:"vpn" },
    { name: "coinbase3",title:"Coinbase3", text: "Free stock worth $2.50–$200",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" , tag:"crypto"},
    { name: "rakuten",title:"Rakuten", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"" , tag:"vpn"},
    { name: "lyft",title:"Lyft", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"" , tag:"vpn"},
    { name: "coinbase4",title:"Coinbase4", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"coinbase-code3", referralURL:"https://coinbaseurl3.com" , tag:"hosting"},
    { name: "coinbase5",title:"Coinbase5", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"coinbase-code4", referralURL:"https://coinbaseurl4.com" , tag:"hosting"},
    { name: "rakuten",title:"Rakuten", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"" , tag:"hosting"},
    { name: "lyft",title:"Lyft", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"", tag:"crypto" },
    { name: "coinbase6",title:"Coinbase6", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"", tag:"ecommerce" },
    { name: "coinbase7",title:"Coinbase7", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"", tag:"ecommerce" },
    { name: "rakuten",title:"Rakuten", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"", tag:"ecommerce" },
    { name: "lyft",title:"Lyft", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"", tag:"clothing" },
    { name: "coinbase8",title:"Coinbase8", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"", tag:"clothing" },
    { name: "coinbase9",title:"Coinbase9", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"", tag:"clothing" },
    { name: "rakuten",title:"Rakuten", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"", tag:"clothing" },
    { name: "lyft",title:"Lyft", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"" , tag:"travel"},
    { name: "Coinbase10",title:"Coinbase10", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" , tag:"travel"},
    { name: "Coinbase11",title:"Coinbase11", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" , tag:"travel"},
    { name: "Rakuten",title:"Rakuten", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"", tag:"travel" },
    { name: "Lyft",title:"Lyft", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"" , tag:"ecommerce"},
    { name: "Coinbase12",title:"Coinbase12", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"", tag:"hosting" },
    { name: "lyft",title:"Lyft", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"" , tag:"travel"},
    { name: "Coinbase10",title:"Coinbase10", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" , tag:"travel"},
    { name: "Coinbase11",title:"Coinbase11", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"" , tag:"vpn"},
    { name: "Rakuten",title:"Rakuten", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1046786978950180864/ehmak1_m_400x400.jpg", referralcode:"", referralURL:"", tag:"crypto" },
    { name: "Lyft",title:"Lyft", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://pbs.twimg.com/profile_images/1063591416918552576/lg72DZIS_400x400.jpg", referralcode:"", referralURL:"" , tag:"ecommerce"},
    { name: "Coinbase12",title:"Coinbase12", text: "esf selj eshf shkf ke hfk",description:"", imgURL:"https://s3.cointelegraph.com/storage/uploads/view/ac209e28ef3cdd3390ef4dc7e630e905.png", referralcode:"", referralURL:"", tag:"hosting" }
  ];

  emailList:string[] =[];

  // private dataSource  = new BehaviorSubject<modelData[]>(this.data);

  constructor() { }

  getData(){
    return this.data;
  }

  changeData(data:modelData){
    this.data.push(data);
  }

  saveEmail(email:string){
    this.emailList.push(email);
    console.log(this.emailList);
  }
}
