import { Component } from '@angular/core';
import { FormsData } from 'src/app/models/forms-data.model';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {

  public btnDisabled = true;

  ngOnInit() {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 5000);
  }

  public submitForm(): void {
    console.log("Formulário enviado!");
    console.log(this.formData);
  }

  public showInputData(event: any): void {
    console.log(event.target.value)
  }

  public formData: FormsData = {
    email: "exemplo@email.com",
    message: "Exemplo de mensagem teste"
  }

}
