import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('keywords')
export class KeywordsModel {
    @PrimaryColumn("varchar")
    id: string;

    @Column("varchar")
    value: string;
}
