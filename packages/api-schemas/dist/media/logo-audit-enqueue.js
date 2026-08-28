// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const MediaLogoAuditEnqueueSchemaDefinition = z.object({
    jobId: z.uuid(),
});
/**
 * Response after enqueuing a logo audit job
 *
 * @openapiSchema MediaLogoAuditEnqueue
 * @endpoint POST /v1/media/logo-audit/jobs
 * @contractShape media.logo-audit-enqueue
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/LogoAuditRun.kt
 */
export const MediaLogoAuditEnqueueSchema = MediaLogoAuditEnqueueSchemaDefinition;
//# sourceMappingURL=logo-audit-enqueue.js.map