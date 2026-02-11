import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: 1,
      name: 'Personal portfolio website',
      description:
        'Responsive portfolio built with Angular to showcase my work and experience.',
      tech: ['Angular', 'TypeScript', 'SCSS'],
      type: 'Web app',
    },
    {
      id: 2,
      name: 'E-commerce storefront',
      description:
        'E-commerce front for browsing products, managing a cart and checking out securely.',
      tech: ['Angular', 'REST APIs', 'RxJS'],
      type: 'Web app',
    },
    {
      id: 3,
      name: 'Mobile-style web app',
      description:
        'Mobile-first web experience with offline-friendly patterns and smooth navigation.',
      tech: ['Angular', 'PWA', 'TypeScript'],
      type: 'Web app',
    },
  ];
  category: string | null = null;
  sort: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.category = params.get('category');
      this.sort = params.get('sort');
    });
  }

  goToProject(id: number) {
    this.router.navigate(['/project', id]);
  }
}
