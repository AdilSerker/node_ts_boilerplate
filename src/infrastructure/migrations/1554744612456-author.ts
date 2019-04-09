import {MigrationInterface, QueryRunner} from "typeorm";

export class author1554744612456 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `create table author (
                id varchar(40) primary key,
                firstname varchar(255) not null,
                lastname varchar(255) not null,
                institution varchar(255) not null,
                email varchar(255) not null
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('drop table author;');
    }

}
