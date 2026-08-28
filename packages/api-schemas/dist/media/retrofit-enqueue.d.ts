import { z } from "zod/v4";
declare const MediaRetrofitEnqueueSchemaDefinition: z.ZodObject<{
    jobId: z.ZodUUID;
}, z.core.$strip>;
type MediaRetrofitEnqueueDefinition = z.infer<typeof MediaRetrofitEnqueueSchemaDefinition>;
/**
 * Response after enqueuing a media retrofit batch
 *
 * @openapiSchema MediaRetrofitEnqueue
 * @endpoint POST /v1/media/retrofit/jobs
 * @contractShape media.retrofit-enqueue
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/MediaRetrofitRun.kt
 */
export declare const MediaRetrofitEnqueueSchema: z.ZodType<MediaRetrofitEnqueueDefinition>;
export type MediaRetrofitEnqueue = z.infer<typeof MediaRetrofitEnqueueSchema>;
export {};
//# sourceMappingURL=retrofit-enqueue.d.ts.map