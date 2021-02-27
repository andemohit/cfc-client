import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string | undefined;
  isLoading = false;

  public products: any[] = [
    { item: 'product 1', image: 'assets/products/pd1.jpg', price: 650, category: 'veg' },
    { item: 'product 2', image: 'assets/products/pd2.jpg', price: 900, category: 'nonveg' },
    { item: 'product 3', image: 'assets/products/pd3.jpg', price: 1299, category: 'nonveg' },
    { item: 'product 4', image: 'assets/products/pd4.jpg', price: 1500, category: 'nonveg' },
    { item: 'product 5', image: 'assets/products/pd5.jpg', price: 799, category: 'veg' },
  ];

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }

}
