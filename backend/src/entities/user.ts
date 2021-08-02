import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";


@Entity("users")
export class User extends BaseEntity {
	
	@PrimaryGeneratedColumn("increment")
	user_id!: number | undefined;
	
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
