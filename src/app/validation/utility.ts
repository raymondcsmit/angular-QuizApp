import { FormGroup } from '@angular/forms';

export class Utility {
    static markTouched(container: FormGroup) {
        (<any>Object).values(container.controls).forEach(control => {
          control.markAsTouched();
    
          if (control.controls) {
            this.markTouched(control);
          }
        });
      }
}
