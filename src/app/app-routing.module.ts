import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

/* Componenetes */
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'education',
    component: EducationComponent
  },

  {
    path: 'skills',
    component: SkillsComponent
  },

  {
    path: 'projects',
    component: ProjectsComponent
  },
 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
