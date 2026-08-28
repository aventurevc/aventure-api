// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JobStateSchema } from "../job/state.js";
const MediaRetrofitJobSchemaDefinition = z.object({
    /** Number of images checked */
    checked: z.int(),
    /** Whether the sweep reached the corpus end or requested quantity */
    complete: z.boolean(),
    /** Job creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Whether dangling references were only reported */
    dryRun: z.boolean(),
    /** Number of processing errors */
    errors: z.int(),
    /** Failure reason if the job failed */
    failureReason: z.string().nullish(),
    /** Unique job identifier */
    id: z.uuid(),
    /** Resume position the next chained segment starts from; null if done */
    nextCursor: z.string().nullish(),
    /** Cumulative images checked across the whole self-chained sweep */
    processed: z.int(),
    /** Number of dangling references remediated */
    remediated: z.int(),
    /** Current job state */
    state: JobStateSchema,
    /** Media domain retrofitted */
    targetDomain: z.string(),
    /** Job last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
    /** Number of transient variant transform failures */
    variantsFailed: z.int(),
    /** Number of variant objects generated */
    variantsGenerated: z.int(),
    /** Number of existing or terminally impossible variants skipped */
    variantsSkipped: z.int(),
});
/**
 * Media retrofit batch status snapshot
 *
 * @openapiSchema MediaRetrofitJob
 * @endpoint GET /v1/media/retrofit/jobs/{jobId}
 * @contractShape media.retrofit-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/MediaRetrofitRun.kt
 */
export const MediaRetrofitJobSchema = MediaRetrofitJobSchemaDefinition;
//# sourceMappingURL=retrofit-job.js.map