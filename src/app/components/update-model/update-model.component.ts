import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Model } from '../../models/model.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update-model',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, HttpClientModule],
  templateUrl: './update-model.component.html',
  styleUrl: './update-model.component.scss'
})
export class UpdateModelComponent implements OnInit {

  @Input() model?: Model;

  @Output() newModel = new EventEmitter<Model>();

  modelForm = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    polygons: new FormControl(0, Validators.required),
    description: new FormControl('')
  })

  ngOnInit(): void {
    if (this.model) {
      this.modelForm.controls.name.setValue(this.model?.name ?? null)
      this.modelForm.controls.author.setValue(this.model?.author ?? null)
      this.modelForm.controls.polygons.setValue(this.model?.polygons ?? null)
      this.modelForm.controls.description.setValue(this.model?.description ?? null)
    }
  }

  onSubmit() {
    const model: Model = {
      ...this.model,
      name: this.modelForm.controls.name.value,
      author: this.modelForm.controls.author.value,
      polygons: this.modelForm.controls.polygons.value,
      description: this.modelForm.controls.description.value
    }

    this.newModel.emit(model);

  }

}
