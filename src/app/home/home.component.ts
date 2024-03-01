import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedSection: string = 'Front End Technologies';

  skills: any[] = [
    { title: 'HTML', description: 'Semantic markup, forms, and accessibility' },
    { title: 'CSS', description: 'Flexbox, Grid, animations, and preprocessors' },
    { title: 'JavaScript', description: 'ES6, DOM manipulation, and event handling' },
    { title: 'Angular', description: 'Components, services, routing, and forms' },
    { title: 'TypeScript', description: 'Strong typing, interfaces, and classes' },
    { title: 'Responsive Design', description: 'Media queries and Flexbox/Grid layouts' },
    { title: 'UI/UX Design', description: 'Visual hierarchy, typography, and color theory' },
    { title: 'Testing', description: 'Unit testing with Jasmine and Karma' }
  ];
  constructor() {
    
   }

  ngOnInit() {
    
  }

  selectSection(section: string) {
    this.selectedSection = section;
  }
}