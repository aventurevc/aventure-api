import { z } from "zod/v4";
declare const HealthDescriptorSchemaDefinition: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
type HealthDescriptorDefinition = z.infer<typeof HealthDescriptorSchemaDefinition>;
/**
 * @openapiSchema HealthDescriptor
 * @endpoint GET /health
 * @endpoint GET /health/liveness
 * @endpoint GET /health/readiness
 * @endpoint GET /live
 * @endpoint GET /ready
 * @usedBySchema CompositeHealthDescriptorSchema
 * @usedBySchema IndicatedHealthDescriptorSchema
 * @contractShape system.health-descriptor
 * @contractRole canonical
 * @ownerModule system/health-descriptor.ts
 */
export declare const HealthDescriptorSchema: z.ZodType<HealthDescriptorDefinition>;
export type HealthDescriptor = z.infer<typeof HealthDescriptorSchema>;
export {};
//# sourceMappingURL=health-descriptor.d.ts.map