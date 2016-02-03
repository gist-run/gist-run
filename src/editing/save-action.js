export const saveAction = {
  fork: 'Fork',
  create: 'Create',
  update: 'Update'
};

export function getSaveAction(gist, user) {
  // existing gist?
  if (gist.id) {
    // user is owner?
    if (gist.owner.login === user.login) {
      return saveAction.update;
    } else {
      return saveAction.fork;
    }
  } else {
    return saveAction.create;
  }
}
