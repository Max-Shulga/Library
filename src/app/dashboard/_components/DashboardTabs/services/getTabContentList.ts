import { createClient } from 'lib/supabase/server';

const getTabContentList = async () => {
  const supabase = await createClient();

  const [actionsRes, equipmentsRes, personsRes, placesRes] = await Promise.all([
    supabase.from('actions').select('*').order('id'),
    supabase.from('equipments').select('*').order('id'),
    supabase.from('persons').select('*').order('id'),
    supabase.from('places').select('*').order('id'),
  ]);

  return {
    actions: actionsRes.data ?? [],
    equipments: equipmentsRes.data ?? [],
    persons: personsRes.data ?? [],
    places: placesRes.data ?? [],
  } as const;
};

export { getTabContentList };
