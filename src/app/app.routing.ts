import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';

import { FinalComponent } from 'app/final/final.component';
import { SubjectiveAnalyzeComponent } from 'app/subjective-analyze/subjective-analyze.component';
import { EdmontonAnalyzeComponent } from 'app/edmonton-analyze/edmonton-analyze.component';
import { RegisterHealthCenterComponent } from 'app/register-health-center/register-health-center.component';
import { RegisterPatientComponent } from 'app/register-patient/register-patient.component';
import { LoginComponent } from 'app/login/login.component';
import { HomeComponent } from 'app/home/home.component';
import { FinalEdmontonComponent } from 'app/final-edmonton/final-edmonton.component';

const APP_ROUTES: Routes = [
    
    { path: 'final/simulacao', component: FinalComponent, data: { simulation: true }},
    { path: 'final/:id', component: FinalComponent, canActivate: [AuthGuard], data: { simulation: false }},
    { path: 'subjetiva/simulacao', component: SubjectiveAnalyzeComponent, data: { simulation: true }},
    { path: 'subjetiva/:id', component: SubjectiveAnalyzeComponent, canActivate: [AuthGuard], data: { simulation: false }},

    { path: 'final-edmonton/simulacao', component: FinalEdmontonComponent, data: { simulation: true }},
    { path: 'final-edmonton/:id', component: FinalEdmontonComponent, canActivate: [AuthGuard]},
    { path: 'edmonton/simulacao', component: EdmontonAnalyzeComponent, data: { simulation: true }},
    { path: 'edmonton/:id', component: EdmontonAnalyzeComponent, canActivate: [AuthGuard]},

    { path: 'registra-posto', component: RegisterHealthCenterComponent, canActivate: [AuthGuard]},
    { path: 'registra-paciente', component: RegisterPatientComponent, canActivate: [AuthGuard]},
    
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);