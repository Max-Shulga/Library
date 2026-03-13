'use client';

import { Input } from '@base-ui/react/input';
import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';

import Button from '@/components/Button/Button';

import styles from './PersonInsertForm.module.css';

import type { EventFormValues } from '../models/personInsert.model';
import type { TPersonInsertForm } from './models/personInsertForm.model';

const PersonInsertForm = ({ onSubmit }: TPersonInsertForm) => {
  const { register, handleSubmit } = useForm<EventFormValues>({
    defaultValues: {
      name: '',
      description: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <div className={styles.field}>
        <label className={styles.label}>
          <Input placeholder="Имя" className={styles.input} {...register('name')} />
        </label>

        <TextareaAutosize
          minRows={4}
          maxRows={8}
          {...register('description')}
          className={styles.input}
          placeholder="Короткое описание"
        />
        <Button type="submit">Добавить</Button>
      </div>
    </form>
  );
};

export default PersonInsertForm;
