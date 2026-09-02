import { z } from "zod/v4";
declare const SseEmitterSchemaDefinition: z.ZodObject<{
    timeout: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
type SseEmitterDefinition = z.infer<typeof SseEmitterSchemaDefinition>;
/**
 * @openapiSchema SseEmitter
 * @endpoint GET /v1/jobs/runs/{runId}/stream
 * @contractShape sse.emitter
 * @contractRole canonical
 * @ownerModule sse/emitter.ts
 */
export declare const SseEmitterSchema: z.ZodType<SseEmitterDefinition>;
export type SseEmitter = z.infer<typeof SseEmitterSchema>;
export {};
//# sourceMappingURL=emitter.d.ts.map