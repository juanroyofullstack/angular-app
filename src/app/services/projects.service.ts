import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      id: '1',
      name: 'Portfolio Web',
      description: 'Mi portfolio personal en Angular',
      url: 'https://mi-portfolio.com',
    },
    {
      id: '2',
      name: 'Dashboard Admin',
      description: 'Panel de administración interno',
      url: 'https://admin.ejemplo.com',
    },
    {
      id: '3',
      name: 'API Backend',
      description: 'API REST para gestionar proyectos',
      url: 'https://api.ejemplo.com',
    },
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects).pipe(delay(300));
  }

  getProject(id: string): Observable<Project | undefined> {
    return of(this.projects).pipe(
      delay(300),
      map((projects) => projects.find((project) => project.id === id)),
    );
  }
}
