import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { AuthorModel } from "./AuthorModel";
import { KeywordsModel } from "./KeywordsModel";

@Entity('journal')
export class JournalModel {
    @PrimaryColumn("varchar")
    id: string;

    @Column("varchar")
    title: string;

    @Column("varchar")
    journal: string;

    @Column("integer")
    value: number;

    @Column("integer")
    number: number;

    @Column("varchar")
    pages: string;

    @Column("integer")
    year: number;

    @Column("varchar")
    abstract: string;

    @Column("varchar")
    link: string;

    @Column("varchar")
    body: string;

    @ManyToMany(type => AuthorModel)
    @JoinTable()
    authors: AuthorModel[];

    @ManyToMany(type => KeywordsModel)
    @JoinTable()
    keywords: KeywordsModel[];

}
