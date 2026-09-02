import { z } from "zod/v4";
declare const HarnessRunEventAppendSchemaDefinition: z.ZodObject<{
    payload: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
type HarnessRunEventAppendDefinition = z.infer<typeof HarnessRunEventAppendSchemaDefinition>;
/**
 * Append one run stream event
 *
 * @openapiSchema HarnessRunEventAppend
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/events
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/events/batch
 * @usedBySchema HarnessRunEventBatchAppendSchema
 * @contractShape harness.run-event-append
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunEvent.kt
 */
export declare const HarnessRunEventAppendSchema: z.ZodType<HarnessRunEventAppendDefinition>;
export type HarnessRunEventAppend = z.infer<typeof HarnessRunEventAppendSchema>;
export {};
//# sourceMappingURL=run-event-append.d.ts.map