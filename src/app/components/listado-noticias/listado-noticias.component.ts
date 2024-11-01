import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  standalone: true,
  imports: [],
  templateUrl: './listado-noticias.component.html',
  styleUrl: './listado-noticias.component.css'
})
export class ListadoNoticiasComponent {
  @Input() listNoticias: any[] = [];
  
}
