import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
    selector: 'app-send-codefile',
    standalone: true,
    templateUrl: './send-codefile.component.html',
    styleUrl: './send-codefile.component.css',
    imports: [CommonModule, FormsModule, DashboardComponent]
})
export class SendCodefileComponent {
  codeFileAvailable: boolean = false; // Set this based on actual code file availability
  selectedProvider: string = 'MENGO';
  providers: string[] = ['IHK', 'NSAMBYA', 'NAKASERO', 'MENGO', 'CASE'];

  sendCodefile() {
    // Logic to handle sending the code file
    console.log('Code file sent to provider:', this.selectedProvider);
  }

}
