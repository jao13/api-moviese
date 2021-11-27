import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('movies')
class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_user: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  cover: string;

  @Column()
  type_movie: string;
}

export default Movie;
