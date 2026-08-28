import { z } from "zod/v4";
declare const EntityTextMutationSchemaDefinition: z.ZodObject<{
    allowPublicEntityTextWordLimitOverride: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    allowSuspectedShellStrip: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    textName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    textType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityTextMutationDefinition = z.infer<typeof EntityTextMutationSchemaDefinition>;
/**
 * Create or update one entity/person text row.
 *
 * @openapiSchema EntityTextMutation
 * @endpoint POST /v1/entities/{entityId}/texts
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/people/{personId}/texts
 * @endpoint PATCH /v1/entities/{entityId}/texts/{textId}
 * @endpoint PATCH /v1/people/{personId}/texts/{textId}
 * @endpoint PUT /v1/entities/{entityId}/texts/{textId}
 * @endpoint PUT /v1/people/{personId}/texts/{textId}
 * @usedBySchema EntityFullMutationSchema
 * @contractShape entity.text-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/text/Text.kt
 */
export declare const EntityTextMutationSchema: z.ZodType<EntityTextMutationDefinition>;
export type EntityTextMutation = z.infer<typeof EntityTextMutationSchema>;
export {};
//# sourceMappingURL=text-mutation.d.ts.map