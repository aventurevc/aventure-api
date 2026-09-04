import { z } from "zod/v4";
declare const HarnessSessionAppendSchemaDefinition: z.ZodObject<{
    entry: z.ZodArray<z.ZodType<{
        entry: string;
        entryUuid?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        entry: string;
        entryUuid?: string | null | undefined;
    }, unknown>>>;
    subpath: z.ZodString;
}, z.core.$strip>;
type HarnessSessionAppendDefinition = z.infer<typeof HarnessSessionAppendSchemaDefinition>;
/**
 * Append entries to a run's harness session
 *
 * @openapiSchema HarnessSessionAppend
 * @endpoint POST /v1/harness/sessions/{sessionId}/entries
 * @contractShape harness.session-append
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessSession.kt
 */
export declare const HarnessSessionAppendSchema: z.ZodType<HarnessSessionAppendDefinition>;
export type HarnessSessionAppend = z.infer<typeof HarnessSessionAppendSchema>;
export {};
//# sourceMappingURL=session-append.d.ts.map