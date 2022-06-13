import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ColorModule } from './color/color.module';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./color/color.module').then(m => m.ColorModule)
    },
    // {
    //     path: 'login',
    //     loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}