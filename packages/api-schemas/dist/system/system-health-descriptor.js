// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { CompositeHealthDescriptorSchema } from "./composite-health-descriptor.js";
const SystemHealthDescriptorSchemaDefinition = z.intersection(CompositeHealthDescriptorSchema, z.object({
    groups: z.array(z.string()).optional(),
}));
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
export const SystemHealthDescriptorSchema = SystemHealthDescriptorSchemaDefinition;
//# sourceMappingURL=system-health-descriptor.js.map