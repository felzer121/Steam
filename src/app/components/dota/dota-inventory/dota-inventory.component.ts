import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import Inventory from 'src/app/models/Inventory';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dota-inventory',
  templateUrl: './dota-inventory.component.html',
  styleUrls: ['./dota-inventory.component.scss']
})
export class DotaInventoryComponent implements OnInit {
  private headers: HttpHeaders = new HttpHeaders();
  inventory: Inventory[] = [];
  isAuthenticated$: Observable<boolean>;

  constructor(private http: HttpClient, private securityService: OidcSecurityService) { 
    this.isAuthenticated$ = this.securityService.isAuthenticated$;
  }

  ngOnInit(): void {
    this.isAuthenticated$.pipe(
      switchMap((isAuthorized: boolean) => this.getAll(isAuthorized))
    )
      .subscribe(
        data => this.inventory = data
      )
  }

  private getAll = (isAuthenticated: boolean): Observable<Inventory[]> => {
    this.setHeaders();

    let response =  this.http.get<Inventory[]>("https://localhost:5001/inventory/steamId?steamId=76561198881491957", { headers: this.headers });

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
