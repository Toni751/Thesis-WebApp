import { Activity } from "./model/Activity";

export class SharedModelStorage {
  private static instance: SharedModelStorage;
  private transitions: Set<string> = new Set();
  private andSubProcesses: Map<string, Activity[]> = new Map();
  private orSubProcesses: Map<string, Activity[]> = new Map();
  private outputText: string[] = [];

  private constructor() {}

  public static getInstance(): SharedModelStorage {
    if (!SharedModelStorage.instance) {
      SharedModelStorage.instance = new SharedModelStorage();
    }
    return SharedModelStorage.instance;
  }

  public addTransition(transition: string): void {
    this.transitions.add(transition);
  }

  public addAndSubProcess(id: string, activities: Activity[]): void {
    this.andSubProcesses.set(id, activities);
  }

  public addOrSubProcess(id: string, activities: Activity[]): void {
    this.orSubProcesses.set(id, activities);
  }

  public getAndSubProcess(id: string): Activity[] | undefined {
    return this.andSubProcesses.get(id);
  }

  public getOrSubProcess(id: string): Activity[] | undefined {
    return this.orSubProcesses.get(id);
  }

  public getAndSubProcessNames(id: string): string[] {
    const activities = this.andSubProcesses.get(id);
    return activities ? activities.map((activity) => activity.getName()) : [];
  }

  public getOrSubProcessNames(id: string): string[] {
    const activities = this.orSubProcesses.get(id);
    return activities ? activities.map((activity) => activity.getName()) : [];
  }

  public getTransitions(): Set<string> {
    return this.transitions;
  }

  public setOutputText(text: string[]): void {
    this.outputText = text;
  }

  public getOutputText(): string[] {
    return this.outputText;
  }
}
