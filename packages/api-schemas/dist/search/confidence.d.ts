import { z } from "zod/v4";
/**
 * Confidence that the natural-language query was fully translated.
 *
 * @openapiSchema SearchConfidence
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema ContentSearchInterpretationSchema
 * @usedBySchema PersonSearchInterpretationSchema
 * @usedBySchema SearchInterpretationSchema
 * @contractShape search.confidence
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/search/NaturalSearch.kt
 */
export declare const SearchConfidenceSchema: z.ZodEnum<{
    HIGH: "HIGH";
    LOW: "LOW";
    MEDIUM: "MEDIUM";
}>;
export type SearchConfidence = z.infer<typeof SearchConfidenceSchema>;
//# sourceMappingURL=confidence.d.ts.map