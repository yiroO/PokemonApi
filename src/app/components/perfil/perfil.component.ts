import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  data = {
    name: 'FERNANDO YAIR VALENCIA NELO',
    titulo: 'Desarrollador FrontEnd Jr.',
    email:  'ingfernandoyair@gmail.com',
    linke: 'fernandoyair',
    tel: '2381732107',
    desc: 'Soy una persona joven, dinámica, con facilidad de integración y con muy buena habilidad de comunicación. Estoy buscando traer mis habilidades aprendidas durante mis estudios, pasantías y experiencia laboral. Mi objetivo es seguir aprendiendo y creciendo profesionalmente. He adquirido conocimientos en la parte del FrontEnd con JavaScript, HTML5, CSS3 y Angular. En la parte del BackEnd con Java, Spring Boot, Spring MVC y en base de datos como MySQL, SqlServer y Oracle.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
