import { z } from "zod/v4";
/**
 * Provenance origin for a similar-person result row.
 *
 * @openapiSchema PersonSimilarityOrigin
 * @endpoint GET /v1/people/detail/similar
 * @usedBySchema PersonSimilarityContextSchema
 * @contractShape person.similarity-origin
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonSimilarity.kt
 */
export declare const PersonSimilarityOriginSchema: z.ZodEnum<{
    live: "live";
    precomputed: "precomputed";
}>;
export type PersonSimilarityOrigin = z.infer<typeof PersonSimilarityOriginSchema>;
//# sourceMappingURL=similarity-origin.d.ts.map