import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

interface Signal {
  confirmation:boolean;
  details:any
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = 'auto';
  }
  
  @Input() message!: string;
  @Output() confirmed = new EventEmitter<Signal>();

  confirm() {
    this.confirmed.emit({
      confirmation: true,
      details: 'placeholder'
    });
  }

  cancel() {
    this.confirmed.emit({
      confirmation:false,
      details: null
    });
  }
}
