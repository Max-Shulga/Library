import type { EventFormValues } from '../../models/personInsert.model';

type TPersonInsertForm = {
  onSubmit: (data: EventFormValues) => Promise<void>;
};

export type { TPersonInsertForm };
