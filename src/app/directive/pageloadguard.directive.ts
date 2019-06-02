import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appPageloadguard]'
})
export class PageloadguardDirective {

  constructor() {
      window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "You will lose changes";
      
        e.returnValue = confirmationMessage;     
        return confirmationMessage;             
      });
}
  

 
}
