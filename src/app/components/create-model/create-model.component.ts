import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModelService } from '../../services/model.service';
import { MatButtonModule } from '@angular/material/button';
import { Model } from '../../models/model.model';

@Component({
  selector: 'app-create-model',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './create-model.component.html',
  styleUrl: './create-model.component.scss'
})
export class CreateModelComponent {

  constructor(private modelService: ModelService) { }

  modelForm = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    polygons: new FormControl(0, Validators.required),
    description: new FormControl('')
  })

  onSubmit() {
    console.log(this.modelForm);
    const model: Model = {
      name: this.modelForm.controls.name.value,
      author: this.modelForm.controls.author.value,
      polygons: this.modelForm.controls.polygons.value,
      description: this.modelForm.controls.description.value,
      date: new Date(),
      modelName: this.modelForm.controls.name.value
    }
    this.modelService.createModel(model).subscribe();

  }

}
