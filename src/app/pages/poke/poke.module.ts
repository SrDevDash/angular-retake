import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeRoutingModule } from './poke-routing.module';
import { FormsModule } from '@angular/forms';
import { PokeComponent } from './poke.component';

@NgModule({
  declarations: [PokeComponent],
  imports: [CommonModule, PokeRoutingModule, FormsModule],
})
export class PokeModule {}
