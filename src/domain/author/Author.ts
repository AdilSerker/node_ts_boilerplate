import { AuthorParams } from "../../types";
import { v4 } from "uuid";


export class Author {
    public id: string;
    public firstname: string;
    public lastname: string;
    public institution: string;
    public email: string;

    public constructor(params: AuthorParams) {
        const { id = v4(), firstname, lastname, institution, email } = params;

        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.institution = institution;
        this.email = email;
    }
}
