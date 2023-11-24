import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipePipe } from './pipes/custom.pipe.pipe';


//! Ici création d'un module (ng g m "nom_du_module"(--skip-tests)=> enlevent les teste unitaire) qui permets d etre importer et utiliser depuis nimporte ou dans les component!


@NgModule({
  declarations: [
    CustomPipePipe
  ],
  imports: [
    CommonModule,
    
  ],
  // utilisation d export pour exporter nos pipe pour tout les module
  exports:[
    CustomPipePipe,

  ]
})
export class SharedModule { }
