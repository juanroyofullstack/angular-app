import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  projectId: string | null = null;
  project: any;
  projects: { id: number; name: string }[] = [
    { id: 1, name: 'Portfolio Web' },
    { id: 2, name: 'E-commerce' },
    { id: 3, name: 'App Mobile' },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id');
      this.project =
        this.projects[this.projectId as keyof typeof this.projects];
      console.log('Project ID:', this.projectId);
    });
  }
}
