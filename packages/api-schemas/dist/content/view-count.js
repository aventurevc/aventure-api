// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ContentViewCountSchemaDefinition = z.object({
    viewCount: z.int(),
});
/**
 * Updated content view count
 *
 * @openapiSchema ContentViewCount
 * @endpoint POST /v1/app/blog/articles/{slug}/view
 * @endpoint POST /v1/app/pages/{slug}/view
 * @contractShape content.view-count
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentViewCount.kt
 */
export const ContentViewCountSchema = ContentViewCountSchemaDefinition;
//# sourceMappingURL=view-count.js.map