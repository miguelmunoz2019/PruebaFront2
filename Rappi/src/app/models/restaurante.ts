export class Restaurante {
  id: number=0;
  nombre: string= '';
  categoria: Categoría = Categoría.Todos;
  precio: number=0;
  tiempo: string='';
  calificacion: number=0.0;
  descuento: number=0;
  imagen: string='';
  }

export enum Categoría {
  Todos="Todos" ,
  Hamburguesas="Hamburguesas" ,
  Arabe="Arabe",
  Pizza="Pizza" ,
  Pollo="Pollo" ,
  Saludable="Saludable" ,
  Desayunos="Desayunos" ,
  Sanduches="Sánduches",
  Mexicana="Mexicana" ,
  Asiatica="Asiatica" ,
  Tipica="Tipica" ,
  Parrilla="Parrilla" ,
  Comida_rapida="Comida rapida" ,
  Empanadas="Empanadas" ,
  Italiana="Italiana",
  Alitas="Alitas",
  Postres="Postres",
  Sushi="Sushi"
  }
