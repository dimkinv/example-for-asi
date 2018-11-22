import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Output() buttonClicked = new EventEmitter<void>();
  @Output() inputChanged = new EventEmitter<string>();

  @ViewChild('danny') input: any;

  constructor(private authService: AuthService) {
   }

  ngOnInit() {
  }


  onInputChaned() {
    this.authService.foo();
    this.inputChanged.emit(this.input.nativeElement.value);
  }
}
