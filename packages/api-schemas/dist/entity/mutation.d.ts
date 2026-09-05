import { z } from "zod/v4";
/**
 * Create or update core entity fields: names, slug, type, operating status, visibility, currency, founding year, and aliases.
 *
 * @openapiSchema EntityMutation
 * @endpoint POST /v1/entities/{entityId}/operating-status
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/merge
 * @endpoint PATCH /v1/entities/{entityId}/operating-status
 * @endpoint PATCH /v1/entities/{entityId}/type-record
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/operating-status
 * @endpoint PUT /v1/entities/detail
 * @usedBySchema EntityCreateSchema
 * @usedBySchema EntityMergeSchema
 * @contractShape entity.mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityMutation.kt
 */
export declare const EntityMutationSchema: z.ZodObject<{
    allowSuspectedShellStrip: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    nameAlias: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "alternativeDba" | "relatedLegal" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "alternativeDba" | "relatedLegal" | null | undefined;
    }, unknown>>>>>;
    nameBrand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Acquired: "Acquired";
        "Acquired Subsidiary": "Acquired Subsidiary";
        Closed: "Closed";
        "Closed (Acquihire)": "Closed (Acquihire)";
        Inactive: "Inactive";
        Operating: "Operating";
    }>>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        isFeatured: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isHidden: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isVerified: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        showOnSitemap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>>>;
    typeRecord: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type EntityMutation = z.infer<typeof EntityMutationSchema>;
//# sourceMappingURL=mutation.d.ts.map