import { z } from "zod/v4";
declare const HarnessQueuePositionSchemaDefinition: z.ZodObject<{
    modelQueued: z.ZodInt;
    modelRunning: z.ZodInt;
    placeInLine: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    totalInQueue: z.ZodInt;
}, z.core.$strip>;
type HarnessQueuePositionDefinition = z.infer<typeof HarnessQueuePositionSchemaDefinition>;
/**
 * A run's claimable queue position and depth
 *
 * @openapiSchema HarnessQueuePosition
 * @endpoint GET /v1/harness/control-plane/runs/{runId}/queue-position
 * @endpoint GET /v1/harness/runs/{runId}/queue-position
 * @contractShape harness.queue-position
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessQueuePosition.kt
 */
export declare const HarnessQueuePositionSchema: z.ZodType<HarnessQueuePositionDefinition>;
export type HarnessQueuePosition = z.infer<typeof HarnessQueuePositionSchema>;
export {};
//# sourceMappingURL=queue-position.d.ts.map