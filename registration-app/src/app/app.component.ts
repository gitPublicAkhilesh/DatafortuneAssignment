import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showProgressBar: boolean = false;
  currentStep: number = 1;

  constructor(private router: Router) {
    // Listen for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects.toLowerCase();

        // Hide progress bar on login page
        if (url.includes('login')) {
          this.showProgressBar = false;
        }
        // Show progress bar on register and complete pages
        else if (url.includes('register')) {
          this.showProgressBar = true;
          this.currentStep = 2;
        } else if (url.includes('complete')) {
          this.showProgressBar = true;
          this.currentStep = 3;
        } else {
          // Default case (optional)
          this.showProgressBar = false;
          this.currentStep = 1;
        }
      }
    });
  }
}
