import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Form } from '@angular/forms';
import { response } from 'express';
import { NgForm } from '@angular/forms';
import { UploadService } from '../../services/upload.service';
import { privateDecrypt } from 'crypto';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File> = [];
  public save_project: Project;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2025,'',''); // A la varaible project le decimos que es una nueva instancia del modelo Project y definimos todos sus parametros vacios exepto el year que en este caso de lo damos por default
    this.status = '';
    this.save_project = new Project('','','','',2025,'','');
  }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){

    //Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response =>{
        if(response.project){
          
          //Subir la imagen
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image').then((result:any)=>{
            this.status = 'succes';
            this.save_project = response.project;
            form.reset();
          });    
              
        }else{
          this.status = 'failed';
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
