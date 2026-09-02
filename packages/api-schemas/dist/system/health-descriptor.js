// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HealthDescriptorSchemaDefinition = z.object({
    description: z.string().optional(),
    status: z.string().optional(),
});
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
export const HealthDescriptorSchema = HealthDescriptorSchemaDefinition;
//# sourceMappingURL=health-descriptor.js.map