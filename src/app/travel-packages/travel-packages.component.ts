import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-travel-packages',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './travel-packages.component.html',
  styleUrls: ['./travel-packages.component.css'],
})
export class TravelPackagesComponent implements OnInit {
  travelPackages: any[] = [];
  private apiUrl = 'http://localhost:8080/api/v1/packages';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        console.log('Travel packages data:', data);
        this.travelPackages = data;
      },
      (error) => {
        console.error('Error fetching travel packages:', error);
      }
    );
  }
}
