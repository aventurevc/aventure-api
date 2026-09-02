// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Publication state for blog articles and pages
 *
 * @openapiSchema ContentStatus
 * @endpoint POST /v1/app/blog/articles
 * @endpoint POST /v1/app/pages
 * @endpoint PATCH /v1/app/blog/articles/{id}/status
 * @endpoint PATCH /v1/app/pages/{id}/status
 * @endpoint PUT /v1/app/blog/articles/{id}
 * @endpoint PUT /v1/app/blog/articles/by-slug/{slug}
 * @endpoint PUT /v1/app/pages/{id}
 * @endpoint PUT /v1/app/pages/by-slug/{slug}
 * @usedBySchema ContentMutationSchema
 * @usedBySchema ContentStatusMutationSchema
 * @contractShape content.status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentStatus.kt
 */
export const ContentStatusSchema = z.enum(["published", "featured", "draft"]);
//# sourceMappingURL=status.js.map