import { z } from "zod/v4";
declare const HarnessRunEventSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    id: z.ZodNumber;
    payload: z.ZodString;
    runId: z.ZodUUID;
    seq: z.ZodInt;
    type: z.ZodString;
}, z.core.$strip>;
type HarnessRunEventDefinition = z.infer<typeof HarnessRunEventSchemaDefinition>;
/**
 * One ordered run stream-log entry
 *
 * @openapiSchema HarnessRunEvent
 * @endpoint GET /v1/harness/control-plane/runs/{runId}/events
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/events
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/events/batch
 * @contractShape harness.run-event
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunEvent.kt
 */
export declare const HarnessRunEventSchema: z.ZodType<HarnessRunEventDefinition>;
export type HarnessRunEvent = z.infer<typeof HarnessRunEventSchema>;
export {};
//# sourceMappingURL=run-event.d.ts.map