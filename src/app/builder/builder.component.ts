import { Component, Injector, OnInit } from '@angular/core';
import { registerRatingComponent } from '../custom form components/register';
import { FormioModule } from '@formio/angular';
import { NameInput } from '../custom form components/CustomInput.component';

@Component({
  selector: 'app-builder',
  standalone: true,
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss',
  imports:[FormioModule]
})

export class BuilderComponent implements OnInit{
  form = {
    components: [],
  }
  
  option:any;
  constructor(inject:Injector){
    registerRatingComponent(inject);
    this.option = {
      sanitizeConfig: {
        allowedTags: ['sync-grid'],
        addTags: ['sync-grid']
      },

      builder:{
        basic:{
          default: false,
          weight: 1
        },
        custom:{
          title:'Custom Components',
          default: true,
          weight: 0
        }
      }
    }
  }

  ngOnInit(){

  }

  onBuilderChange(event:any){
    if(event.type === "addComponent"){
      this.form.components = event.form.components;
    }
  }
}
