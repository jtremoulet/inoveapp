import { Routes } from '@angular/router';
import { HomepagePage } from './pages/homepage/homepage.page';
import { CreateModelComponent } from './components/create-model/create-model.component';

export const routes: Routes = [
    { path: '', component: HomepagePage },
    { path: 'create', component: CreateModelComponent },

];
