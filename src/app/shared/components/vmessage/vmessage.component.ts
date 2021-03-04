import { Component, Input } from '@angular/core';

@Component({
  selector: 'nk-vmessage',
  templateUrl: './vmessage.component.html'
})

export class VMessageComponent {

  @Input() text = '';
}
