import { Component } from '@angular/core';
import { FormioModule } from '@formio/angular';

@Component({
  selector: 'app-renderer',
  standalone: true,
  imports: [FormioModule],
  templateUrl: './renderer.component.html',
  styleUrl: './renderer.component.scss'
})
export class RendererComponent {
  form = {
    components: [
      {
        applyMaskOn: "change",
        input: true,
        key: "textField",
        label: "Text Field",
        tableView: true,
        type: "textfield"
      },
      {
        type: "button",
        disableOnInvalid: true,
        input: true,
        key: "submit",
        label: "Submit",
        tableView: false
      }
    ]
  }
}
