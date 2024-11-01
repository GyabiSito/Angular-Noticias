import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { ListadoNoticiasComponent } from "./components/listado-noticias/listado-noticias.component";
import { NoticiasService } from './services/noticias.service';
import { SpinnerComponent } from "./shared/spinner/spinner.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FormularioComponent, ListadoNoticiasComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listNoticias:any[]=[];
  loading=false;
  title = 'angularNoticias';

  constructor(private _noticiaService:NoticiasService){}

  buscarNoticias(parametros:any){
    this.loading=true;
    this.listNoticias=[];
    this._noticiaService.getNoticias(parametros).subscribe((data:any)=>{
      this.loading=false;
      this.listNoticias=data.articles;
      console.log(data);
      
    },error=>{
      this.loading=false;
      console.log(error);
    });
    
  }
}
