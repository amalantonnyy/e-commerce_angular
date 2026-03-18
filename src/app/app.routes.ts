import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Contact } from './contact/contact';
import { product } from './product/product';
import { Detail } from './detail/detail';

export const routes: Routes = [
      {path:'' ,component:Home},
    {path:'product',component:product},
    {path:'product/:id',component:Detail},

   {path:'contact',component:Contact}
];
