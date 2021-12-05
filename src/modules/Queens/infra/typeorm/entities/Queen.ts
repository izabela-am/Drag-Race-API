import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn
} from "typeorm";

import { IQueenStats } from './interfaces';

@Entity('queens')
export class Queen {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  picture_url: string;

  @Column()
  winner: boolean;

  @Column()
  miss_congeniality: boolean;

  @Column()
  stats: Array<IQueenStats>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}