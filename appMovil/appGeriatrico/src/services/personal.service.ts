import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

// This is injectable service to another component
@Injectable()
export class PersonalService {
    constructor(public afDB: AngularFireDatabase) {

    }
    public getPersonal() {
        return this.afDB.list('/personal/');
    }
    public getPersonalID(id) {
        return this.afDB.object('/personal/' + id);
    }
    public createPersonal(personal) {
        return this.afDB.database.ref('/personal/' + personal.id).set(personal);
    }
    public editPersonal(personal) {
        return this.afDB.database.ref('/personal/' + personal.id).set(personal);
    }
    public deletePersonal(personal){
        return this.afDB.database.ref('/personal/' + personal.id).remove();
    }
}