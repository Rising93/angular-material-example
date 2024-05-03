import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { LoginComponent } from './components/auth/login/login.component';
import { TrainingComponent } from './components/training/training.component';
import { CurrentTrainingComponent } from './components/training/current-training/current-training.component';
import { NewTrainingComponent } from './components/training/new-training/new-training.component';
import { PastTrainingsComponent } from './components/training/past-trainings/past-trainings.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { LabelManagerPipe } from './shared/label-manager/pipe/label-manager.pipe';
import {HttpClientModule} from "@angular/common/http";
import {LabelManagerService} from "./shared/label-manager/service/label-manager.service";

export function initializeApp(labelService: LabelManagerService) {
  return (): Promise<any> => {
    return labelService.loadLabels();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    SidenavListComponent,
    HeaderComponent,
    LabelManagerPipe
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    LabelManagerService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [LabelManagerService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
