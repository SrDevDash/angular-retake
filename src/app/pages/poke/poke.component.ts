import { Component } from '@angular/core';
import { PokeService } from './poke.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.scss'],
})
export class PokeComponent {
  id: any = '';
  ob: Observable<any> = new Observable<''>();

  constructor(private pokeService: PokeService) {}

  searchPokeByID(id: number) {
    this.ob = this.pokeService.getPokeById(id);
  }
}
