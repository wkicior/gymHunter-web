import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[AUTH] Login', props<{ username: string; password: string }>()
);
