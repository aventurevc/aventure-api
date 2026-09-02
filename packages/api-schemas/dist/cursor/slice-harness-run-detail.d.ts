import { z } from "zod/v4";
declare const CursorSliceHarnessRunDetailSchemaDefinition: z.ZodObject<{
    content: z.ZodArray<z.ZodType<{
        entity?: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        } | null | undefined;
        latestStatus?: {
            complete: boolean;
            entitySlug: string | null;
            gateRemaining: string[];
            note?: string | null | undefined;
            whatElseRemaining: string[];
            writeThisIteration: string[];
        } | null | undefined;
        provider?: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        } | null | undefined;
        publicUrl?: string | null | undefined;
        run: {
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
        };
    }, unknown, z.core.$ZodTypeInternals<{
        entity?: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        } | null | undefined;
        latestStatus?: {
            complete: boolean;
            entitySlug: string | null;
            gateRemaining: string[];
            note?: string | null | undefined;
            whatElseRemaining: string[];
            writeThisIteration: string[];
        } | null | undefined;
        provider?: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        } | null | undefined;
        publicUrl?: string | null | undefined;
        run: {
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
        };
    }, unknown>>>;
    nextCursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type CursorSliceHarnessRunDetailDefinition = z.infer<typeof CursorSliceHarnessRunDetailSchemaDefinition>;
/**
 * @openapiSchema CursorSliceHarnessRunDetail
 * @endpoint GET /v1/harness/runs
 * @contractShape cursor.slice-harness-run-detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/CursorPage.kt
 */
export declare const CursorSliceHarnessRunDetailSchema: z.ZodType<CursorSliceHarnessRunDetailDefinition>;
export type CursorSliceHarnessRunDetail = z.infer<typeof CursorSliceHarnessRunDetailSchema>;
export {};
//# sourceMappingURL=slice-harness-run-detail.d.ts.map