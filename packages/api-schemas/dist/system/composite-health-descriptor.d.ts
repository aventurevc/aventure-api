import { z } from "zod/v4";
declare const CompositeHealthDescriptorSchemaDefinition: z.ZodIntersection<z.ZodType<{
    description?: string | undefined;
    status?: string | undefined;
}, unknown, z.core.$ZodTypeInternals<{
    description?: string | undefined;
    status?: string | undefined;
}, unknown>>, z.ZodObject<{
    components: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<{
        description?: string | undefined;
        status?: string | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        description?: string | undefined;
        status?: string | undefined;
    }, unknown>>>>;
    details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<{
        description?: string | undefined;
        status?: string | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        description?: string | undefined;
        status?: string | undefined;
    }, unknown>>>>;
}, z.core.$strip>>;
type CompositeHealthDescriptorDefinition = z.infer<typeof CompositeHealthDescriptorSchemaDefinition>;
/**
 * @openapiSchema CompositeHealthDescriptor
 * @endpoint GET /health
 * @endpoint GET /health/liveness
 * @endpoint GET /health/readiness
 * @endpoint GET /live
 * @endpoint GET /ready
 * @usedBySchema SystemHealthDescriptorSchema
 * @contractShape system.composite-health-descriptor
 * @contractRole canonical
 * @ownerModule system/composite-health-descriptor.ts
 */
export declare const CompositeHealthDescriptorSchema: z.ZodType<CompositeHealthDescriptorDefinition>;
export type CompositeHealthDescriptor = z.infer<typeof CompositeHealthDescriptorSchema>;
export {};
//# sourceMappingURL=composite-health-descriptor.d.ts.map