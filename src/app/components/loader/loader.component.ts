import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

  loading: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
    this.loading = this.loaderService.loading$;
    console.log("loader component"+this.loading);
  }
}
