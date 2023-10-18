import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private toast: ToastrService) { }

  showNotify(type: string, message: string) {

    if (type == "success") {
      this.toast.success(message);
    }

    if (type == "error") {
      this.toast.error(message);
    }

    if (type == "warning") {
      this.toast.warning(message); 
    }
  }
}
