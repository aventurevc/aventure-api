import { z } from "zod/v4";
declare const SentryBreadcrumbSchemaDefinition: z.ZodObject<{
    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    data: z.ZodRecord<z.ZodString, z.ZodString>;
    level: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SentryBreadcrumbDefinition = z.infer<typeof SentryBreadcrumbSchemaDefinition>;
/**
 * Sentry breadcrumb event
 *
 * @openapiSchema SentryBreadcrumb
 * @endpoint GET /v1/sentry/issues/{issueId}/event
 * @usedBySchema SentryEventDetailSchema
 * @contractShape sentry.breadcrumb
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryBreadcrumb.kt
 */
export declare const SentryBreadcrumbSchema: z.ZodType<SentryBreadcrumbDefinition>;
export type SentryBreadcrumb = z.infer<typeof SentryBreadcrumbSchema>;
export {};
//# sourceMappingURL=breadcrumb.d.ts.map