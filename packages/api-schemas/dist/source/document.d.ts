import { z } from "zod/v4";
declare const SourceDocumentSchemaDefinition: z.ZodObject<{
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    cacheHitCount: z.ZodInt;
    captureType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "client-captured-source": "client-captured-source";
        exactHttpBody: "exactHttpBody";
        legacyJsonbCanonical: "legacyJsonbCanonical";
    }>>>;
    clientCapture: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        capturedAt: z.ZodISODateTime;
        captureMethod: z.ZodEnum<{
            browserExtension: "browserExtension";
            manualUpload: "manualUpload";
            shareSheet: "shareSheet";
            tabsCaptureVisibleTab: "tabsCaptureVisibleTab";
        }>;
        captureScope: z.ZodEnum<{
            page: "page";
            selection: "selection";
            supplied: "supplied";
            viewport: "viewport";
        }>;
        dispatch: z.ZodType<{
            maxIteration: number;
            maxScoutConcurrent: number;
            mode: "COMPREHENSIVE" | "INDIVIDUAL";
            model?: string | null | undefined;
            subagentModel?: string | null | undefined;
            taskPresetKey?: string[] | null | undefined;
            userPrompt?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            maxIteration: number;
            maxScoutConcurrent: number;
            mode: "COMPREHENSIVE" | "INDIVIDUAL";
            model?: string | null | undefined;
            subagentModel?: string | null | undefined;
            taskPresetKey?: string[] | null | undefined;
            userPrompt?: string | null | undefined;
        }, unknown>>;
        extraction: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            extractionMethod: z.ZodEnum<{
                dom: "dom";
                nativeShare: "nativeShare";
                readability: "readability";
                supplied: "supplied";
            }>;
            extractorVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        imageReference: z.ZodArray<z.ZodType<{
            alt?: string | null | undefined;
            descriptor?: string | null | undefined;
            source?: "lazySrc" | "lazySrcset" | "src" | "srcset" | null | undefined;
            url: string;
        }, unknown, z.core.$ZodTypeInternals<{
            alt?: string | null | undefined;
            descriptor?: string | null | undefined;
            source?: "lazySrc" | "lazySrcset" | "src" | "srcset" | null | undefined;
            url: string;
        }, unknown>>>;
        omission: z.ZodArray<z.ZodType<{
            omittedCount: number;
            partRole: "inlineImage" | "readableHtml" | "readableText" | "suppliedFile" | "suppliedImage" | "suppliedPdf" | "suppliedText" | "viewportScreenshot";
            reason: "captureFailed" | "countLimited" | "platformUnavailable" | "redacted" | "removed" | "sizeLimited" | "unsupported";
        }, unknown, z.core.$ZodTypeInternals<{
            omittedCount: number;
            partRole: "inlineImage" | "readableHtml" | "readableText" | "suppliedFile" | "suppliedImage" | "suppliedPdf" | "suppliedText" | "viewportScreenshot";
            reason: "captureFailed" | "countLimited" | "platformUnavailable" | "redacted" | "removed" | "sizeLimited" | "unsupported";
        }, unknown>>>;
        part: z.ZodArray<z.ZodType<{
            byteCount: number;
            capturedAt?: string | null | undefined;
            captureMethod?: "browserExtension" | "manualUpload" | "shareSheet" | "tabsCaptureVisibleTab" | null | undefined;
            captureScope?: "page" | "selection" | "supplied" | "viewport" | null | undefined;
            consumption: "stored" | "storedNotConsumed" | "text" | "vision";
            mediaType: string;
            ordinal: number;
            pixelHeight?: number | null | undefined;
            pixelWidth?: number | null | undefined;
            role: "inlineImage" | "readableHtml" | "readableText" | "suppliedFile" | "suppliedImage" | "suppliedPdf" | "suppliedText" | "viewportScreenshot";
            sha256: string;
        }, unknown, z.core.$ZodTypeInternals<{
            byteCount: number;
            capturedAt?: string | null | undefined;
            captureMethod?: "browserExtension" | "manualUpload" | "shareSheet" | "tabsCaptureVisibleTab" | null | undefined;
            captureScope?: "page" | "selection" | "supplied" | "viewport" | null | undefined;
            consumption: "stored" | "storedNotConsumed" | "text" | "vision";
            mediaType: string;
            ordinal: number;
            pixelHeight?: number | null | undefined;
            pixelWidth?: number | null | undefined;
            role: "inlineImage" | "readableHtml" | "readableText" | "suppliedFile" | "suppliedImage" | "suppliedPdf" | "suppliedText" | "viewportScreenshot";
            sha256: string;
        }, unknown>>>;
        renderedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        requestedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        viewport: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            cssHeight: z.ZodInt;
            cssWidth: z.ZodInt;
            devicePixelRatio: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            scrollX: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            scrollY: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            zoom: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    contentHash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodISODateTime;
    deletionState: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        active: "active";
        deletePending: "deletePending";
        objectDeleted: "objectDeleted";
    }>>>;
    documentType: z.ZodString;
    domain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entityAssociation: z.ZodArray<z.ZodType<{
        entityId: string;
        matchType: "author" | "mention" | "owner" | "subject";
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
        matchType: "author" | "mention" | "owner" | "subject";
    }, unknown>>>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    fetchCount: z.ZodInt;
    fetchedAt: z.ZodISODateTime;
    httpStatus: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    id: z.ZodUUID;
    isCurrent: z.ZodBoolean;
    lastAccessedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    lastFetchedAt: z.ZodISODateTime;
    observationRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    observedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    personAssociation: z.ZodArray<z.ZodType<{
        matchType: "author" | "mention" | "owner" | "subject";
        personId: string;
    }, unknown, z.core.$ZodTypeInternals<{
        matchType: "author" | "mention" | "owner" | "subject";
        personId: string;
    }, unknown>>>;
    provider: z.ZodString;
    providerRequestId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rawByteCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rawCharset: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rawMediaType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rawSha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rawStorageState: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        archivePending: "archivePending";
        inline: "inline";
        r2Ready: "r2Ready";
    }>>>;
    sourceKey: z.ZodString;
    sourceRunId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodISODateTime;
    upstreamContentEncoding: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SourceDocumentDefinition = z.infer<typeof SourceDocumentSchemaDefinition>;
/**
 * Stored source-document metadata for one fetched content version
 *
 * @openapiSchema SourceDocument
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @contractShape source.document
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocument.kt
 */
export declare const SourceDocumentSchema: z.ZodType<SourceDocumentDefinition>;
export type SourceDocument = z.infer<typeof SourceDocumentSchema>;
export {};
//# sourceMappingURL=document.d.ts.map