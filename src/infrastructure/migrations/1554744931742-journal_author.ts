import {MigrationInterface, QueryRunner} from "typeorm";

export class journalAuthor1554744931742 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `create table journal_author (
                author_id varchar(40) references author(id),
                journal_id varchar(40) references journal(id)
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `drop table journal_authors_author;`
        );
    }

}
