import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { SignupComponent } from '../login/signup/signup.component';
import { SigninComponent } from '../login/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ShareComponent } from './share/share.component';
import { OpenShareComponent } from './open-share/open-share.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'share', component: ShareComponent },
      { path: 'work/:id', component: WorkComponent },
      { path: 'open-share/:id', component: OpenShareComponent },
      { path: 'article', component: ArticleComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
