import { Routes } from '@angular/router';
import { LayoutComponent } from '../pages/layout/layout.component';
import { HomeComponent } from '../pages/home/home.component';
import { ChatbotComponent } from '../pages/chatbot/chatbot.component';
import { ResumelistComponent } from '../pages/resumelist/resumelist.component';
import { QuestionerComponent } from '../pages/questioner/questioner.component';
import { ResumeUploadComponent } from '../pages/resume-upload/resume-upload.component';
import { JDUploadComponent } from '../pages/jd-upload/jd-upload.component';
import {ClientsMasterComponent } from '../pages/clients-master/clients-master.component'
import {ClientFormComponent } from '../pages/client-form/client-form.component';
import { CandidateMasterComponent } from '../pages/candidate-master/candidate-master.component';
import { CandidateFormComponent } from '../pages/candidate-form/candidate-form.component';
import { RequirementsMasterComponent } from '../pages/requirements-master/requirements-master.component';
import { RequirementsFormComponent } from '../pages/requirements-form/requirements-form.component';

export const routes: Routes = [
    
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path: '',
                redirectTo:'home',
                pathMatch:'full'
             },
            {
                path:'home',
                component:HomeComponent,
                title:'Home'
            },

            {
                path:'chatbot',
                component:ChatbotComponent,
                title:'Chatbot'             
             },

            {
                path:'resumelist',
                component:ResumelistComponent,
                title:'Resumelist'
            },
            {
                path: 'questioner',
                component:QuestionerComponent,
                title:'Questioner'
            },
            {
                path:'resume-upload',
                component:ResumeUploadComponent,
                title:'Resume-upload'
            },
            {
                path:'JD-upload',
                component:JDUploadComponent,
                title:'Jd-upload'
            },
            { 
                path:'clients-master',
                component:ClientsMasterComponent,
                title:'ClientsMaster'
            },            
            {
                path:'client-form',
                component:ClientFormComponent,
                title:'Client-Form'

            },

            {
                path:'candidate',
                component:CandidateMasterComponent,
                title:'candidatemaster'
            },
            {
                path:'candidate-form',
                component:CandidateFormComponent,
                title:'Candidateform'
            },

            {
                path: 'candidate-master',
                component: CandidateMasterComponent 
           },

           
           {
            path:'requirement-master',
            component:RequirementsMasterComponent,
            title:'Requirementmaster'
        },
    
        {
            path:'requirements-form',
           component: RequirementsFormComponent,
           title:'requirements-form'          
      },
       

            
            
        ]
    }
    
    ];
    
