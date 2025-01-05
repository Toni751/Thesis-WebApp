import * as highlighting from "./highlightingEvents.js";
import * as editing from "./editingEvents.js";
import { getTextualDescription } from "../elements/textualDescriptions.js";
import { TEXT_EDITOR_ARROW } from "../svg/icons.js";
import { getMousePosition } from "../util.js";
import { editorSelectActivity, editorSelectConstraint } from "../interactivity/actions/selectElement.js";

export class Editor {
  constructor(declare) {
    this.declare = declare;
    this.activities = new Set();
    this.constraints = new Set();
    this.highlightedLines = new Set();
    this.selectedLines = new Set();
    this.faceplates = new Set();
    this.inUse = false;
    this.resize = false;
    this.offset;

    this.width = 350;
    this.minWidth = 180;

    // Create and style container element
    this.menuContainer = document.createElement("div");
    this.declare.container.appendChild(this.menuContainer);
    this.menuContainer.style.width = this.width + "px";
    this.menuContainer.style.height = "100vh";
    this.menuContainer.style.position = "absolute";
    this.menuContainer.style.right = "0px";
    this.menuContainer.style.top = "0";
    this.menuContainer.style.backgroundColor = "F8F8F8";
    this.menuContainer.style.borderLeft = "solid 5px";
    this.menuContainer.style.borderColor = "#BEBEBE";
    this.menuContainer.style.transition = "right 0.5s";

    this.addResizeEvent();

    // Create button for expanding and collapsing text editor
    this.collapseButton = document.createElement("div");
    this.menuContainer.appendChild(this.collapseButton);
    this.collapseButton.style.position = "absolute";
    this.collapseButton.style.right = this.width + 4 + "px";
    this.collapseButton.style.top = "calc(50vh - 25px)";
    this.collapseButton.style.height = "50px";
    this.collapseButton.style.width = "20px";

    this.collapseButton.style.backgroundColor = "F8F8F8";
    this.collapseButton.style.border = "solid 1px";
    this.collapseButton.style.borderColor = "#BEBEBE";
    this.collapseButton.style.borderRadius = "4px 0 0 4px";

    this.collapseButtonIcon = document.createElement("div");
    this.collapseButton.appendChild(this.collapseButtonIcon);
    this.collapseButtonIcon.innerHTML = TEXT_EDITOR_ARROW;
    this.collapseButtonIcon.style.transform = "rotate(180deg)";
    this.collapseButtonIcon.style.transition = "transform 0.5s";
    this.addCollapseEvent();

    // Create activity and constraint segments
    this.activitiesContainer = this.createSubcontainer(this.menuContainer, "Activities", "20vh", true);
    this.faceplates.add(this.createFaceplate(this.menuContainer, "20vh"));
    this.constraintsContainer = this.createSubcontainer(this.menuContainer, "Constraints", "calc(50vh - 16px)", true);
    this.faceplates.add(this.createFaceplate(this.menuContainer, "70vh + 32px"));
    this.descriptionContainer = this.createSubcontainer(this.menuContainer, "Description", "calc(20vh - 32px)", false);
    this.descriptionContainer.innerHTML = "Select a constraint to generate a textual description.";
    this.descriptionContainer.style.padding = "8px 1px 20px 12px";
    this.descriptionContainer.style.fontStyle = "italic";
    this.descriptionContainer.style.whiteSpace = "normal";

    this.addActivity("<br>");
    this.addConstraint("<br>");

    // Add highlighting functionality
    highlighting.activityHighlights(this, this.declare);
    highlighting.constraintHighlights(this, this.declare);
    highlighting.resetHighlights(this, this.declare);

    // Add editing functionality
    editing.lineEditActivity(this, this.declare);
    editing.lineEditConstraint(this, this.declare);
  }

  // Add a new activity line
  addActivity(activity) {
    if (!this.inUse) {
      if (this.activities.size === 0) this.activitiesContainer.innerHTML = "";
      let newLine = this.createLine(activity);
      if (activity.id) this.activities.add(newLine);
      this.activitiesContainer.appendChild(newLine);
    }
  }

  updateActivity(activity) {
    let activityLine = Array.from(this.activities).find((line) => line.getAttribute("elem_id") === activity.id);
    if (activity.toString()) {
      activityLine.innerHTML = activity.toString();
    } else {
      this.declare.declareModel.deleteActivity(activityLine.getAttribute("elem_id"));
    }
  }

  // Add a new constraint line
  addConstraint(constraint) {
    if (!this.inUse) {
      if (this.constraints.size === 0) this.constraintsContainer.innerHTML = "";
      let newLine = this.createLine(constraint);
      if (constraint.id) this.constraints.add(newLine);
      this.constraintsContainer.appendChild(newLine);
    }
  }

