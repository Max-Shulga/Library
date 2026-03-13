import type { TablesInsert } from '@/database.types/*';

type EventInsert = TablesInsert<'person_details'>;

type EventFormValues = Pick<EventInsert, 'name' | 'description'>;

export type { EventInsert, EventFormValues };
