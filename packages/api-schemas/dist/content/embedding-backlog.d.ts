import { z } from "zod/v4";
declare const ContentEmbeddingBacklogSchemaDefinition: z.ZodObject<{
    activity: z.ZodArray<z.ZodType<{
        createdDailyAverage7d: number;
        createdLast24h: number;
        recalculatedDailyAverage7d: number;
        recalculatedLast15m: number;
        recalculatedLast24h: number;
        similarityRefreshedDailyAverage7d: number;
        similarityRefreshedLast15m: number;
        similarityRefreshedLast24h: number;
        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
    }, unknown, z.core.$ZodTypeInternals<{
        createdDailyAverage7d: number;
        createdLast24h: number;
        recalculatedDailyAverage7d: number;
        recalculatedLast15m: number;
        recalculatedLast24h: number;
        similarityRefreshedDailyAverage7d: number;
        similarityRefreshedLast15m: number;
        similarityRefreshedLast24h: number;
        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
    }, unknown>>>;
    batchSize: z.ZodInt;
    clusterMode: z.ZodEnum<{
        DRAIN_ONLY: "DRAIN_ONLY";
        EMERGENCY_STOP: "EMERGENCY_STOP";
        PAUSED: "PAUSED";
        RUNNING: "RUNNING";
    }>;
    configuredDefaultEnabled: z.ZodBoolean;
    maxConcurrent: z.ZodInt;
    outstanding: z.ZodArray<z.ZodType<{
        missingCount: number;
        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        missingCount: number;
        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }, unknown>>>;
    ownerReconcileInterval: z.ZodString;
    ownerReconcileScheduled: z.ZodBoolean;
    pendingSize: z.ZodInt;
    pendingTargetSize: z.ZodInt;
    queuedWorkSize: z.ZodInt;
    reconcileInterval: z.ZodString;
    reconcileScheduled: z.ZodBoolean;
    refreshEnabled: z.ZodBoolean;
    updatedOwnerScanEnabled: z.ZodBoolean;
    work: z.ZodArray<z.ZodType<{
        pendingCount: number;
        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        workType: "previousEmbedding" | "staleSimilarity";
    }, unknown, z.core.$ZodTypeInternals<{
        pendingCount: number;
        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        workType: "previousEmbedding" | "staleSimilarity";
    }, unknown>>>;
}, z.core.$strip>;
type ContentEmbeddingBacklogDefinition = z.infer<typeof ContentEmbeddingBacklogSchemaDefinition>;
/**
 * Content embedding primary and owner reconciliation status, updated-owner scan state, refresh-work counts, and recent owner embedding activity.
 *
 * @openapiSchema ContentEmbeddingBacklog
 * @endpoint GET /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog/mode
 * @endpoint DELETE /v1/content/embedding/backlog
 * @contractShape content.embedding-backlog
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingBacklog.kt
 */
export declare const ContentEmbeddingBacklogSchema: z.ZodType<ContentEmbeddingBacklogDefinition>;
export type ContentEmbeddingBacklog = z.infer<typeof ContentEmbeddingBacklogSchema>;
export {};
//# sourceMappingURL=embedding-backlog.d.ts.map