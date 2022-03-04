import { Node, Edge, Combo, Model, PointTuple } from './types';
import { SafeAny } from './any';

export class Base {
  public nodes: Node[] | null = [];
  public edges: Edge[] | null = [];
  public combos: Combo[] | null = [];
  public comboEdges: Edge[] | null = [];
  public hiddenNodes: Node[] | null = [];
  public hiddenEdges: Edge[] | null = [];
  public hiddenCombos: Combo[] | null = [];
  public positions: PointTuple[] | null = [];
  public destroyed: boolean = false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onLayoutEnd: () => void = () => {};

  public layout(data: Model): Model {
    this.init(data);
    return this.execute(true);
  }

  public init(data: Model): void {
    this.nodes = data.nodes || [];
    this.edges = data.edges || [];
    this.combos = data.combos || [];
    this.comboEdges = data.comboEdges || [];
    this.hiddenNodes = data.hiddenNodes || [];
    this.hiddenEdges = data.hiddenEdges || [];
    this.hiddenCombos = data.hiddenCombos || [];
  }

  public execute(reloadData?: boolean): SafeAny {}
  public executeWithWorker(): Promise<void> | void {}

  public getDefaultCfg(): SafeAny {
    return {};
  }

  public updateCfg(cfg: SafeAny): void {
    if (cfg) {
      Object.assign(this, cfg);
    }
  }

  public getType(): string {
    return 'base';
  }

  public destroy(): void {
    this.nodes = null;
    this.edges = null;
    this.combos = null;
    this.positions = null;
    this.destroyed = true;
  }
}
