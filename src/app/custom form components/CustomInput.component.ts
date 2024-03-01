import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormioCustomComponent } from "../elements.common";
import { GridModule } from "@syncfusion/ej2-angular-grids";
import dataSource from "./dataSource";

@Component({
    selector:'sync-grid',
    templateUrl:'./CustomInput.component.html',
    standalone:true,
    imports:[GridModule]
})
export class NameInput implements FormioCustomComponent<number>{
    constructor(){
         // // Removing Syncfusion premium dialog after 2 seconds
         setTimeout(() => {
            const els = document.querySelectorAll(
                'div[style*="z-index: 999999999"]'
            );
            els.forEach((e) => {
                e.remove();
            });
        }, 2000);
    }
    public data = dataSource;

    @Input()
    value!: number;
  
    @Output()
    valueChange = new EventEmitter<number>();
  
    @Input()
    disabled!: boolean;
}
