import { z } from "zod/v4";
declare const EntityMergeSchemaDefinition: z.ZodObject<{
    createSlugRedirect: z.ZodBoolean;
    deleteMode: z.ZodEnum<{
        hard: "hard";
        soft: "soft";
    }>;
    foreignKeyRowsRepointed: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    loserId: z.ZodUUID;
    loserUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slugRedirectId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    survivor: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
    survivorId: z.ZodUUID;
    survivorUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityMergeDefinition = z.infer<typeof EntityMergeSchemaDefinition>;
/**
 * Merge two duplicate entities into one survivor. Known duplicate fundraise and same-month latest-valuation collisions are handled before foreign-key repointing.
 *
 * @openapiSchema EntityMerge
 * @endpoint POST /v1/entities/merge
 * @contractShape entity.merge
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityMerge.kt
 */
export declare const EntityMergeSchema: z.ZodType<EntityMergeDefinition>;
export type EntityMerge = z.infer<typeof EntityMergeSchema>;
export {};
//# sourceMappingURL=merge.d.ts.map