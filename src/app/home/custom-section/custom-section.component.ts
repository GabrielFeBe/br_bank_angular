import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-section',
  templateUrl: './custom-section.component.html',
  styleUrl: './custom-section.component.scss'
})
export class CustomSectionComponent {
@Input() imageUrl!:string;
@Input() imageWidth!:string;
@Input() imageHeight!:string;
@Input() header!:string;
@Input() headerFont!:string;
@Input() subText!:string;
@Input() subTextFont!:string;
@Input() subTextMt!:string;
@Input() route!:string;
@Input() routeText!:string;
@Input() flexDirection!:string;


}
