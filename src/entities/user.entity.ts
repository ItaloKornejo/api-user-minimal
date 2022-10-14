import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERS')
export class User extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'USER_ID' })
  id!: number;

  @Column({ name: 'USER_EMAIL' })
  email!: string;

  @Column({ name: 'USER_PASSWORD' })
  password!: string;

  @Column({ name: 'USER_FIRSTNAME' })
  firstname!: string;

  @Column({ name: 'USER_LASTNAME' })
  lastname!: string;

  @Column({ name: 'USER_BIRTHDAY' })
  birthday!: Date;

}