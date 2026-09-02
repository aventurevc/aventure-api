import { z } from "zod/v4";
declare const NewsAuthorLetterCountsSchemaDefinition: z.ZodObject<{
    counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
type NewsAuthorLetterCountsDefinition = z.infer<typeof NewsAuthorLetterCountsSchemaDefinition>;
/**
 * Per-letter visible news-author counts. Keys are uppercase A–Z initials of author display names; values are the visible author total for that initial.
 *
 * @openapiSchema NewsAuthorLetterCounts
 * @endpoint GET /v1/news/letter-counts
 * @contractShape news.author-letter-counts
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/NewsAuthorLetterCounts.kt
 */
export declare const NewsAuthorLetterCountsSchema: z.ZodType<NewsAuthorLetterCountsDefinition>;
export type NewsAuthorLetterCounts = z.infer<typeof NewsAuthorLetterCountsSchema>;
export {};
//# sourceMappingURL=author-letter-counts.d.ts.map