import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { JournalModel } from "./JournalModel";

@Entity("keyword")
export class KeywordModel {
    @PrimaryColumn("varchar")
    id: string;

    @Column("varchar")
    value: string;
}
