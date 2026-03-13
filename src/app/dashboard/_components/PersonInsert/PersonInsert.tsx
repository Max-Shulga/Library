import { createClient } from 'lib/supabase/client';

import PersonInsertForm from './components/PersonInsertForm';

import type { EventFormValues } from './models/personInsert.model';

const PersonInsert = () => {
  const supabase = createClient();

  const onSubmitHandler = async (data: EventFormValues) => {
    const payload = {
      ...data,
    };

    await supabase.from('person_details').insert(payload).select().single();
  };

  return <PersonInsertForm onSubmit={onSubmitHandler} />;
};

export default PersonInsert;
