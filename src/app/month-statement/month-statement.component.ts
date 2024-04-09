import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-month-statement',
  templateUrl: './month-statement.component.html',
  styleUrl: './month-statement.component.scss'
})
export class MonthStatementComponent implements OnInit {

  id:number | null = null;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
     const id = this.route.snapshot.params['id']
    if(id) {
      this.id = id
      console.log(id)
    }
  }



}
