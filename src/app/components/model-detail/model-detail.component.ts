import { Component, EventEmitter, Input, LOCALE_ID, Output, input } from '@angular/core';
import { Model } from '../../models/model.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import localeFr from '@angular/common/locales/fr';
import { DatePipe, registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);

@Component({
  selector: 'app-model-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, DatePipe],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' },],
  templateUrl: './model-detail.component.html',
  styleUrl: './model-detail.component.scss'
})
export class ModelDetailComponent {

  @Input() model: Model | undefined;

  @Output() deleteModel = new EventEmitter<Model>();

  @Output() updateModel = new EventEmitter<Model>();

  remove() {
    this.deleteModel.emit(this.model);
  }

  update() {
    this.updateModel.emit(this.model);
  }

}
