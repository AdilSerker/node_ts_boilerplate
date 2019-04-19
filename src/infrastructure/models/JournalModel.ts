import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { AuthorModel } from "./AuthorModel";
import { KeywordModel } from "./KeywordsModel";

@Entity("journal")
export class JournalModel {
    @PrimaryColumn("varchar")
    id: string;

    @Column("varchar")
    title: string;

    @Column("varchar")
    journal: string;

    @Column("integer")
    volume: number;

    @Column("integer")
    number: number;

    @Column("varchar")
    pages: string;

    @Column("integer")
    year: number;

    @Column("text")
    abstract: string;

    @Column("varchar")
    link: string;

    @Column("text")
    body: string;

    @ManyToMany(type => AuthorModel) //, author => author.journals)
    @JoinTable({
        name: "journal_author",
        joinColumn: {
            name: "journal_id"
        },
        inverseJoinColumn: {
            name: "author_id"
        }
    })
    authors: AuthorModel[];

    @ManyToMany(type => KeywordModel) //, keyword => keyword.journals)
    @JoinTable({
        name: "journal_keyword",
        joinColumn: {
            name: "journal_id"
        },
        inverseJoinColumn: {
            name: "keyword_id"
        }
    })
    keywords: KeywordModel[];

}
