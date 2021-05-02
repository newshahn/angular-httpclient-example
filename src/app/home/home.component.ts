import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });
  }
}
