import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormSearchService {

  formSearch: FormGroup;

  constructor(private dialog: MatDialog) {

    this.formSearch = new FormGroup({
      oneWay: new FormControl(false),
      origin: new FormControl(null),
      destiny: new FormControl(null),
      type: new FormControl("Econômica"),
      adults: new FormControl(0),
      childrens: new FormControl(0),
      babies: new FormControl(0)
    });
  }

  getDescPassengers(): string {
    let desc = ''

    const adults = this.formSearch.get('adults')?.value;
    if (adults && adults > 0) {
      desc += `${adults} adulto${adults > 1 ? 's' : ''}`;
    }

    const childrens = this.formSearch.get('childrens')?.value;
    if (childrens && childrens > 0) {
      desc += `${desc ? ', ' : ''}${childrens} criança${childrens > 1 ? 's' : ''}`;
    }

    const babies = this.formSearch.get('babies')?.value
    if (babies && babies > 0) {
      desc += `${desc ? ', ' : ''}${babies} bebê${babies > 1 ? 's' : ''}`;
    }

    return desc;
  }

  getControl(nome: string): FormControl {
    const control = this.formSearch.get(nome)
    if (!control) {
      throw new Error(`FormControl com nome ${nome} não existe`)
    }
    return control as FormControl;
  }

  changeType(event: MatChipSelectionChange, type: string) {
    if (event.selected) {
      this.formSearch.patchValue({
        type,
      })
      console.log('Tipo de passagem alterado para: ', type)
    }
  }

  changeOriginDestiny(): void {
    const origin = this.formSearch.get('origin')?.value;
    const destiny = this.formSearch.get('destiny')?.value;

    this.formSearch.patchValue({
      origin: destiny,
      destiny: origin
    });
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }
}
