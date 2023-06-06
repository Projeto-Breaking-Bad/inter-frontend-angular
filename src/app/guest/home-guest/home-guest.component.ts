import { Component } from '@angular/core';
import { IVaga } from 'src/app/interfaces/IVaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-home-guest',
  templateUrl: './home-guest.component.html',
  styleUrls: ['./home-guest.component.css']
})
export class HomeGuestComponent {

  listaVazia: boolean = false;
  vagas: IVaga[] = [];
  constructor(private vagaService: VagaService) { }

  ngOnInit() {
    this.vagaService.retornaTodasVagas().subscribe((result: IVaga[]) => {
      this.vagas = result;
      this.listaVazia = result.length === 0;
    })
  }
}
