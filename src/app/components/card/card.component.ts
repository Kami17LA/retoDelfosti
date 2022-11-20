import { Component, Input, OnInit } from '@angular/core';
import { Cardproduct } from 'src/app/interfaces/cardproduct.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardproduct!: Cardproduct;
  
  constructor(){
  }

  ngOnInit(): void {

  }

}
