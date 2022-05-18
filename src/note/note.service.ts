import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from '../entity/Note';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteDto } from './dto/note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NoteService {
  columnsToReturn = ['id', 'content', 'updatedAt', 'createdAt'];
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    const timestamp = new Date();

    return (
      await this.noteRepository
        .createQueryBuilder()
        .insert()
        .into(Note)
        .values({
          ...createNoteDto,
          createdAt: timestamp,
          updatedAt: timestamp,
        })
        .returning(this.columnsToReturn)
        .execute()
    ).raw[0];
  }

  findAll() {
    return this.noteRepository
      .createQueryBuilder()
      .addOrderBy('"createdAt"', 'DESC')
      .getMany();
  }

  async findOne(id: number) {
    const note = await this.noteRepository.findOne({ where: { id } });

    if (!note) throw new NotFoundException(`Note with id: ${id} not found`);

    return note;
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    await this.findOne(id);

    return (
      await this.noteRepository
        .createQueryBuilder()
        .update(Note)
        .set({ ...updateNoteDto, updatedAt: new Date() })
        .where({ id })
        .returning(this.columnsToReturn)
        .execute()
    ).raw[0];
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.noteRepository
      .createQueryBuilder()
      .delete()
      .from(Note)
      .where({ id })
      .execute();
  }
}
