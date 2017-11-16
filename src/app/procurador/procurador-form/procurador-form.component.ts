import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Procurador } from '../procurador';
import { ProcuradorService } from '../procurador.service';


@Component({
  selector: 'app-procurador-form',
  templateUrl: './procurador-form.component.html',
  styleUrls: ['./procurador-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProcuradorFormComponent implements OnInit {

  id: number;
  procurador: Procurador;
  procForm: FormGroup;

  titulo = 'Novo Procurador';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private procuradorService: ProcuradorService
  ) {
    this.criarControles();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.procuradorService.porId(this.id)
        .subscribe(
          procurador => {
            this.id = procurador.id;
            this.procForm.patchValue({
              nome: procurador.nome,
              procuradoria: procurador.procuradoria,
              email: procurador.email,
              celular: procurador.celular
            });
          }, erro => console.log(erro)
        );
    }
  }

  criarControles() {
    /*this.procForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      procuradoria: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]),
      celular: new FormControl(''),
    });*/

    this.procForm = this.fb.group({
      nome: ['', Validators.required],
      procuradoria: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      celular: ''
    });
  }

  aoSalvar() {
    if (this.procForm.valid) {
      this.procuradorService.salvar(this.procForm.value)
        .subscribe(
          r => console.log(r),
          erro => console.log(erro),
          () => console.log('Concluído')
        );
      /*const procurador: Procurador = new Procurador(null,
        this.procForm.controls['nome'].value,
        this.procForm.controls['procuradoria'].value,
        this.procForm.controls['email'].value,
        this.procForm.controls['celular'].value);
        this.procuradorService.salvar(procurador)
          .subscribe();*/
    }
    this.procForm.reset();
    this.router.navigate(['/procuradores']);
  }

  procuradorPage() {
    this.router.navigate(['/procuradores']);
  }

}
