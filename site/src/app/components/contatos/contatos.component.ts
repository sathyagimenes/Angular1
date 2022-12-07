import { Component, EventEmitter, Output } from '@angular/core';
import { FormsData } from 'src/app/models/forms-data.model';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {
  @Output() public sendForm: EventEmitter<FormsData> = new EventEmitter<FormsData>();

  public btnDisabled = true;

  ngOnInit() {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 5000);
  }

  public submitForm(): void {
    console.log("Formulário enviado!");
    console.log(this.formData);
    this.sendForm.emit(this.formData);
  }

  public showInputData(event: any): void {
    console.log(event.target.value)
  }

  public formData: FormsData = {
    email: "exemplo@email.com",
    message: "Exemplo de mensagem teste"
  }

}
