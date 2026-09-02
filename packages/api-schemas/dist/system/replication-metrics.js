// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Replication metrics from the Supabase metrics API.
 *
 * @openapiSchema SystemReplicationMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.replication-metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/replication/ReplicationMetrics.kt
 */
export const SystemReplicationMetricsSchema = z.object({
    connectedToPrimary: z.boolean().nullish(),
    isAvailable: z.boolean(),
    lagSeconds: z.number().nullish(),
    physicalLagSeconds: z.number().nullish(),
    replayLagSeconds: z.number().nullish(),
    replicationSlotsMaxLagBytes: z.number().int().nullish(),
    sendLagSeconds: z.number().nullish(),
    status: z.string(),
    walReplayPaused: z.boolean().nullish(),
});
//# sourceMappingURL=replication-metrics.js.map