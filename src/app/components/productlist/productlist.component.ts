import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
/* import { debounceTime } from 'rxjs'; */
import { Cardproduct } from 'src/app/interfaces/cardproduct.interface';
import { CardproductService } from 'src/app/services/product.service';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  /* Agregar un form control y anexarlo al input productlist.html*/
  cardText = new FormControl('');

  cards: Cardproduct[] = [];
  p: string|number|undefined;
  page: string|number|undefined;
  constructor(private cardproductService: CardproductService){
  }

  /* HASTA AQUI */
  ngOnInit(): void {

    this.cardText.valueChanges.pipe(
      debounceTime(1000)
    )
    .subscribe((res) => {
      console.log(res , "otro");
      this.cards = [];

      this.searchProduct(res?.toLocaleLowerCase())

    })

    this.searchProduct()
  }

  searchProduct(productName: string | null = null) {
    this.cardproductService.getProducts(productName).subscribe(res => {
      console.log(res);
      this.cards = [...this.cards, ...res];
    });

  }

}
