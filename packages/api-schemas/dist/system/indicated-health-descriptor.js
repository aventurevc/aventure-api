// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JsonValueSchema } from "../http/json-value.js";
import { HealthDescriptorSchema } from "./health-descriptor.js";
const IndicatedHealthDescriptorSchemaDefinition = z.intersection(HealthDescriptorSchema, z.object({
    details: z.record(z.string(), JsonValueSchema).optional(),
}));
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
export const IndicatedHealthDescriptorSchema = IndicatedHealthDescriptorSchemaDefinition;
//# sourceMappingURL=indicated-health-descriptor.js.map