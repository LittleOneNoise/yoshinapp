import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.page.html',
  styleUrls: ['./confirmation-popup.page.scss'],
})
export class ConfirmationPopupPage implements OnInit {

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }

  async closeModal(){
    const onClosedData: string =  "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  goHome(){
    this.router.navigateByUrl('home');
    this.closeModal();
  }

}
