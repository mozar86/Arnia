import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Measure {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerCode: string;

  @Column()
  measureType: string;

  @Column('decimal')
  measureValue: number;

  @Column()
  imageUrl: string;

  @Column()
  confirmed: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
