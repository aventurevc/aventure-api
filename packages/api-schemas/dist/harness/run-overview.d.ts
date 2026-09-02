import { z } from "zod/v4";
declare const HarnessRunOverviewSchemaDefinition: z.ZodObject<{
    completed: z.ZodInt;
    failed: z.ZodInt;
    queued: z.ZodInt;
    running: z.ZodInt;
    stopped: z.ZodInt;
    total: z.ZodInt;
}, z.core.$strip>;
type HarnessRunOverviewDefinition = z.infer<typeof HarnessRunOverviewSchemaDefinition>;
/**
 * Harness run ledger status counts
 *
 * @openapiSchema HarnessRunOverview
 * @endpoint GET /v1/harness/control-plane/runs/overview
 * @contractShape harness.run-overview
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunOverview.kt
 */
export declare const HarnessRunOverviewSchema: z.ZodType<HarnessRunOverviewDefinition>;
export type HarnessRunOverview = z.infer<typeof HarnessRunOverviewSchema>;
export {};
//# sourceMappingURL=run-overview.d.ts.map