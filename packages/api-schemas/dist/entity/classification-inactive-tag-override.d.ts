import { z } from "zod/v4";
/**
 * Caller-chosen handling when the canonical classification value exists but is dormant.
 *
 * @openapiSchema EntityClassificationInactiveTagOverride
 * @standardProblemResponse
 * @usedBySchema ClassificationInactiveTagDetailsSchema
 * @usedBySchema EntityClassificationMutationSchema
 * @contractShape entity.classification-inactive-tag-override
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/EntityClassification.kt
 */
export declare const EntityClassificationInactiveTagOverrideSchema: z.ZodEnum<{
    ATTACH_INACTIVE: "ATTACH_INACTIVE";
    REACTIVATE: "REACTIVATE";
}>;
export type EntityClassificationInactiveTagOverride = z.infer<typeof EntityClassificationInactiveTagOverrideSchema>;
//# sourceMappingURL=classification-inactive-tag-override.d.ts.map