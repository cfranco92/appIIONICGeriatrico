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
    public createCliente(lugar) {
        return this.afDB.database.ref('/clientes/' + lugar.id).set(lugar);
    }
    public editCliente(lugar) {
        return this.afDB.database.ref('/clientes/' + lugar.id).set(lugar);
    }
    public deleteCliente(lugar){
        return this.afDB.database.ref('/clientes/' + lugar.id).remove();
    }
}