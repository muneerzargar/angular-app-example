import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') toggleOpen = false;

  @HostListener('document:click', ['$event']) closeDropDown(event: Event) {
    this.toggleOpen = this.elRef.nativeElement.contains(event.target) ? !this.toggleOpen : false;
  }
  constructor(private elRef: ElementRef) { }

}
