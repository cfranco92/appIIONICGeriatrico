import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

// This is injectable service to another component
@Injectable()
export class ClienteService {
    constructor(public afDB: AngularFireDatabase) {

    }
    public getClientes() {
        return this.afDB.list('/clientes/');
    }
    public getCliente(id) {
        return this.afDB.object('/clientes/' + id);
    }
    public createCliente(cliente) {
        return this.afDB.database.ref('/clientes/' + cliente.id).set(cliente);
        // return this.afDB.database.ref('/notificaciones/123131453342').set({etiqueta: 'Cita',tema: 'Planificación',descripcion: 'Cita especilista doña Barbara.'});
    }
    public editCliente(cliente) {
        return this.afDB.database.ref('/clientes/' + cliente.id).set(cliente);
    }
    public deleteCliente(cliente){
        return this.afDB.database.ref('/clientes/' + cliente.id).remove();
    }
}