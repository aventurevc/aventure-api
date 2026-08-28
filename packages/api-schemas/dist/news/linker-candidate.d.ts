import { z } from "zod/v4";
declare const NewsLinkerCandidateSchemaDefinition: z.ZodObject<{
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entityMatchType: z.ZodArray<z.ZodString>;
    excerpt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodInt;
    linkerSentinelPresent: z.ZodBoolean;
    newsImageThumbnail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newsUrlOriginal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personMatchType: z.ZodArray<z.ZodString>;
    publishedDate: z.ZodISODateTime;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodString;
    title: z.ZodString;
}, z.core.$strip>;
type NewsLinkerCandidateDefinition = z.infer<typeof NewsLinkerCandidateSchemaDefinition>;
/**
 * Unjoined news article surfaced to linker - sentinel flag signals prior matching attempts
 *
 * @openapiSchema NewsLinkerCandidate
 * @endpoint GET /v1/news/linker/candidates
 * @usedBySchema PageNewsLinkerCandidateSchema
 * @contractShape news.linker-candidate
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/NewsLinkerCandidate.kt
 */
export declare const NewsLinkerCandidateSchema: z.ZodType<NewsLinkerCandidateDefinition>;
export type NewsLinkerCandidate = z.infer<typeof NewsLinkerCandidateSchema>;
export {};
//# sourceMappingURL=linker-candidate.d.ts.map