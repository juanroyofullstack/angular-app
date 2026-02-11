import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent implements OnInit {
  projects$!: Observable<Project[]>;

  constructor(private projectsRepo: ProjectsService) {}

  ngOnInit(): void {
    this.projects$ = this.projectsRepo.getProjects();
  }
}
