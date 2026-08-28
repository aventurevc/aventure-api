// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JobStateSchema } from "../job/state.js";
const MediaLogoAuditJobSchemaDefinition = z.object({
    /** Number of logos checked */
    checked: z.int(),
    /** Job creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Number of logos deleted */
    deleted: z.int(),
    /** Delete mode: soft or hard */
    deleteMode: z.string(),
    /** Whether this is a dry run (no deletions) */
    dryRun: z.boolean(),
    /** Number of processing errors */
    errors: z.int(),
    /** Failure reason if job failed */
    failureReason: z.string().nullish(),
    /** Unique job identifier */
    id: z.uuid(),
    /** Number of logos rejected */
    rejected: z.int(),
    /** Whether monogram rejection is enabled */
    rejectMonogram: z.boolean(),
    /** Current job state */
    state: JobStateSchema,
    /** Job last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Logo audit job status snapshot
 *
 * @openapiSchema MediaLogoAuditJob
 * @endpoint GET /v1/media/logo-audit/jobs
 * @endpoint GET /v1/media/logo-audit/jobs/{jobId}
 * @usedBySchema PageMediaLogoAuditJobSchema
 * @contractShape media.logo-audit-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/LogoAuditRun.kt
 */
export const MediaLogoAuditJobSchema = MediaLogoAuditJobSchemaDefinition;
//# sourceMappingURL=logo-audit-job.js.map