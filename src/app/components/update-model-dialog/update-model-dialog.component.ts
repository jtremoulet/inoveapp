import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Model } from '../../models/model.model';
import { UpdateModelComponent } from '../update-model/update-model.component';

@Component({
  selector: 'app-update-model-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, UpdateModelComponent],
  templateUrl: './update-model-dialog.component.html',
  styleUrl: './update-model-dialog.component.scss'
})
export class UpdateModelDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdateModelDialogComponent>) {

  }

  newModelReceived(event: Model) {
    this.dialogRef.close(event);
  }

}
