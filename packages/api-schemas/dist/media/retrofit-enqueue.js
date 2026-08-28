// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const MediaRetrofitEnqueueSchemaDefinition = z.object({
    jobId: z.uuid(),
});
/**
 * Response after enqueuing a media retrofit batch
 *
 * @openapiSchema MediaRetrofitEnqueue
 * @endpoint POST /v1/media/retrofit/jobs
 * @contractShape media.retrofit-enqueue
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/MediaRetrofitRun.kt
 */
export const MediaRetrofitEnqueueSchema = MediaRetrofitEnqueueSchemaDefinition;
//# sourceMappingURL=retrofit-enqueue.js.map