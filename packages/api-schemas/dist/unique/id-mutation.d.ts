import { z } from "zod/v4";
declare const UniqueIdMutationSchemaDefinition: z.ZodObject<{
    identifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    idType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type UniqueIdMutationDefinition = z.infer<typeof UniqueIdMutationSchemaDefinition>;
/**
 * Create payload for attaching an external identifier to an owner.
 *
 * @openapiSchema UniqueIdMutation
 * @endpoint POST /v1/entities/{entityId}/unique-ids
 * @endpoint POST /v1/people/{personId}/unique-ids
 * @contractShape unique.id-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/uniqueid/UniqueIdMutation.kt
 */
export declare const UniqueIdMutationSchema: z.ZodType<UniqueIdMutationDefinition>;
export type UniqueIdMutation = z.infer<typeof UniqueIdMutationSchema>;
export {};
//# sourceMappingURL=id-mutation.d.ts.map