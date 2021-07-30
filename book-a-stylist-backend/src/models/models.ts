import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, getConnection, OneToMany } from "typeorm";


@Entity("users")
export class Users extends BaseEntity {

	@PrimaryGeneratedColumn("increment")
	user_id: number | undefined;

	@Column()
	username!: string;

	@Column()
	user_uuid!: string;

	@Column()
	fullname!: string;


	@Column()
	lastname!: string;


	@Column()
	email!: string;

	@Column()
	firstname!: string;
}


@Entity("r_providers")
export class Providers extends BaseEntity{

	@PrimaryGeneratedColumn("increment")
	provider_id: number | undefined;


	@Column()
	user_id!: number;


	@Column()
	provider_name!: string;

	@Column()
	provider_username!: string;

	@Column()
	address!: string;

	@Column()
	latitude!: string;

	@Column()
	longitude!: string;

}