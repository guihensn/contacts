import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-bar',
  templateUrl: './return-bar.component.html',
  styleUrls: ['./return-bar.component.scss']
})
export class ReturnBarComponent {
  @Input() title?: string;
  @Input() showGoBack?: boolean = true;
  @Input() textColor?: string;
  @Input() background?: string;
  @Input() backUrl?: string;

  constructor(private location: Location, private router: Router) { }

  goBack() {
    if (this.backUrl) {
      return this.router.navigate([this.backUrl]);
    }

    return this.location.back();
  }
}
