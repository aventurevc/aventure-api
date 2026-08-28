import { z } from "zod/v4";
declare const MediaLogoAuditEnqueueSchemaDefinition: z.ZodObject<{
    jobId: z.ZodUUID;
}, z.core.$strip>;
type MediaLogoAuditEnqueueDefinition = z.infer<typeof MediaLogoAuditEnqueueSchemaDefinition>;
/**
 * Response after enqueuing a logo audit job
 *
 * @openapiSchema MediaLogoAuditEnqueue
 * @endpoint POST /v1/media/logo-audit/jobs
 * @contractShape media.logo-audit-enqueue
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/LogoAuditRun.kt
 */
export declare const MediaLogoAuditEnqueueSchema: z.ZodType<MediaLogoAuditEnqueueDefinition>;
export type MediaLogoAuditEnqueue = z.infer<typeof MediaLogoAuditEnqueueSchema>;
export {};
//# sourceMappingURL=logo-audit-enqueue.d.ts.map