import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];
    constructor(private titleSevirce:Title,private projectService:ProjectsService) {
        this.titleSevirce.setTitle('Ofentje Phala - Portifolio');
    }
    ngOnInit(): void {
        this.projects =this.projectService.GetProjects();
    }
}
