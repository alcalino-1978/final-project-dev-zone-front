import { Component, Input } from '@angular/core';
import { CompanyModelAPI } from 'src/app/models/company.models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  @Input() data!: CompanyModelAPI;
}
