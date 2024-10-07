import { Component, Input, OnInit } from '@angular/core';
import { FederativeUnityService } from '../../core/services/federative-unity.service';
import { FederativeUnity } from '../../core/types/type';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss'
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string= '';
  @Input() iconPrefix: string= '';
  @Input() placeholder: string= '';
  @Input() control!: FormControl;

  federativeUnity: FederativeUnity[] = [];

  filteredOptions$?: Observable<FederativeUnity[]>;

  constructor(
    private federativeUnityService: FederativeUnityService
  ) {}

  ngOnInit(): void {
    this.federativeUnityService.list().subscribe(data => {
      this.federativeUnity = data
      console.log(this.federativeUnity)
    })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filterUf(value))
    )

  }

  filterUf(value: string | FederativeUnity): FederativeUnity[] {
    const nameUf = typeof value === 'string' ? value : value?.nome;

    const filterValue = nameUf?.toLowerCase();
    const result = this.federativeUnity.filter(
      estado => estado.nome.toLowerCase().includes(filterValue))

      return result;
  }

  displayFn(estado: FederativeUnity): string {
    return estado && estado.nome ? estado.nome : '';
  }
}
