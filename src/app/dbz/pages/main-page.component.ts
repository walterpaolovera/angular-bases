
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // aqui se hace la inyección de dependencias
  constructor( private dbzService: DbzService ) {}

  // Al hacerlo privado el dbzService, debemos crear un getter
  // para sea usado en el html
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.addCharacter( character );
  }
}
