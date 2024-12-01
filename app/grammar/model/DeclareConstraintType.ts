export class DeclareConstraintType {
  static readonly INIT = new DeclareConstraintType("Init", 2);
  static readonly EXACTLY_ONE = new DeclareConstraintType("Exactly1", 2);
  static readonly NOT_COEXISTENCE = new DeclareConstraintType("Not Co-Existence", 3);
  static readonly COEXISTENCE = new DeclareConstraintType("Co-Existence", 3);
  static readonly CHAIN_SUCCESSION = new DeclareConstraintType("Chain Succession", 3);
  static readonly ALTERNATE_SUCCESSION = new DeclareConstraintType("Alternate Succession", 3);
  static readonly ALTERNATE_RESPONSE = new DeclareConstraintType("Alternate Response", 3);
  static readonly ALTERNATE_PRECEDENCE = new DeclareConstraintType("Alternate Precedence", 3);
  static readonly SUCCESSION = new DeclareConstraintType("Succession", 3);
  static readonly NOT_CHAIN_SUCCESSION = new DeclareConstraintType("Not Chain Succession", 3);

  private constructor(private readonly rumName: string, private readonly trailingPipes: number) {}

  public getRumName(): string {
    return this.rumName;
  }

  public getTrailingPipes(): number {
    return this.trailingPipes;
  }
}
