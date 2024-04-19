import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-black-button',
  templateUrl: './black-button.component.html',
  styleUrl: './black-button.component.scss'
})
export class BlackButtonComponent {

  @Input() width!: string;
  @Input() height!: string;
  @Input() text!: string;
  @Input() fontSize!: string;
  @Input() marginTop!: string;
  @Input() marginRight!: string;
  @Input() marginLeft!: string;
  @Input() padding!: string;
  @Input() buttonFunction!: () => void;



}
