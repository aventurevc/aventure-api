import { z } from "zod/v4";
declare const EntityResearchSnippetMutationSchemaDefinition: z.ZodObject<{
    allowSuspectedShellStrip: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    creator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    text: z.ZodString;
    textType: z.ZodString;
    visible: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type EntityResearchSnippetMutationDefinition = z.infer<typeof EntityResearchSnippetMutationSchemaDefinition>;
/**
 * Snippet text, type token, and optional attribution fields for create/replace.
 *
 * @openapiSchema EntityResearchSnippetMutation
 * @endpoint POST /v1/entities/{entityId}/research/snippets
 * @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
 * @contractShape entity.research-snippet-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityResearchSnippet.kt
 */
export declare const EntityResearchSnippetMutationSchema: z.ZodType<EntityResearchSnippetMutationDefinition>;
export type EntityResearchSnippetMutation = z.infer<typeof EntityResearchSnippetMutationSchema>;
export {};
//# sourceMappingURL=research-snippet-mutation.d.ts.map