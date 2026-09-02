import { z } from "zod/v4";
declare const SentryTagSchemaDefinition: z.ZodObject<{
    tagKey: z.ZodString;
    tagValue: z.ZodString;
}, z.core.$strip>;
type SentryTagDefinition = z.infer<typeof SentryTagSchemaDefinition>;
/**
 * Sentry tag key/value pair
 *
 * @openapiSchema SentryTag
 * @endpoint GET /v1/sentry/issues/{issueId}/event
 * @usedBySchema SentryEventDetailSchema
 * @contractShape sentry.tag
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryTag.kt
 */
export declare const SentryTagSchema: z.ZodType<SentryTagDefinition>;
export type SentryTag = z.infer<typeof SentryTagSchema>;
export {};
//# sourceMappingURL=tag.d.ts.map