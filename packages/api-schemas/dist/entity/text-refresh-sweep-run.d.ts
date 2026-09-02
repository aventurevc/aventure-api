import { z } from "zod/v4";
declare const EntityTextRefreshSweepRunSchemaDefinition: z.ZodObject<{
    correlationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    maxWordCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    notUpdatedSince: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    textType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityTextRefreshSweepRunDefinition = z.infer<typeof EntityTextRefreshSweepRunSchemaDefinition>;
/**
 * Manual entity-text-refresh-sweep app-job payload. Supplied criteria narrow the selection together; omitted criteria fall back to the configured defaults.
 *
 * @openapiSchema EntityTextRefreshSweepRun
 * @endpoint POST /v1/jobs/entity-text-refresh-sweep/runs
 * @contractShape entity.text-refresh-sweep-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/text/EntityTextRefreshSweep.kt
 */
export declare const EntityTextRefreshSweepRunSchema: z.ZodType<EntityTextRefreshSweepRunDefinition>;
export type EntityTextRefreshSweepRun = z.infer<typeof EntityTextRefreshSweepRunSchema>;
export {};
//# sourceMappingURL=text-refresh-sweep-run.d.ts.map