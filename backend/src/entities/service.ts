import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn,ManyToOne } from "typeorm";
import { Provider } from './provider';



@Entity("r_services")
export class Service extends BaseEntity{
	
	@PrimaryGeneratedColumn("increment")
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

	@ManyToOne(() => Provider, provider => provider.service) 
	provider!: Provider; 

}