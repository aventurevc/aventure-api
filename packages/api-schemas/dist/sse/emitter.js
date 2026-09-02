// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SseEmitterSchemaDefinition = z.object({
    timeout: z.number().int().optional(),
});
/**
 * @openapiSchema SseEmitter
 * @endpoint GET /v1/jobs/runs/{runId}/stream
 * @contractShape sse.emitter
 * @contractRole canonical
 * @ownerModule sse/emitter.ts
 */
export const SseEmitterSchema = SseEmitterSchemaDefinition;
//# sourceMappingURL=emitter.js.map