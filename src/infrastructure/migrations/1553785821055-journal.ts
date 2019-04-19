import {MigrationInterface, QueryRunner} from "typeorm";

export class journal1553785821055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `create table journal (
                id varchar(40) primary key,
                title varchar(255),
                journal varchar(255),
                volume integer,
                number integer,
                pages varchar(255),
                year integer,
                abstract text,
                link varchar(255),
                body text
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `drop table journal;`
        );
    }

}
