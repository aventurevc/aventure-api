// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Supported news deletion behavior.
 *
 * @openapiSchema NewsDeleteMode
 * @endpoint DELETE /v1/entities/detail/news/{newsId}
 * @endpoint DELETE /v1/news/detail
 * @endpoint DELETE /v1/people/detail/news/{newsId}
 * @contractShape news.delete-mode
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/adapters/inbound/web/news/controller/SharedNewsController.kt
 */
export const NewsDeleteModeSchema = z.enum(["hard"]);
//# sourceMappingURL=delete-mode.js.map