  updateConstraint(constraint) {
    let constraintLine = Array.from(this.constraints).find((line) => line.getAttribute("elem_id") === constraint.id);
    constraintLine.innerHTML = constraint.toString();
  }

  removeActivity(activity) {
    let activityLine = Array.from(this.activities).find((line) => line.getAttribute("elem_id") === activity.id);
    if (activityLine) {
      this.activities.delete(activityLine);
      if (this.selectedLines.has(activityLine)) this.selectedLines.delete(activityLine);
      activityLine.remove();
    }

    if (this.activities.size === 0) this.addActivity("<br>");
  }

  removeConstraint(constraint) {
    let constraintLine = Array.from(this.constraints).find((line) => line.getAttribute("elem_id") === constraint.id);
    if (constraintLine) {
      this.constraints.delete(constraintLine);
      if (this.selectedLines.has(constraintLine)) this.selectedLines.delete(constraintLine);
      constraintLine.remove();
    }
    if (this.constraints.size === 0) this.addConstraint("<br>");
    this.updateDescription();
  }

  // Create a container for line elements
  createSubcontainer(menuContainer, heading, height, buttons) {
    let subcontainerHeading = document.createElement("div");
    subcontainerHeading.style.fontFamily = "Arial, sans-serif";
    subcontainerHeading.style.padding = "2px 12px";
    subcontainerHeading.style.fontWeight = "bold";
    subcontainerHeading.style.border = "none";
    subcontainerHeading.style.borderBottom = "none";
    subcontainerHeading.style.borderLeft = "none";
    subcontainerHeading.style.borderRight = "none";
    subcontainerHeading.style.backgroundColor = "rgb(150, 150, 150)";
    subcontainerHeading.style.fontSize = "13px";
    subcontainerHeading.style.userSelect = "none";
    subcontainerHeading.innerHTML = heading;
    menuContainer.appendChild(subcontainerHeading);

    let subcontainer = document.createElement("div");
    subcontainer.classList.add("editorContainer");
    subcontainer.style.padding = "8px 1px 20px 4px";
    subcontainer.style.fontFamily = "Arial";
    subcontainer.style.fontSize = "12px";
    subcontainer.style.overflow = "auto";
    subcontainer.style.height = height;
    subcontainer.style.whiteSpace = "nowrap";
    subcontainer.contentEditable = false;
    subcontainer.style.outline = "0px solid transparent";
    subcontainer.setAttribute("spellcheck", "false");
    menuContainer.appendChild(subcontainer);

    return subcontainer;
  }

  createFaceplate(menuContainer, posX) {
    let faceplate = document.createElement("div");
    faceplate.style.height = "16px";
    faceplate.style.width = this.width - 16;
    faceplate.style.right = "16px";
    faceplate.style.position = "absolute";
    faceplate.style.top = "calc(" + posX + " + 32px)";
    faceplate.style.backgroundImage = "linear-gradient(transparent, rgb(248, 248, 248))";
    menuContainer.appendChild(faceplate);
    return faceplate;
  }

  // Create a new line element
  createLine(object) {
    var newLine = document.createElement("div");
    newLine.innerHTML = object.toString();

    newLine.setAttribute("elem_id", object.id);
    newLine.classList.add("editorLine");
    newLine.style.padding = "0px 8px";
    newLine.style.margin = "1px";
    newLine.style.height = "16px";
    newLine.style.borderRadius = "2px";

    return newLine;
  }

  // Add highlighted style to a line element
  highlightLine(lineElem) {
    if (lineElem) {
      this.highlightedLines.add(lineElem);
      lineElem.style.background = "#d3d3d3";
    }
  }

  // Remove highlighted style from a line element
  removeLineHighlight(lineElem) {
    if (lineElem) {
      this.highlightedLines.delete(lineElem);
      lineElem.style.background = "transparent";
    }
  }

  addLineSelection(lineElem) {
    if (lineElem) {
      var marker = document.createElement("div");
      lineElem.appendChild(marker);
      marker.classList.add("marker");

      marker.style.height = "18px";
      marker.style.width = "4px";
      marker.style.background = "#BD86E6";
      marker.style.position = "relative";
      marker.style.left = "-8px";
      marker.style.top = "-16px";

      this.selectedLines.add(lineElem);

      this.updateDescription();
    }
  }

  removeLineSelection(lineElem) {
    if (lineElem) {
      var marker = lineElem.querySelector(".marker");
      if (marker) marker.remove();

      this.selectedLines.delete(lineElem);
      this.updateDescription();
    }
  }

