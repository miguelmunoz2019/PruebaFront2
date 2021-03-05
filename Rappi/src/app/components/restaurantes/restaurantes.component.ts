import { Component, OnInit } from '@angular/core';
import {Restaurante} from '../../models/Restaurante';
import {RestauranteService} from '../../services/restaurante.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes:Restaurante[] = []
  constructor(private restauranteService:RestauranteService) { }

  ngOnInit(): void {
      this.restaurantes=this.restauranteService.getRestaurantes();
  }

}
