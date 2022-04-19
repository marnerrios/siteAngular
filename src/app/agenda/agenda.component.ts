import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  status: string;
  appointment: string;
  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params=> {
      this.status = params['status'];
      this.appointment = params['appointment'];
    }
    )
  }

}
