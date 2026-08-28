// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsLinkerCandidateSchemaDefinition = z.object({
    author: z.string().nullish(),
    category: z.string().nullish(),
    content: z.string().nullish(),
    entityMatchType: z.array(z.string()),
    excerpt: z.string().nullish(),
    externalId: z.string().nullish(),
    /** Type-safe identifier for news articles */
    id: z.int(),
    linkerSentinelPresent: z.boolean(),
    newsImageThumbnail: z.string().nullish(),
    newsUrlOriginal: z.string().nullish(),
    personMatchType: z.array(z.string()),
    publishedDate: z.iso.datetime({ offset: true }),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    source: z.string(),
    title: z.string(),
});
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
export const NewsLinkerCandidateSchema = NewsLinkerCandidateSchemaDefinition;
//# sourceMappingURL=linker-candidate.js.map