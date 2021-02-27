import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private cartItems$: BehaviorSubject<any> = new BehaviorSubject<any[]>([]);
  
  constructor() { }

  public async setCartItem(cartItems: any): Promise<void> {
    this.cartItems$.next(cartItems);
  }

  public get getCartItem(): Observable<any> {
    return this.cartItems$.asObservable();
  }
}
