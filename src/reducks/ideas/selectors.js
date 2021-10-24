import { createSelector } from "reselect";

const ideasSelector = (state) => state.ideas;


export const getIdeas = createSelector(
  [ideasSelector],
  state => state.list
);
