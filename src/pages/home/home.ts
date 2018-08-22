import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  isOn:boolean;
  status:string;
  
  constructor(public navCtrl: NavController, private platform:Platform, private flash: Flashlight) {
  this.platform.ready().then(()=>{
    this.showStatus();
  })
  }

  switchOn(){
   this.flash.switchOn();
   this.upDateFlashLightStatus()
   this.showStatus();
  }

switchOff(){
  this.flash.switchOff();
  this.upDateFlashLightStatus()
  this.showStatus();
    
  }
  toggle(){
   this.flash.toggle();
   this.upDateFlashLightStatus()
   this.showStatus();
  }

  upDateFlashLightStatus(){
    this.isOn=this.flash.isSwitchedOn();
  }
  showStatus(){
    if(this.isOn==true){
      this.status='on'
    }
    else {
      this.status='Off'
    }
  }
}
