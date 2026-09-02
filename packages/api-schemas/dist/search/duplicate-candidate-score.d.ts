import { z } from "zod/v4";
declare const SearchDuplicateCandidateScoreSchemaDefinition: z.ZodObject<{
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodUUID;
    isHidden: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodArray<z.ZodString>;
    score: z.ZodInt;
    showOnSitemap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>>>;
}, z.core.$strip>;
type SearchDuplicateCandidateScoreDefinition = z.infer<typeof SearchDuplicateCandidateScoreSchemaDefinition>;
/**
 * Duplicate candidate scoring result. Use id/name/slug/typeRecord/reason to decide whether the candidate is the requested record. score ranks review priority; it does not prove absence.
 *
 * @openapiSchema SearchDuplicateCandidateScore
 * @standardProblemResponse
 * @usedBySchema DuplicateCreateReviewSchema
 * @usedBySchema PageSearchDuplicateCandidateScoreSchema
 * @contractShape search.duplicate-candidate-score
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/search/DuplicateCandidateScore.kt
 */
export declare const SearchDuplicateCandidateScoreSchema: z.ZodType<SearchDuplicateCandidateScoreDefinition>;
export type SearchDuplicateCandidateScore = z.infer<typeof SearchDuplicateCandidateScoreSchema>;
export {};
//# sourceMappingURL=duplicate-candidate-score.d.ts.map