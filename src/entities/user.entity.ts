import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'user_id' })
  id!: number;

  @Column({ name: 'user_email' })
  email!: string;

  @Column({ name: 'user_password' })
  password!: string;

  @Column({ name: 'user_firstname' })
  firstname!: string;

  @Column({ name: 'user_lastname' })
  lastname!: string;

  @Column({ name: 'user_birthday' })
  birthday!: Date;

}