import { Injectable } from '@angular/core';
import {Restaurante} from '../models/Restaurante'
import {Categoría} from '../models/Restaurante'
@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  restaurantes: Restaurante[]=[
    {
      id: 0,
      nombre: 'Home Burgers',
      categoria: Categoría.Hamburguesas,
      precio: 6500,
      tiempo: '19-33 mins',
      calificacion: 4.8,
      descuento: 21,
      imagen: 'https://images.rappi.com/restaurants_background/900035240-1604074227169.png?d=128x80&e=webp'
    },
    {
      id: 1,
      nombre: 'Buffalo Wings',
      categoria: Categoría.Alitas,
      precio: 6000,
      tiempo: '30 mins',
      calificacion: 4.4,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/99002137-1604005788271.png?d=128x80&e=webp'
    },
    {
      id: 2,
      nombre: 'Rc Pizza Artesanal',
      categoria: Categoría.Pizza,
      precio: 4300,
      tiempo: '32-46 mins',
      calificacion: 4.8,
      descuento: 40,
      imagen: 'https://images.rappi.com/restaurants_background/a864d43c-17be-47e7-abb8-abcd5bbba0c4-1612836866095.jpeg?d=128x80&e=webp'
    },
    {
      id: 3,
      nombre: 'Hummus & Falafel',
      categoria: Categoría.Arabe,
      precio: 5000,
      tiempo: '23-37 mins',
      calificacion: 4.7,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/home-1595892469860.png?d=128x80&e=webp'
    },
    {
      id: 4,
      nombre: 'El Carnal - Mexicana',
      categoria: Categoría.Mexicana,
      precio: 4700,
      tiempo: '23-37 mins',
      calificacion: 4.7,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/el-carnal-home-1574724037921-1606945483136-1607115362989.png?d=128x80&e=webp'
    },
    {
      id: 5,
      nombre: 'Sipote Burrito',
      categoria: Categoría.Mexicana,
      precio: 6000,
      tiempo: '33-47 mins',
      calificacion: 4.5,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/sipote-1607962671297.jpg?d=128x80&e=webp'
    },
    {
      id: 6,
      nombre: 'Mis Carnes Parrilla',
      categoria: Categoría.Parrilla,
      precio: 4700,
      tiempo: '27-41 mins',
      calificacion: 4.4,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/miscarnes-1612797876392.jpg?d=128x80&e=webp'
    },
    {
      id: 7,
      nombre: 'La Taqueria',
      categoria: Categoría.Mexicana,
      precio: 3900,
      tiempo: '18-35 mins',
      calificacion: 4.8,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/taquito-1611942175742.jpg?d=128x80&e=webp'
    },
    {
      id: 8,
      nombre: 'KFC - Pollo',
      categoria: Categoría.Pollo,
      precio: 4000,
      tiempo: '16-30 mins',
      calificacion: 4.6,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/homekfcrappi-1601991329947.png?d=128x80&e=webp'
    },
    {
      id: 9,
      nombre: 'Mimos',
      categoria: Categoría.Postres,
      precio: 5900,
      tiempo: '24-38 mins',
      calificacion: 4.6,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/900005453-1501522673.jpeg?d=128x80&e=webp'
    },
    {
      id: 10,
      nombre: 'Spoleto',
      categoria: Categoría.Italiana,
      precio: 4700,
      tiempo: '30-44 mins',
      calificacion: 4.7,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/2091646263-1595462804349.png?d=128x80&e=webp'
    },
    {
      id: 11,
      nombre: 'El Kiosco.',
      categoria: Categoría.Desayunos,
      precio: 4700,
      tiempo: '22-36 mins',
      calificacion: 4.7,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/home-1614174393576.jpg?d=128x80&e=webp'
    },
    {
      id: 12,
      nombre: 'Donut Factory',
      categoria: Categoría.Desayunos,
      precio: 6800,
      tiempo: '34-48 mins',
      calificacion: 4.9,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/900030442-1604012865663.png?d=128x80&e=webp'
    },
    {
      id: 13,
      nombre: 'Bridados',
      categoria: Categoría.Sushi,
      precio: 5000,
      tiempo: '48 mins-1hr',
      calificacion: 4.6,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/bridados-home1-1575062268901.png?d=128x80&e=webp'
    },
    {
      id: 14,
      nombre: 'Sándwich Qbano',
      categoria: Categoría.Sanduches,
      precio: 3900,
      tiempo: '28-42 mins',
      calificacion: 4.7,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/qbanohome-1604075366308.png?d=128x80&e=webp'
    },
    {
      id: 15,
      nombre: 'Sr. Wok',
      categoria: Categoría.Asiatica,
      precio: 6000,
      tiempo: '36-50 mins',
      calificacion: 4.5,
      descuento: 0,
      imagen: 'https://images.rappi.com/restaurants_background/homeee-1595454105766.png?d=128x80&e=webp'
    }
  ];

  constructor() { }

  getRestaurantes(){
    return this.restaurantes
  }
}
