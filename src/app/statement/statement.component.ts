import { Component, Input, OnInit, booleanAttribute, numberAttribute } from '@angular/core';
import { StatementService } from './statement.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrl: './statement.component.scss'
})
export class StatementComponent implements OnInit {

  transactions: any = null;

  @Input({required:true, transform: booleanAttribute}) isPreciseMonth!:boolean;

  @Input({required:false, transform:numberAttribute}) month!:number | null;

  constructor(private service:StatementService){}

  ngOnInit(): void {
    this.service.getBankStatment(this.isPreciseMonth, this.month).subscribe((res)=>{
      this.transactions = res;
      console.log(res);
    },(err)=>{
      console.log(err)
      alert("Some error ocurred")
    },()=>{});
  }

  getAbsoluteValue(value:number) {
    return Math.abs(value);
  }

  showTransactionData(index:number) {
    if(this.transactions[index].showing) {
    this.transactions[index].showing = false; 
    } else {
      this.transactions[index].showing = true; 
    }
  }

}
