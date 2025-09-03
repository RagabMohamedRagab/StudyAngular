import { Routes } from '@angular/router';
import { Add } from '../TODoList/Add/Add';
import { Card } from '../Card/Card';
import { Form } from '../Form/Form';
import { Life } from '../LifeCycle/Life';
export const routes: Routes = [
    {
        path:"home",
        component:Add
    },
    {
      path:"course",
      component:Card
    },
    {
      path:"Form",
      component:Form
    },
    {
      path:"",
      pathMatch:"full",
      redirectTo:"/Form"
    },
    {
      path:"**",
      component:Life
    }
];
