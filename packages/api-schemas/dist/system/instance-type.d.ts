import { z } from "zod/v4";
/**
 * Instance type
 *
 * @openapiSchema SystemInstanceType
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.instance-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/telemetry/InstanceType.kt
 */
export declare const SystemInstanceTypeSchema: z.ZodEnum<{
    PRIMARY: "PRIMARY";
    REPLICA: "REPLICA";
    UNKNOWN: "UNKNOWN";
}>;
export type SystemInstanceType = z.infer<typeof SystemInstanceTypeSchema>;
//# sourceMappingURL=instance-type.d.ts.map