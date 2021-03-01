import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakPointRegistry } from '@angular/flex-layout';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '@app/@shared/shared.service';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @ViewChild('menuListItems') public menuListItems: MatSelectionList;
  items: MenuItem[];

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
  public sideNav: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private primengConfig: PrimeNGConfig,
    private breakPointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      this.categoryTitle = await params.category;
    });
    this.primengConfig.ripple = true;
    this.categoryItems = this.categoryItemsList;
    this.breakPointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((state: BreakpointState) => {
      state.matches ? this.sideNav = false : this.sideNav = true;
    });

    this.items = [
      {
        label: 'Vegetarian',
        routerLink: '/category',
        queryParams: {
          'category': 'Vegetarian'
        }
      },
      {
        label: 'Non-Vegetarian',
        routerLink: '/category',
        queryParams: {
          'category': 'Non-Vegetarian'
        }
      },
      {
        label: 'Ala-carte',
        routerLink: '/category',
        queryParams: {
          'category': 'Ala-Carte'
        }
      },
      {
        label: 'Chicken Wings',
        routerLink: '/category',
        queryParams: {
          'category': 'Chicken Wings'
        }
      },
      {
        label: 'Boneless Chicken Strips',
        routerLink: '/category',
        queryParams: {
          'category': 'Boneless Chicken Strips'
        }
      },
      {
        label: 'Bucket',
        routerLink: '/category',
        queryParams: {
          'category': 'Bucket'
        }
      },
    ];
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
