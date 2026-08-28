import { z } from "zod/v4";
/**
 * Flat entity core record — identity, naming, status, image, and source metadata. An entity is our umbrella record for organizations such as companies, funds, investment firms and investors, accelerators, nonprofits, and government agencies, plus products and services connected to those organizations. Returned directly by thin-mode (?mode=thin) and alphabetical (?letter=X) list endpoints. Nested as .core inside EntityList for default list reads and EntityDetail for detail reads.
 *
 * @openapiSchema Entity
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/people
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/duplicate-check
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/news/{id}/related-companies
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/{entityId}/acquisitions
 * @endpoint POST /v1/entities/{entityId}/relationships
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/fundraise-rounds
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/duplicate-check
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/relationships/join
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PATCH /v1/entities/relationships/{relationshipId}
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PUT /v1/people/detail
 * @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint DELETE /v1/entities/relationships/{relationshipId}
 * @usedBySchema EntityAcceleratorParticipationSchema
 * @usedBySchema EntityAcquisitionSchema
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityFundraiseTransactionEntitySchema
 * @usedBySchema EntityListSchema
 * @usedBySchema EntityRelationshipSchema
 * @usedBySchema PageEntitySchema
 * @usedBySchema PersonGraphCoInvestorSchema
 * @usedBySchema PersonGraphRolePeerSchema
 * @usedBySchema PersonInvestedCompanySchema
 * @contractShape entity.entity
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/Entity.kt
 */
export declare const EntitySchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    id: z.ZodUUID;
    image: z.ZodType<{
        isMonogram: boolean;
        logo?: string | null | undefined;
        logoSquare?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        isMonogram: boolean;
        logo?: string | null | undefined;
        logoSquare?: string | null | undefined;
    }, unknown>>;
    lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    nameAlias: z.ZodArray<z.ZodType<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "alternativeDba" | "relatedLegal" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "alternativeDba" | "relatedLegal" | null | undefined;
    }, unknown>>>;
    nameBrand: z.ZodString;
    nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sitemap: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        hasAnalysis: z.ZodBoolean;
        hasEmployees: z.ZodBoolean;
        hasFundraising: z.ZodBoolean;
        hasNews: z.ZodBoolean;
        productServiceSlug: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    slug: z.ZodString;
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
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
export type Entity = z.infer<typeof EntitySchema>;
//# sourceMappingURL=entity.d.ts.map