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
export declare const NewsDeleteModeSchema: z.ZodEnum<{
    hard: "hard";
}>;
export type NewsDeleteMode = z.infer<typeof NewsDeleteModeSchema>;
//# sourceMappingURL=delete-mode.d.ts.map