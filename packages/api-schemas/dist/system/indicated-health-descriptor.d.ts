import { z } from "zod/v4";
declare const IndicatedHealthDescriptorSchemaDefinition: z.ZodIntersection<z.ZodType<{
    description?: string | undefined;
    status?: string | undefined;
}, unknown, z.core.$ZodTypeInternals<{
    description?: string | undefined;
    status?: string | undefined;
}, unknown>>, z.ZodObject<{
    details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("../http/json-value.ts").JsonValue, unknown, z.core.$ZodTypeInternals<import("../http/json-value.ts").JsonValue, unknown>>>>;
}, z.core.$strip>>;
type IndicatedHealthDescriptorDefinition = z.infer<typeof IndicatedHealthDescriptorSchemaDefinition>;
/**
 * @openapiSchema IndicatedHealthDescriptor
 * @endpoint GET /health
 * @endpoint GET /health/liveness
 * @endpoint GET /health/readiness
 * @endpoint GET /live
 * @endpoint GET /ready
 * @contractShape system.indicated-health-descriptor
 * @contractRole canonical
 * @ownerModule system/indicated-health-descriptor.ts
 */
export declare const IndicatedHealthDescriptorSchema: z.ZodType<IndicatedHealthDescriptorDefinition>;
export type IndicatedHealthDescriptor = z.infer<typeof IndicatedHealthDescriptorSchema>;
export {};
//# sourceMappingURL=indicated-health-descriptor.d.ts.map