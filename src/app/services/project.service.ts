import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects:Project[] =[
    {id:0,name: "Sample Python app",pictures:[],projectlinks:"//www.github.com",summary: "Bubbles learning app",description:"teach Bubbles how to count and learn alphabet from there learning coding using python",tags:[Tag.Python]},
    {id:1,name: "Web Angular app",pictures:[],projectlinks:"//www.github.com",summary: "Portfolio profile",description:"learning more about me",tags:[Tag.Angular,Tag.TypeScript]},
    {id:2,name: "Sample Java app",pictures:[],projectlinks:"//www.github.com",summary: "Procastination App",description:"help me do my tasks on time ",tags:[Tag.Java]}

  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }
  GetProjectById(id: number):Project{
    let project = this.projects.find(project => project.id ===id);
    if(project === undefined){
      throw new TypeError("There is no so project that matches id:" + id)
    }
    return project;


  }
}
