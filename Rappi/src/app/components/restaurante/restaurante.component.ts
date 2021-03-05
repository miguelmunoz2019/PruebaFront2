import { Component, OnInit,Input } from '@angular/core';
import {Restaurante} from '../../models/Restaurante'

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  @Input() restaurante: Restaurante= new Restaurante();

  constructor() { }

  ngOnInit(): void {
  }

}
