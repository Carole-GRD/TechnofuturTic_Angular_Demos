import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsCreateComponent } from './pages/posts-create/posts-create.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostsShowComponent } from './pages/posts-show/posts-show.component';

// Routing pour le module "posts"
// ATTENTION : Mettre la route la plus précise au dessus des routes génériques
// par exemple, avec    :id    il s'attend à une valeur non précise
const routes: Routes = [
  { path: '', component: PostsListComponent, children: [
    // Route Enfant => Mise en place du <router-outlet /> dans le parent (PostsListComponent)
    { path: 'create', component: PostsCreateComponent },     //  /posts/create 
  ]},
  { path: ':id', component: PostsShowComponent },          //  /posts/42         
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
