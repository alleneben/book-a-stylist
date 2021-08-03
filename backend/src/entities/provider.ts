import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, JoinTable, JoinColumn } from "typeorm";
import { Service } from './service';

@Entity("r_providers")
export class Provider extends BaseEntity{
	
	@PrimaryGeneratedColumn("increment")
	id: number | undefined;

	
	@Column()
	userId!: number;

	
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

	@OneToMany(() => Service, service => service.provider, { eager: true })
    service!: Service[];
}
