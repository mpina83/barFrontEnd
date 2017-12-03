import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  baseUrl: string;
  results: string[];
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {
    this.http.get<ClientsResponse>( this.baseUrl + 'api/clients').subscribe(data => {
      // data is now an instance of type ItemsResponse, so you can do this:
      this.results = data.results;
    });
  }

}
interface ClientsResponse {
  results: string[];
}
