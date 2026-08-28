import { z } from "zod/v4";
declare const RefreshTriggerOutcomeSchemaDefinition: z.ZodObject<{
    enqueued: z.ZodInt;
    kind: z.ZodString;
}, z.core.$strip>;
type RefreshTriggerOutcomeDefinition = z.infer<typeof RefreshTriggerOutcomeSchemaDefinition>;
/**
 * Outcome of an operator refresh trigger
 *
 * @openapiSchema RefreshTriggerOutcome
 * @endpoint POST /v1/content/embedding/refresh
 * @endpoint POST /v1/content/embedding/refresh/reconcile
 * @endpoint POST /v1/content/embedding/refresh/sweep
 * @contractShape refresh.trigger-outcome
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/RefreshTriggerOutcome.kt
 */
export declare const RefreshTriggerOutcomeSchema: z.ZodType<RefreshTriggerOutcomeDefinition>;
export type RefreshTriggerOutcome = z.infer<typeof RefreshTriggerOutcomeSchema>;
export {};
//# sourceMappingURL=trigger-outcome.d.ts.map