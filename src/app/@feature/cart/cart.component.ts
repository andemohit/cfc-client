import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public quantity: number = 1;

  public cartItems: any[] = [
    {
      category: "Chicken",
      description: "Product Description",
      id: "1001",
      image: "assets/products/pd1.jpg",
      inventoryStatus: "INSTOCK",
      name: "Product item 1",
      price: 72,
      quantity: 61,
      rating: 4
    },
    {
      category: "Burger",
      description: "Product Description",
      id: "1002",
      image: "assets/products/pd2.jpg",
      inventoryStatus: "INSTOCK",
      name: "Product item 2",
      price: 90,
      quantity: 61,
      rating: 4
    },
    {
      category: "Rice Bowl",
      description: "Product Description",
      id: "1003",
      image: "assets/products/pd3.jpg",
      inventoryStatus: "INSTOCK",
      name: "Product item 3",
      price: 199,
      quantity: 61,
      rating: 4
    },
    {
      category: "Snacks",
      description: "Product Description",
      id: "1004",
      image: "assets/products/pd4.jpg",
      inventoryStatus: "INSTOCK",
      name: "Product item 4",
      price: 200,
      quantity: 61,
      rating: 4
    },
    {
      category: "Beverages",
      description: "Product Description",
      id: "1005",
      image: "assets/products/pd5.jpg",
      inventoryStatus: "INSTOCK",
      name: "Product item 5",
      price: 144,
      quantity: 61,
      rating: 4
    }
  ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      console.log(params);
      debugger
    });
  }

}
