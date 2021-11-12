import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  TreeParent,
  TreeChildren,
  Tree,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('regions')
@Tree('closure-table')
export default class Region {
  @Column('uuid')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @TreeParent()
  parent: Region;

  @TreeChildren()
  children: Region[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
