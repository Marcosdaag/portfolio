import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; // Para poder hacer peticiones ajax
import { Observable } from "rxjs";
import { Project } from "../models/project"; // Modelo de proyectos
import { Global } from "./global"; // Archivo de variables globales que voy a estar usando en varias situaciones

@Injectable() // Decordaror para decirle a la clase que vamos a inyectarla en otro lado despues
export class ProjectService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio de angular';
    }

    saveProject(project: Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'save-project',params,{headers: headers});
    }

    getProjects():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'projects', {headers: headers});
    }

    getProject(id: string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'project/'+id, {headers:headers});
    }

    deleteProject(id: string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'projects/'+id, {headers:headers});
    }

    updateProject(project: Project):Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'project/'+project._id, params, {headers:headers});
    }
}