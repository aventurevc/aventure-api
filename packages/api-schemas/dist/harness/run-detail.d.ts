import { z } from "zod/v4";
declare const HarnessRunDetailSchemaDefinition: z.ZodObject<{
    entity: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        id: z.ZodUUID;
        image: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown>>;
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodType<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown>>>;
        nameBrand: z.ZodString;
        nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sitemap: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            hasAnalysis: z.ZodBoolean;
            hasEmployees: z.ZodBoolean;
            hasFundraising: z.ZodBoolean;
            hasNews: z.ZodBoolean;
            productServiceSlug: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        slug: z.ZodString;
        source: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        status: z.ZodOptional<z.ZodObject<{
            isFeatured: z.ZodBoolean;
            isHidden: z.ZodBoolean;
            isVerified: z.ZodBoolean;
            showOnSitemap: z.ZodBoolean;
        }, z.core.$strip>>;
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            "Business Line": "Business Line";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            Organization: "Organization";
            Product: "Product";
            Service: "Service";
        }>>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    latestStatus: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        complete: z.ZodBoolean;
        entitySlug: z.ZodNullable<z.ZodString>;
        gateRemaining: z.ZodArray<z.ZodString>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        whatElseRemaining: z.ZodArray<z.ZodString>;
        writeThisIteration: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    provider: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        id: z.ZodUUID;
        image: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown>>;
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodType<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown>>>;
        nameBrand: z.ZodString;
        nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sitemap: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            hasAnalysis: z.ZodBoolean;
            hasEmployees: z.ZodBoolean;
            hasFundraising: z.ZodBoolean;
            hasNews: z.ZodBoolean;
            productServiceSlug: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        slug: z.ZodString;
        source: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        status: z.ZodOptional<z.ZodObject<{
            isFeatured: z.ZodBoolean;
            isHidden: z.ZodBoolean;
            isVerified: z.ZodBoolean;
            showOnSitemap: z.ZodBoolean;
        }, z.core.$strip>>;
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            "Business Line": "Business Line";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            Organization: "Organization";
            Product: "Product";
            Service: "Service";
        }>>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    run: z.ZodType<{
        attempt: number;
        chainRunId?: string | null | undefined;
        createdAt: string;
        entitySlug?: string | null | undefined;
        environment: "development" | "production" | "staging" | "unassigned";
        error?: string | null | undefined;
        failureClass?: string | null | undefined;
        finishedAt?: string | null | undefined;
        hasSourceDocument: boolean;
        id: string;
        idempotencyKey?: string | null | undefined;
        instructionPointer?: string | null | undefined;
        iteration: number;
        latestStatus?: string | null | undefined;
        lockedAt?: string | null | undefined;
        lockedBy?: string | null | undefined;
        maxIteration: number;
        maxScoutConcurrent: number;
        mode: "COMPREHENSIVE" | "INDIVIDUAL";
        model: string;
        nextAttemptAt?: string | null | undefined;
        ownerUserId?: string | null | undefined;
        resumeSafeUntil?: string | null | undefined;
        sessionResume?: string | null | undefined;
        sourceDocumentId?: string | null | undefined;
        startedAt?: string | null | undefined;
        status: "completed" | "failed" | "queued" | "running" | "stopped";
        subagentModel: string;
        taskKey?: string | null | undefined;
        taskPhase?: "FINAL" | "PRIMARY" | null | undefined;
        taskPresetKey?: string[] | null | undefined;
        type: "ENRICHMENT" | "TASK";
        updatedAt: string;
        url: string;
        usageSnapshot?: string | null | undefined;
        userPrompt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        attempt: number;
        chainRunId?: string | null | undefined;
        createdAt: string;
        entitySlug?: string | null | undefined;
        environment: "development" | "production" | "staging" | "unassigned";
        error?: string | null | undefined;
        failureClass?: string | null | undefined;
        finishedAt?: string | null | undefined;
        hasSourceDocument: boolean;
        id: string;
        idempotencyKey?: string | null | undefined;
        instructionPointer?: string | null | undefined;
        iteration: number;
        latestStatus?: string | null | undefined;
        lockedAt?: string | null | undefined;
        lockedBy?: string | null | undefined;
        maxIteration: number;
        maxScoutConcurrent: number;
        mode: "COMPREHENSIVE" | "INDIVIDUAL";
        model: string;
        nextAttemptAt?: string | null | undefined;
        ownerUserId?: string | null | undefined;
        resumeSafeUntil?: string | null | undefined;
        sessionResume?: string | null | undefined;
        sourceDocumentId?: string | null | undefined;
        startedAt?: string | null | undefined;
        status: "completed" | "failed" | "queued" | "running" | "stopped";
        subagentModel: string;
        taskKey?: string | null | undefined;
        taskPhase?: "FINAL" | "PRIMARY" | null | undefined;
        taskPresetKey?: string[] | null | undefined;
        type: "ENRICHMENT" | "TASK";
        updatedAt: string;
        url: string;
        usageSnapshot?: string | null | undefined;
        userPrompt?: string | null | undefined;
    }, unknown>>;
}, z.core.$strip>;
type HarnessRunDetailDefinition = z.infer<typeof HarnessRunDetailSchemaDefinition>;
/**
 * Harness run with its resolved public entity
 *
 * @openapiSchema HarnessRunDetail
 * @endpoint GET /v1/harness/runs
 * @endpoint GET /v1/harness/runs/{runId}
 * @usedBySchema CursorSliceHarnessRunDetailSchema
 * @contractShape harness.run-detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunDetail.kt
 */
export declare const HarnessRunDetailSchema: z.ZodType<HarnessRunDetailDefinition>;
export type HarnessRunDetail = z.infer<typeof HarnessRunDetailSchema>;
export {};
//# sourceMappingURL=run-detail.d.ts.map