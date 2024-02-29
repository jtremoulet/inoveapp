import { Component, OnInit } from '@angular/core';
import { ModelDetailComponent } from '../../components/model-detail/model-detail.component';
import { ModelListComponent } from '../../components/model-list/model-list.component';
import { ModelService } from '../../services/model.service';
import { Model } from '../../models/model.model';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateModelDialogComponent } from '../../components/create-model-dialog/create-model-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateModelDialogComponent } from '../../components/update-model-dialog/update-model-dialog.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ModelDetailComponent, ModelListComponent, MatButtonModule, MatDialogModule],
  templateUrl: './homepage.page.html',
  styleUrl: './homepage.page.scss'
})
export class HomepagePage implements OnInit {

  constructor(private modelService: ModelService, private router: Router, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  public models: Model[] | undefined;

  public currentModel: Model | undefined;

  ngOnInit(): void {
    this.getData();
  }

  newCurrentModel(event: Model) {
    this.currentModel = event;
  }

  openModal() {
    const dialogRef = this.dialog.open(CreateModelDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.createModel(result);
    });
  }

  openDialogUpdate(model: Model) {
    const dialogRef = this.dialog.open(UpdateModelDialogComponent, { data: { model } });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.updateModel(result);
    });
  }

  createModel(model: Model) {
    this.modelService.createModel(model).subscribe(res => {
      this._snackBar.open(`Le Modèle ${model.name} a bien été créé`, 'X', { duration: 6000 });
      this.getData();
      this.currentModel = res;
    });
  }

  deleteModel(model: Model) {
    if (model.id)
      this.modelService.deleteModel(model.id).subscribe(res => {
        this._snackBar.open(`Le Modèle ${model.name} a bien été supprimé`, 'X', { duration: 6000 });
        this.refreshPage();
      });
  }

  updateModel(model: Model) {
    if (model.id)
      this.modelService.updateModel(model).subscribe(res => {
        this._snackBar.open(`Le Modèle ${model.name} a bien été mis à jour`, 'X', { duration: 6000 });
        this.getData();
        this.currentModel = res;
      });
  }

  refreshPage() {
    this.currentModel = undefined;
    this.getData();
  }

  getData() {
    this.modelService.getModels().subscribe(res => {
      this.models = res;
    })
  }


}

