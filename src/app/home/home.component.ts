import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showDialog = true;

  onCloseDialog(signal:any) {
    if (signal.confirmation) {
      // Lógica para confirmado
      console.log('confirmação')
    } else {
      // Lógica para cancelado
      console.log('cancelamento')
    }
    this.showDialog = false;
  }


}
