// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityResearchSnippetMutationSchemaDefinition = z.object({
    /** Override suspected shell-strip rejection for intentional prose that looks like a money phrase without a currency marker, or that intentionally contains an escape sequence before '$'. Prefer fixing shell quotes or using --from-file; set true only after confirming the value is intentional. */
    allowSuspectedShellStrip: z.boolean().nullish(),
    /** Creator identifier for the snippet write. */
    creator: z.string().nullish(),
    /** Create defaults to true and appends a NEW current row, demoting the prior current row of this type to inactive history. Set false to write a non-current historical row. */
    isCurrent: z.boolean().nullish(),
    /** Primary row among current snippets of this type. Defaults to true when the row is current; promoting demotes the prior primary. */
    isPrimary: z.boolean().nullish(),
    /** Snippet body text. Recognized types enforce the length and paragraph rules returned by the types endpoint. Write '$' literally in currency amounts — escaped forms such as '\$95 million' are rejected as shell artifacts; in a shell, pass the text via ANSI-C $'...' quoting or --from-file. */
    text: z.string(),
    /** Research snippet type token. Use one listed by GET /v1/entities/research/snippets/types for validation and default visibility; an unrecognized token is saved hidden (visible=false) unless visible=true is sent. */
    textType: z.string(),
    /** Whether the snippet appears in default reads. Omit to use the type default (recognized types visible, unrecognized types hidden); set explicitly to override. */
    visible: z.boolean().nullish(),
});
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
export const EntityResearchSnippetMutationSchema = EntityResearchSnippetMutationSchemaDefinition;
//# sourceMappingURL=research-snippet-mutation.js.map