  updateDescription() {
    // Check if only one constraint is selected
    if (this.selectedLines.size === 1 && this.constraints.has(this.selectedLines.values().next().value)) {
      this.descriptionContainer.style.fontStyle = "unset";
      let constraint = this.declare.declareModel.getExistenceConstraintById(
        this.selectedLines.values().next().value.getAttribute("elem_id")
      );
      if (!constraint)
        constraint = this.declare.declareModel.getRelationConstraintById(
          this.selectedLines.values().next().value.getAttribute("elem_id")
        );
      this.descriptionContainer.innerHTML = getTextualDescription(constraint);
    } else {
      this.descriptionContainer.innerHTML = "Select a constraint to generate a textual description.";
      this.descriptionContainer.style.fontStyle = "italic";
    }
  }

  addCollapseEvent() {
    this.collapseButton.addEventListener("click", () => {
      if (this.menuContainer.style.right === "0px") {
        this.close();
      } else {
        this.open();
      }
    });
    this.collapseButton.addEventListener("mouseover", () => {
      this.collapseButton.style.backgroundColor = "rgb(220, 220, 220)";
    });
    this.collapseButton.addEventListener("mouseleave", () => {
      this.collapseButton.style.backgroundColor = "#F8F8F8";
    });
  }

  close() {
    this.menuContainer.style.right = -(this.width + 4) + "px";
    this.collapseButtonIcon.style.transform = "rotate(0)";
    // this.declare.helpMenu.menuContainer.style.right = "20px";
    // this.declare.navigationMenu.menuContainer.style.right = "20px";
  }

  open() {
    this.menuContainer.style.right = "0";
    // this.declare.helpMenu.menuContainer.style.right = this.width + 24 + "px";
    this.collapseButtonIcon.style.transform = "rotate(180deg)";
    // this.declare.navigationMenu.menuContainer.style.right = this.width + 24 + "px";
  }

  addResizeEvent() {
    this.resizeHandle = document.createElement("div");
    this.menuContainer.appendChild(this.resizeHandle);
    this.resizeHandle.style.width = "16px";
    this.resizeHandle.style.height = "100vh";
    this.resizeHandle.style.position = "absolute";
    this.resizeHandle.style.right = this.width - 7 + "px";
    this.resizeHandle.style.top = "0";
    this.resizeHandle.style.transition = "right 0.5s";
    this.resizeHandle.style.cursor = "col-resize";

    this.resizeHandle.addEventListener("mousedown", (evt) => {
      this.resize = true;
      this.offset = getMousePosition(evt, this.declare.canvas).x + this.width;
    });

    document.addEventListener("mousemove", (evt) => {
      if (this.resize) {
        this.width = this.offset - getMousePosition(evt, this.declare.canvas).x;
        if (this.width < this.minWidth) this.width = this.minWidth;
        this.menuContainer.style.width = this.width + "px";
        this.resizeHandle.style.right = this.width - 4 + "px";
        this.collapseButton.style.right = this.width + 4 + "px";
        for (const faceplate of this.faceplates) {
          faceplate.style.width = this.width - 16;
        }
        // this.declare.helpMenu.menuContainer.style.right = this.width + 24 + "px";
        // this.declare.helpMenu.menuContainer.style.transition = "right 0s";
        // this.declare.navigationMenu.menuContainer.style.right = this.width + 24 + "px";
        // this.declare.navigationMenu.menuContainer.style.transition = "right 0s";
        this.menuContainer.style.userSelect = "none";
      }
    });

    document.addEventListener("mouseup", (evt) => {
      this.resize = false;
      // this.declare.helpMenu.menuContainer.style.transition = "right 0.5s";
      // this.declare.navigationMenu.menuContainer.style.transition = "right 0.5s";
      this.menuContainer.style.userSelect = "unset";
    });
  }

  sort(containerName) {
    if (containerName === "Activities") {
      this.activitiesContainer.innerHTML = "";
      let sortedActivities = Array.from(this.activities).sort((a, b) =>
        a.firstChild.wholeText.localeCompare(b.firstChild.wholeText)
      );
      this.activities = new Set(sortedActivities);
      for (const activity of this.activities) {
        console.log(activity.firstChild.wholeText);
        this.activitiesContainer.appendChild(activity);
      }
    } else {
      this.constraints.clear();
      this.constraintsContainer.innerHTML = "";
      for (const template of this.declare.declareModel.existenceConstraintMap) {
        for (const constraint of template[1]) {
          this.addConstraint(constraint);
        }
      }
      this.addConstraint("<br>");
      for (const template of this.declare.declareModel.relationConstraintMap) {
        for (const constraint of template[1]) {
          this.addConstraint(constraint);
        }
      }
    }
  }
}
