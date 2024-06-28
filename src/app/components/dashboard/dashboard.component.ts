import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainContentComponent } from "../main-content/main-content.component";
import { SendCodefileComponent } from "../send-codefile/send-codefile.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, MainContentComponent, SendCodefileComponent,RouterOutlet]
})
export class DashboardComponent {
  menuItems = [
    { name: 'Missing Codifiles', icon: 'fa fa-file' },
    { name: 'Member Number', icon: 'fa fa-id-badge' },
    { name: 'Select Country', icon: 'fa fa-globe' },
    { name: 'Send Codefile', icon: 'fa fa-paper-plane' }
  ];

  otherItems = [
    { name: 'Settings', icon: 'fa fa-cog' },
    { name: 'Notifications', icon: 'fa fa-bell' },
    { name: 'Help', icon: 'fa fa-question-circle' },
    { name: 'Logout', icon: 'fa fa-sign-out' }
  ];

}
