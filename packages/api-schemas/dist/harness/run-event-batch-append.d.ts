import { z } from "zod/v4";
declare const HarnessRunEventBatchAppendSchemaDefinition: z.ZodObject<{
    event: z.ZodArray<z.ZodType<{
        payload: string;
        type: string;
    }, unknown, z.core.$ZodTypeInternals<{
        payload: string;
        type: string;
    }, unknown>>>;
}, z.core.$strip>;
type HarnessRunEventBatchAppendDefinition = z.infer<typeof HarnessRunEventBatchAppendSchemaDefinition>;
/**
 * Append a buffered batch of run events
 *
 * @openapiSchema HarnessRunEventBatchAppend
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/events/batch
 * @contractShape harness.run-event-batch-append
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunEvent.kt
 */
export declare const HarnessRunEventBatchAppendSchema: z.ZodType<HarnessRunEventBatchAppendDefinition>;
export type HarnessRunEventBatchAppend = z.infer<typeof HarnessRunEventBatchAppendSchema>;
export {};
//# sourceMappingURL=run-event-batch-append.d.ts.map