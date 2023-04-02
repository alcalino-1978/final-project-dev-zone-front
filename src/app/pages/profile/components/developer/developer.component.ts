import { Component, Input } from '@angular/core';
import { NewLinePipe } from '../../../../pipes/new-line.pipe';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {
  @Input() data!: any;
}
