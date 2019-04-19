import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { JournalModel } from "./JournalModel";

@Entity("author")
export class AuthorModel {
    @PrimaryColumn("varchar")
    id: string;

    @Column("varchar")
    firstname: string;

    @Column("varchar")
    lastname: string;

    @Column("varchar")
    institution: string;

    @Column("varchar")
    email: string;

}
