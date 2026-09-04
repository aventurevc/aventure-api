import { z } from "zod/v4";
declare const HarnessSessionEntrySchemaDefinition: z.ZodObject<{
    entry: z.ZodString;
    entryUuid: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
}, z.core.$strip>;
type HarnessSessionEntryDefinition = z.infer<typeof HarnessSessionEntrySchemaDefinition>;
/**
 * One opaque harness session entry to append
 *
 * @openapiSchema HarnessSessionEntryInput
 * @endpoint POST /v1/harness/sessions/{sessionId}/entries
 * @usedBySchema HarnessSessionAppendSchema
 * @contractShape harness.session-entry
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessSession.kt
 */
export declare const HarnessSessionEntrySchema: z.ZodType<HarnessSessionEntryDefinition>;
export type HarnessSessionEntry = z.infer<typeof HarnessSessionEntrySchema>;
export {};
//# sourceMappingURL=session-entry.d.ts.map