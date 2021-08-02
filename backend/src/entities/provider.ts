import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Service } from './service';

@Entity("r_providers")
export class Provider extends BaseEntity{
	
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

	@OneToMany(() => Service, service => service.provider)
    service!: Service[];
}
