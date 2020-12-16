import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../busqueda.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs: any[] = [];

  constructor(private busquedaService: BusquedaService) { }

  ngOnInit(): void {
    this.busquedaService. getTrendingGifs()
    .subscribe((Response: any)=>{
      console.log('Data', Response);
    });
  }

}
