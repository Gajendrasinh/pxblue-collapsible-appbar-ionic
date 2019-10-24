import { Component, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'expandable-header',
  template: '<ng-content></ng-content>',
})
export class ExpandableHeader {

  @Input('scrollArea') scrollArea: any;
  @Input('headerHeight') headerHeight: number;

  newHeaderHeight: any;

  constructor(public element: ElementRef, public renderer: Renderer2) {

  }

  ngOnInit(){

    this.renderer.setStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
    console.log(this.scrollArea)
    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });

  }

  resizeHeader(ev){

   // ev.domWrite(() => {

      this.newHeaderHeight = this.headerHeight - ev.detail.scrollTop;

      if(this.newHeaderHeight < 0){
        this.newHeaderHeight = 0;
      }   

      this.renderer.setStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');

      for(let headerElement of this.element.nativeElement.children){

        let totalHeight = headerElement.offsetTop + headerElement.clientHeight;

        if(totalHeight > this.newHeaderHeight && !headerElement.isHidden){
          headerElement.isHidden = true;
          this.renderer.setStyle(headerElement, 'opacity', '0');
        } else if (totalHeight <= this.newHeaderHeight && headerElement.isHidden) {
          headerElement.isHidden = false;
          this.renderer.setStyle(headerElement, 'opacity', '0.7');
        }

      }

    //});

  }

}