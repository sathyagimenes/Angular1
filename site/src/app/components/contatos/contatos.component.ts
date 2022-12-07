import { Component, EventEmitter, Output } from '@angular/core';
import { FormsData } from 'src/app/models/forms-data.model';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {
  @Output() public sendForm: EventEmitter<FormsData> = new EventEmitter<FormsData>();
  @Output() public elementContactCreated: EventEmitter<string> = new EventEmitter<string>();

  public btnDisabled = true;

  ngOnInit() {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 5000);
    this.elementContactCreated.emit('contact');
  }

  public submitForm(): void {
    // console.log("Formulário enviado!");
    // console.log(this.formData);
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
