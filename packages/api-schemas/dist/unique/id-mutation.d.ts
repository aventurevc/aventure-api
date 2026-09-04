import { z } from "zod/v4";
declare const UniqueIdMutationSchemaDefinition: z.ZodObject<{
    identifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    idType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type UniqueIdMutationDefinition = z.infer<typeof UniqueIdMutationSchemaDefinition>;
/**
 * Create or update payload for attaching an external identifier to an owner. For PATCH, omitted fields preserve their existing values and source may be explicitly cleared with null.
 *
 * @openapiSchema UniqueIdMutation
 * @endpoint POST /v1/entities/{entityId}/unique-ids
 * @endpoint POST /v1/people/{personId}/unique-ids
 * @endpoint PATCH /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint PATCH /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @contractShape unique.id-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/uniqueid/UniqueIdMutation.kt
 */
export declare const UniqueIdMutationSchema: z.ZodType<UniqueIdMutationDefinition>;
export type UniqueIdMutation = z.infer<typeof UniqueIdMutationSchema>;
export {};
//# sourceMappingURL=id-mutation.d.ts.map