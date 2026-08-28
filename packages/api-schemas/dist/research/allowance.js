// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ResearchAllowanceSchemaDefinition = z.object({
    limit: z.int(),
    remaining: z.int(),
    resetAt: z.iso.datetime({ offset: true }),
    used: z.int(),
});
/**
 * @openapiSchema ResearchAllowance
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema ResearchAllowanceUsageSchema
 * @contractShape research.allowance
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/billing/ResearchAllowance.kt
 */
export const ResearchAllowanceSchema = ResearchAllowanceSchemaDefinition;
//# sourceMappingURL=allowance.js.map