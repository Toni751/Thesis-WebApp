export function editorSelectActivity(evt, activityId, container) {
  if (!evt.shiftKey) removeAllSelections(container);
  var activity = container.declareModel.getActivityById(activityId);
  if (activity) addActivitySelection(activity, container);
}

export function editorSelectConstraint(evt, constraintId, container) {
  if (!evt.shiftKey) removeAllSelections(container);
  var existenceConstraint = container.declareModel.getExistenceConstraintById(constraintId);
  if (existenceConstraint) {
    addExistenceConstraintSelection(existenceConstraint, container);
  } else {
    var relationConstraint = container.declareModel.getRelationConstraintById(constraintId);
    if (relationConstraint) addRelationConstraintSelection(relationConstraint, container);
  }
}

function addActivitySelection(activity, container) {
  activity.enableSelection();
  container.selectedActivities.add(activity);
  // Select activity in editor
  var lineElem = Array.from(container.editor.activities).find((line) => line.getAttribute("elem_id") === activity.id);
  container.editor.addLineSelection(lineElem);

  container.mouseAttachment = null;
}

function removeActivitySelection(activity, container) {
  activity.disableSelection();
  container.selectedActivities.delete(activity);
  var lineElem = Array.from(container.editor.activities).find((line) => line.getAttribute("elem_id") === activity.id);
  container.editor.removeLineSelection(lineElem);
}

function addExistenceConstraintSelection(existenceConstraint, container) {
  existenceConstraint.enableSelection();
  container.selectedExistenceConstraints.add(existenceConstraint);
  // Select activity in editor
  var lineElem = Array.from(container.editor.constraints).find(
    (line) => line.getAttribute("elem_id") === existenceConstraint.id
  );
  container.editor.addLineSelection(lineElem);

  container.relationConstraintSubmenu.close();
  if (
    container.selectedExistenceConstraints.size === 1 &&
    container.selectedRelationConstraints.size === 0 &&
    container.selectedActivities.size === 0
  ) {
    container.mouseAttachment = existenceConstraint;
    container.existenceConstraintSubmenu.setOptions(existenceConstraint);
    container.existenceConstraintSubmenu.open();
  } else {
    container.mouseAttachment = null;
  }
}

function removeExistenceConstraintSelection(existenceConstraint, container) {
  existenceConstraint.disableSelection();
  container.selectedExistenceConstraints.delete(existenceConstraint);
  var lineElem = Array.from(container.editor.constraints).find(
    (line) => line.getAttribute("elem_id") === existenceConstraint.id
  );
  container.editor.removeLineSelection(lineElem);

  container.mouseAttachment = null;
}

function addRelationConstraintSelection(relationConstraint, container) {
  relationConstraint.enableSelection();
  container.selectedRelationConstraints.add(relationConstraint);
  // Select activity in editor
  var lineElem = Array.from(container.editor.constraints).find(
    (line) => line.getAttribute("elem_id") === relationConstraint.id
  );
  container.editor.addLineSelection(lineElem);

  if (
    container.selectedExistenceConstraints.size === 0 &&
    container.selectedRelationConstraints.size === 1 &&
    container.selectedActivities.size === 0
  ) {
    container.mouseAttachment = relationConstraint;
    container.relationConstraintSubmenu.setOptions(relationConstraint);
    container.relationConstraintSubmenu.open();
  } else {
    container.mouseAttachment = null;
  }
}

function removeRelationConstraintSelection(relationConstraint, container) {
  relationConstraint.disableSelection();
  container.selectedRelationConstraints.delete(relationConstraint);
  var lineElem = Array.from(container.editor.constraints).find(
    (line) => line.getAttribute("elem_id") === relationConstraint.id
  );
  container.editor.removeLineSelection(lineElem);

  container.mouseAttachment = null;
  container.relationConstraintSubmenu.close();
}

export function removeAllSelections(container) {
  for (const activity of container.selectedActivities) {
    removeActivitySelection(activity, container);
  }
  for (const existenceConstraint of container.selectedExistenceConstraints) {
    removeExistenceConstraintSelection(existenceConstraint, container);
  }
  for (const relationConstraint of container.selectedRelationConstraints) {
    removeRelationConstraintSelection(relationConstraint, container);
  }
}
