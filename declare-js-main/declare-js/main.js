import { Editor } from "./editor/editor.js";
import { ExistenceConstraintSubmenu } from "./interactivity/subMenu.js";
import { RelationConstraintSubmenu } from "./interactivity/subMenu.js";

import { addEventListeners } from "./interactivity/eventListeners.js";
import { zoom } from "./interactivity/actions/zoom.js";

import { SvgElement } from "./elements/svgElement.js";
import { determineForces } from "./graphLayout.js";
import { DeclareModel } from "./declareModel.js";

import { handleFileUpload } from "./interactivity/importMenu.js";

export class DeclareContainer {
  constructor(str) {
    this.enableEdit = true;
    this.snapToGrid = true;

    this.container = document.getElementById("declareContainer");
    if (!this.container) {
      console.log("Container not initialzed yet");
      return;
    }
    this.canvas;
    this.view;
    this.zoomLevel = 1;
    this.str = str;

    this.mode;
    this.editor;
    this.editMenu;
    this.ioMenu;
    this.navigationMenu;
    this.helpMenu;
    this.contextMenu;

    this.fileInput;
    this.mouseAttachment;

    this.selectedActivities = new Set();
    this.selectedExistenceConstraints = new Set();
    this.selectedRelationConstraints = new Set();

    this.declareModel;

    this.init();
  }

  //Initialize container
  init() {
    // Add classes and styles to container
    this.container.classList.add("declare-container");
    this.container.style.width = "100%";
    this.container.style.height = "100%";
    this.container.style.overflow = "hidden";
    this.container.style.position = "relative";
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    // Create svg canvas
    this.canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.container.appendChild(this.canvas);
    this.canvas.classList.add("declare-canvas");
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.style.position = "relative";

    // Create view
    this.view = new SvgElement("g", "view", this.width / 2, this.height / 2);
    this.view.shape.setAttribute("draggable", "true");
    this.view.addToView(this.canvas);

    // Generate background grid
    let viewRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    this.view.shape.appendChild(viewRect);
    viewRect.setAttribute("x", -5000 + 175 + this.width / 2);
    viewRect.setAttribute("y", -5000 - this.height / 2);
    viewRect.setAttribute("width", 10000);
    viewRect.setAttribute("height", 10000);
    viewRect.setAttribute("fill", "url(#grid)");

    const gridDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    gridDefs.innerHTML = `
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="0" cy="0" r="2" fill="#d9d9d9"/>
    </pattern>
`;
    this.canvas.appendChild(gridDefs);

    // Add text editor and declare model
    this.editor = new Editor(this);
    this.declareModel = new DeclareModel(this);

    this.existenceConstraintSubmenu = new ExistenceConstraintSubmenu(this);
    this.relationConstraintSubmenu = new RelationConstraintSubmenu(this);

    // this.helpMenu = new Menu(this, ["HELP"], null, "htr");
    // this.exportMenu = new ExpansionMenu(this, "120px", ["JSON_EXPORT", "SVG_EXPORT", "TXT_EXPORT"]);
    // this.ioMenu = new Menu(this, ["NEW", "IMPORT", "EXPORT"], null, "hbl");
    // this.navigationMenu = new Menu(this, ["ZOOM_IN", "ZOOM_OUT"], null, "vbr");

    let container = this;

    // Add file input
    this.fileInput = document.createElement("input");
    this.fileInput.style.display = "none";
    this.fileInput.setAttribute("type", "file");
    this.container.appendChild(this.fileInput);
    this.fileInput.addEventListener("change", (event) => handleFileUpload(event, container));

    // Add interactivity
    addEventListeners(this);
    zoom(this);

    // generation of random model (activities, existence constraints, relation constraints)
    //const constraintStrings = this.declareModel.generateRandomModel(10, 5, 15);

    const constraintStrings = this.str.split(/\r?\n/);

    console.log(constraintStrings);

    for (const constraintString of constraintStrings) {
      this.declareModel.addConstraint(constraintString);
    }

    // Enable auto layout
    determineForces(this.declareModel);
    // Disable auto layout after after 10 seconds
    setTimeout(() => {
      this.declareModel.autoLayout = false;
      this.declareModel.alignActivities();
    }, 10000);
  }
}
