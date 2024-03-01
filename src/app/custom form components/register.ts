import { Injector } from '@angular/core';
import { FormioCustomComponentInfo } from '../elements.common';
import { registerCustomFormioComponent } from '../fomio-custom/register-custom-component';
import { NameInput } from './CustomInput.component';
import { Templates } from 'formiojs';

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'myrating',
  selector: 'sync-grid',
  title: 'Rating',
  group: 'custom',
  icon: 'fa fa-star',
  // template: Templates.current.custom
};

export function registerRatingComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, NameInput, injector);
}
