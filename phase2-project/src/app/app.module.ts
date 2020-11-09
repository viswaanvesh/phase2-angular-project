// src/app/app.module.ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { QuestionsFormComponent } from "./questions-form/questions-form.component";
import { ResultsComponent } from './results/results.component';

import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: ':quizId', component: QuestionsComponent },
  { path: '', redirectTo: "welcome", pathMatch: "prefix" },
];

@NgModule({
  declarations: [AppComponent, QuestionsFormComponent, ResultsComponent, WelcomeComponent, QuestionsComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
