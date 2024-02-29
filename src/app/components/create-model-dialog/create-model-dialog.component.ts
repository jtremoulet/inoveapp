import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CreateModelComponent } from '../create-model/create-model.component';
import { Model } from '../../models/model.model';

@Component({
  selector: 'app-create-model-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CreateModelComponent],
  templateUrl: './create-model-dialog.component.html',
  styleUrl: './create-model-dialog.component.scss'
})
export class CreateModelDialogComponent {

  constructor(public dialogRef: MatDialogRef<CreateModelDialogComponent>) { }

  newModelReceived(event: Model) {
    this.dialogRef.close(event);
  }

}
