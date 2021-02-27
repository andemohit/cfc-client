import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '@app/@shared/shared.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @ViewChild('menuListItems') public menuListItems: MatSelectionList

  public categoryTitle: string = '';
  public categoryItems: any[] = [];
  public categoryItemsList: any[] = [
    { item: 'Family Feast', image: 'assets/category/chicken/family-feast.jpg', price: 650, category: 'nonveg' },
    { item: 'product 2', image: 'assets/products/pd2.jpg', price: 900, category: 'veg' },
    { item: 'product 3', image: 'assets/products/pd3.jpg', price: 1299, category: 'veg' },
    { item: 'product 4', image: 'assets/products/pd4.jpg', price: 1500, category: 'nonveg' },
    { item: 'product 5', image: 'assets/products/pd5.jpg', price: 799, category: 'nonveg' },
  ];
  public menuListOptions: string[] = ['Vegetarian', 'Non-Vegetarian', 'Ala-Carte', 'Chicken Wings', 'Boneless Chicken Strips', 'Bucket'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      this.categoryTitle = await params.category;
      // this.menuListItems.selectedOptions.selected[0]?.value
      debugger
    });
    this.primengConfig.ripple = true;
    this.categoryItems = this.categoryItemsList;
  }

  public addToCart(item: any): void {
    
  }

  public vegOnly(event: any): void {
    console.log(event);
    if (event.checked) {
      this.categoryItems = this.categoryItemsList.filter(item => item.category === 'veg');
    } else {
      this.categoryItems = this.categoryItemsList;
    }
  }

  public selectionChange(event: MatSelectionListChange): void {
    this.router.navigate(['/category'], { queryParams: { category: event.source._value[0] } });
  }

}
