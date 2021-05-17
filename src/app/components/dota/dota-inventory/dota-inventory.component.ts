import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import Inventory from 'src/app/models/Inventory';
import { switchMap } from 'rxjs/operators';
import { SteamAuthService } from 'src/app/services/steam-auth.service';

@Component({
  selector: 'app-dota-inventory',
  templateUrl: './dota-inventory.component.html',
  styleUrls: ['./dota-inventory.component.scss']
})
export class DotaInventoryComponent implements OnInit {
  private headers: HttpHeaders = new HttpHeaders();
  inventory: Inventory[] = [];
  isAuthenticated: boolean;
  testData: string = '';
  constructor(private http: HttpClient, private securityService: OidcSecurityService, private authService: SteamAuthService) {
    this.isAuthenticated = authService.isAuthenticated;
  }

  ngOnInit(): void {
  }

  private test = (isAuthenticated: boolean): Observable<object> => {
    this.setHeaders();
    let response = this.http.get<object>('https://localhost:5001/user', {headers: this.headers});

    return response;
  }

  private setHeaders(): any {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');

    const token = this.securityService.getToken();

    console.log(token);
    if (token !== '') {
        const tokenValue = 'Bearer ' + token;
        this.headers = this.headers.append('Authorization', tokenValue);
    }
  }
}
