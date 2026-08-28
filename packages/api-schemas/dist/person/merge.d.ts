import { z } from "zod/v4";
declare const PersonMergeSchemaDefinition: z.ZodObject<{
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
        gender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            picture: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        nameFirst: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nameLast: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nameMiddle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        source: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            workflowStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        status: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            isHidden: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            showOnSitemap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, z.core.$strip>>>;
        suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    survivorId: z.ZodUUID;
    survivorUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type PersonMergeDefinition = z.infer<typeof PersonMergeSchemaDefinition>;
/**
 * Atomic two-person merge action
 *
 * @openapiSchema PersonMerge
 * @endpoint POST /v1/people/merge
 * @contractShape person.merge
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonMerge.kt
 */
export declare const PersonMergeSchema: z.ZodType<PersonMergeDefinition>;
export type PersonMerge = z.infer<typeof PersonMergeSchema>;
export {};
//# sourceMappingURL=merge.d.ts.map