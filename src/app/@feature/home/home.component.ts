import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@app/@shared/shared.service';
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

  public cartItems: any[] = [];

  public products: any[] = [
    { item: 'product 1', image: 'assets/products/pd1.jpg', price: 650, category: 'veg' },
    { item: 'product 2', image: 'assets/products/pd2.jpg', price: 900, category: 'nonveg' },
    { item: 'product 3', image: 'assets/products/pd3.jpg', price: 1299, category: 'nonveg' },
    { item: 'product 4', image: 'assets/products/pd4.jpg', price: 1500, category: 'nonveg' },
    { item: 'product 5', image: 'assets/products/pd5.jpg', price: 799, category: 'veg' },
  ];

  public responsiveOptions: any = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    private quoteService: QuoteService,
    private route: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
    this.getCartItems();
  }

  /**
   * 
   * @param menuItem Menu category item
   */
  public menuRoute(menuItem: string): void {
    this.route.navigate(['/category'], { queryParams: { category: menuItem } });
  }

  private getCartItems(): void {
    this.sharedService.getCartItem.subscribe(async items => {
      this.cartItems = items;
      console.log(this.cartItems);
    });
  }

  public addToCart(item: any): void {
    this.cartItems.push(item);
    this.sharedService.setCartItem(this.cartItems);
  }

}
