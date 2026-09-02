import { z } from "zod/v4";
declare const SystemHealthDescriptorSchemaDefinition: z.ZodIntersection<z.ZodType<{
    description?: string | undefined;
    status?: string | undefined;
} & {
    components?: Record<string, {
        description?: string | undefined;
        status?: string | undefined;
    }> | undefined;
    details?: Record<string, {
        description?: string | undefined;
        status?: string | undefined;
    }> | undefined;
}, unknown, z.core.$ZodTypeInternals<{
    description?: string | undefined;
    status?: string | undefined;
} & {
    components?: Record<string, {
        description?: string | undefined;
        status?: string | undefined;
    }> | undefined;
    details?: Record<string, {
        description?: string | undefined;
        status?: string | undefined;
    }> | undefined;
}, unknown>>, z.ZodObject<{
    groups: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>;
type SystemHealthDescriptorDefinition = z.infer<typeof SystemHealthDescriptorSchemaDefinition>;
/**
 * @openapiSchema SystemHealthDescriptor
 * @endpoint GET /health
 * @endpoint GET /health/liveness
 * @endpoint GET /health/readiness
 * @endpoint GET /live
 * @endpoint GET /ready
 * @contractShape system.system-health-descriptor
 * @contractRole canonical
 * @ownerModule system/system-health-descriptor.ts
 */
export declare const SystemHealthDescriptorSchema: z.ZodType<SystemHealthDescriptorDefinition>;
export type SystemHealthDescriptor = z.infer<typeof SystemHealthDescriptorSchema>;
export {};
//# sourceMappingURL=system-health-descriptor.d.ts.map