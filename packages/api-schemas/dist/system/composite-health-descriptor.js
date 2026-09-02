// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HealthDescriptorSchema } from "./health-descriptor.js";
const CompositeHealthDescriptorSchemaDefinition = z.intersection(HealthDescriptorSchema, z.object({
    components: z.record(z.string(), HealthDescriptorSchema).optional(),
    details: z.record(z.string(), HealthDescriptorSchema).optional(),
}));
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
export const CompositeHealthDescriptorSchema = CompositeHealthDescriptorSchemaDefinition;
//# sourceMappingURL=composite-health-descriptor.js.map