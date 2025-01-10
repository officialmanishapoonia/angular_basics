import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  showLoader() {
    console.log("show loader");
    this.loadingSubject.next(true);
  }

  hideLoader() {
    console.log("hide loader");
    this.loadingSubject.next(false);
  }

}
