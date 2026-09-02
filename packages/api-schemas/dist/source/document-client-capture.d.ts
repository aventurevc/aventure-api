import { z } from "zod/v4";
/**
 * @openapiSchema SourceDocumentClientCapture
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentSchema
 * @contractShape source.document-client-capture
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export declare const SourceDocumentClientCaptureSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type SourceDocumentClientCapture = z.infer<typeof SourceDocumentClientCaptureSchema>;
//# sourceMappingURL=document-client-capture.d.ts.map