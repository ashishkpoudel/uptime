import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryColumn('uuid')
  public readonly id: string;

  @Column({type: 'varchar'})
  public readonly name: string;

  @Column({type: 'varchar'})
  public readonly emailAddress: string;

  @Column({type: 'date'})
  public readonly confirmedAt?: Date;

  @Column({type: 'varchar', nullable: true})
  public readonly password?: string;
}
