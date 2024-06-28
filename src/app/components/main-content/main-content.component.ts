import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule,RouterLink],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  selectedCountry: string = 'Uganda';
  countries: string[] = ['Uganda', 'Kenya', 'South Sudan'];
  submitMemberNumber() {
    // Logic to handle member number submission
    console.log('Member number submitted');
  }
  submitCountry() {
    // Logic to handle country selection
    console.log('Selected country:', this.selectedCountry);
    
  }

}
