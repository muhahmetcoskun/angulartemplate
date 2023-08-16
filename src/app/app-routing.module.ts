import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppLayoutComponent } from "./layout/app.layout.component";
const routes: Routes = [
    {path:'tanimlamalar', loadChildren: () =>
    import('./puantaj/tanimlamalar/tanimlamalar.module').then(m =>m.TanimlamalarModule)
    },
    //{path:'notfound',component:NotFoundComponent},
   { path: '', component: AppLayoutComponent}
  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                   
                    { path: 'tanimlamalar', loadChildren: () => import('./puantaj/tanimlamalar/tanimlamalar.module').then(m => m.TanimlamalarModule) },
                   
                ]
            },
            
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
