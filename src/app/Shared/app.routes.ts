import { Routes } from '@angular/router';
import { Add } from '../TODoList/Add/Add';
import { Card } from '../Card/Card';
import { Form } from '../Form/Form';
import { Life } from '../LifeCycle/Life';
import {Coursedetails} from '../Coursedetails/Coursedetails.Component'
import {Nourhan} from '../../NourhanLife/Nourhan'
import { Inject } from '../Inject/inject.compoent';
import { Product } from '../Product/Product.Component';
export const routes: Routes = [
    {
        path:"home",
        component:Add
    },
    {
      path:"Nourhan",
      component:Nourhan
    },
    {
    path:"course",
    component:Nourhan

    },
    {
      path:"Product",
      component:Product
    },

    {
      path:"Form",
      component:Form
    },
    {
     path:"course-details/:id",
     component:Coursedetails
    },
    {
    path:"Inject",
    component:Inject
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
