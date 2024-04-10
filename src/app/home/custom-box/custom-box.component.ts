import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-custom-box',
  templateUrl: './custom-box.component.html',
  styleUrl: './custom-box.component.scss'
})
export class CustomBoxComponent {
@Input() width!:string;
@Input() height!:string;
@Input() color!:string;
@Input() backgroundColor!:string;
@Input() borderRadius!:string;
@Input() header!:string;
@Input() headerFont!:string;
@Input() subText!:string;
@Input() subTextMt!:string;
@Input() route!:string;
@Input() abstoluteText!:string;
@Input({transform:booleanAttribute}) isBigBox!:boolean;
}
