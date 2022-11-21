import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    let fileContents = await readFile('messages.json', 'utf8');
    let messages = JSON.parse(fileContents);
    return messages[id];
  }

  async findAll() {
    let fileContents = await readFile('messages.json', 'utf8');
    let messages = JSON.parse(fileContents);
    return messages;
  }

  async create(message: string) {
    let fileContents = await readFile('messages.json', 'utf8');
    let messages = JSON.parse(fileContents);
    let randomId = Math.floor(Math.random() * 999);
    messages[randomId] = { randomId, content: message };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
