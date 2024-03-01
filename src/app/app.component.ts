import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';
import { RendererComponent } from './renderer/renderer.component';
import { Templates } from 'formiojs';
import customTemplateComponent from './custom form components/customTemplate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuilderComponent,RendererComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formio-practice';
  constructor(){
    Templates.current.custom = {
      form: customTemplateComponent,
    };
  }
}
