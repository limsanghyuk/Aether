import { AetherMemoryNode } from "../agents/aether-memory-node";
import { Stage50LogicNode } from "../agents/stage50-logic-node";
import { V327RenderNode } from "../agents/v327-render-node";
import { CharacterTimeLedger } from "../ledger/character-time-ledger";

/**
 * Tri-Node Orchestrator
 * Master Pipeline Router controlling the flow.
 */
export class TriNodeRouter {
  private memoryBoard = new AetherMemoryNode();
  private logicGate = new Stage50LogicNode();
  private renderer = new V327RenderNode();
  private ledger = new CharacterTimeLedger();

  public async processUserPrompt(prompt: string) {
    console.log("1. Starting User Prompt Flow:", prompt);

    // Step 1: Logic Engine structurally plans
    const plan = await this.logicGate.planMacroStructure(prompt);

    // Step 2: Extract exact Micro-Context needed for the scene
    const microContext = await this.memoryBoard.getMicroContext("Current Scene Context");

    // Step 3: Claude writing the specific scene using only given micro-context
    let sceneDraft = await this.renderer.renderScene(microContext, "Write an emotional resolution.");
    
    // Step 4: Logic Engine evaluates
    const evaluation = await this.logicGate.evaluateCanon(sceneDraft, plan);

    if (evaluation.isApproved) {
      // Step 5: Ledger Update (Persistent state tracking)
      await this.ledger.commitEvent("Event_Timeline_Forward", sceneDraft);

      // Step 6: Memory Update (Adding to Blackboard)
      await this.memoryBoard.updateMemory(sceneDraft);

      return { status: "SUCCESS", finalCanon: sceneDraft };
    } else {
      console.warn("Critic Gate Rejected. Retrying...", evaluation.feedback);
      return { status: "FAILED", reason: evaluation.feedback };
    }
  }
}
