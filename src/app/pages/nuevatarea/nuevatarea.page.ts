import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonList, IonItem, IonIcon, IonLabel, IonMenuButton, IonButtons } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nuevatarea',
  templateUrl: './nuevatarea.page.html',
  styleUrls: ['./nuevatarea.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, RouterModule, IonToolbar, CommonModule, FormsModule, IonMenu, IonList, IonItem, IonIcon, IonLabel, IonMenuButton, IonButtons]
})
export class NuevatareaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
