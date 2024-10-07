import { Component } from '@angular/core';
import { FormSearchService } from '../../core/services/form-search.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor (public formSearchService: FormSearchService) {
    
  }
}
