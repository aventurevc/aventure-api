import { z } from "zod/v4";
declare const DeployStatusSchemaDefinition: z.ZodObject<{
    currentImage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currentSource: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currentStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currentTag: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    previousImage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type DeployStatusDefinition = z.infer<typeof DeployStatusSchemaDefinition>;
/**
 * Live platform state for a deploy target
 *
 * @openapiSchema DeployStatus
 * @endpoint GET /v1/deploy/targets
 * @usedBySchema DeployTargetSchema
 * @contractShape deploy.status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export declare const DeployStatusSchema: z.ZodType<DeployStatusDefinition>;
export type DeployStatus = z.infer<typeof DeployStatusSchema>;
export {};
//# sourceMappingURL=status.d.ts.map