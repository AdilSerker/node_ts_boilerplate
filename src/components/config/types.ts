export enum ConfigType {
	Server = "server",
	Db = "db"
}

export interface DbConfig extends BaseConfig {
	type: string;
	host: string;
	database: string;
	username: string;
	password: string;
	entities: string[];
	migrations: string[];
	logging: string[];
	cli: { migrationsDir: string };
}

export interface ConfigDictionary {
	[key: string]: BaseConfig;
}

export interface BaseConfig {}

export interface ServerConfig extends BaseConfig {
	host: string;
	port: number;
}
