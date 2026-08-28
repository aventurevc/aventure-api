import { z } from "zod/v4";
declare const EntityResearchDetailMutationSchemaDefinition: z.ZodObject<{
    asOfDate: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    creator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dataConfidence: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
    }>>>;
    discreteValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    textValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    typeResearchDetail: z.ZodString;
    valueResearchDetail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityResearchDetailMutationDefinition = z.infer<typeof EntityResearchDetailMutationSchemaDefinition>;
/**
 * Request body for create/replace research detail writes. Use typeResearchDetail to select the contract, then send the matching value field for that contract.
 *
 * @openapiSchema EntityResearchDetailMutation
 * @endpoint POST /v1/entities/{entityId}/research/details
 * @endpoint POST /v1/entities/detail/full
 * @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
 * @usedBySchema EntityFullMutationSchema
 * @contractShape entity.research-detail-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityResearchDetailMutation.kt
 */
export declare const EntityResearchDetailMutationSchema: z.ZodType<EntityResearchDetailMutationDefinition>;
export type EntityResearchDetailMutation = z.infer<typeof EntityResearchDetailMutationSchema>;
export {};
//# sourceMappingURL=research-detail-mutation.d.ts.map