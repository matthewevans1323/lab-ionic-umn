import { UKM } from './ukm.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ukm',
  templateUrl: './ukm.page.html',
  styleUrls: ['./ukm.page.scss'],
})
export class UkmPage implements OnInit {
  
  ukm: UKM[] = [
    {
      name: "Basket",
      desc: "basket adalah bla bla bla"
    },
    {
      name: "Drama",
      desc: "drama adalah bla bla bla"
    },
    {
      name: "Volly",
      desc: "volly adalah bla bla bla"
    },
    {
      name: "Futsal",
      desc: "futsal adalah bla bla bla"
    },
    {
      name: "Gaming",
      desc: "gaming adalah bla bla bla"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
