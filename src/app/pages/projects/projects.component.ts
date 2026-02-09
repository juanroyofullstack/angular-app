import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    { id: 1, name: 'Portfolio Web' },
    { id: 2, name: 'E-commerce' },
    { id: 3, name: 'App Mobile' },
  ];
  projectId = 3;
  category: string | null = null;
  sort: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  goToProject(id: number) {
    this.router.navigate(['/project', id]);

    this.route.queryParamMap.subscribe((params) => {
      this.category = params.get('category');
      this.sort = params.get('sort');
      console.log('Category:', this.category, 'Sort:', this.sort);
    });
  }
}
