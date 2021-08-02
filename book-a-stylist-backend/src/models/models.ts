import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn,ManyToOne, OneToMany } from "typeorm";


@Entity("users")
export class Users extends BaseEntity {

	
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



@Entity("r_providers")
export class Providers extends BaseEntity{
	
	@PrimaryGeneratedColumn("increment", { name: "provider_id"})
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

	@OneToMany(() => Services, service => service.provider)
    services!: Services[];
}


@Entity("r_services")
export class Services extends BaseEntity{
	
	@PrimaryGeneratedColumn("increment",{ name: "provider_id"})
	service_id: number | undefined;

	
	@Column()
	image!: string;

	
	@Column()
	service_name!: string;

	
	@Column()
	service_description!: string;

	
	@Column()
	service_category_id!: number;

	
	@Column()
	user_id!: number;

	
	@Column()
	provider_id!: number;

	
	@CreateDateColumn({ type: 'timestamp', default: 'now()'})
	created_date!: number;


	@Column()
	price!: number;

	
	@Column()
	available_count!: number;

	
	@Column()
	public!: number;

	
	@Column()
	price_show!: number;

	
	@Column()
	customer_cancel!: number;

	
	@Column()
	schedule_type!: number;

	
	@Column()
	service_booking_type!: string

	
	@Column()
	service_min_duration!: number

	@Column()
	can_travel!: number;

	@Column()
	can_travel_charge!: number;

	@ManyToOne(() => Providers, provider => provider.services) 
	provider!: Providers; 

}





@Entity()
export class User {
	
	@PrimaryGeneratedColumn()
    user_id!: number;
	
    @Column()
    name!: string;
	
    @OneToMany(() => Photo, photo => photo.user)
    photos!: Photo[];
	
}

@Entity()
export class Photo {

	@PrimaryGeneratedColumn()
	photo_id!: number;

	@Column()
	url!: string;

	@ManyToOne(() => User, user => user.photos)
	user!: User;

}