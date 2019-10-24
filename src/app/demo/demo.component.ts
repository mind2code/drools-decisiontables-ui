import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { DroolsService } from './drools.service';
import { Souscription } from './souscription';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private droolsService: DroolsService) { }

  isSubmitted = false;

  public souscription: Souscription;

  /*###### FORM #######*/
  simulateForm = this.fb.group({
    dpEnergie: ['', Validators.required],
    inputPuissance: ['', Validators.required],
    inputResultat: ['']
  });

  /*##### GETTER ########*/

  get dpEnergie() {
    return this.simulateForm.get('dpEnergie');
  }

  get inputPuissance() {
      return this.simulateForm.get('inputPuissance');
  }

  get inputResultat() {
      return this.simulateForm.get('inputResultat');
  }

  ngOnInit() {
  }


  onSubmit() {
    this.isSubmitted = true;
    if (!this.simulateForm.valid) {
        return false;
    } else {
        this.souscription = new Souscription();
        this.souscription.energieType = this.dpEnergie.value;
        this.souscription.puissanceFiscale = Number(this.inputPuissance.value);
        // Enregistrement en base de donnee 
        console.log(this.souscription);
        this.droolsService.simulate(this.souscription).subscribe( res => {
          console.log(res);
           this.inputResultat.setValue(res.montantRC);
        });

        // alert(JSON.stringify(this.routeur));
    }
}

}
