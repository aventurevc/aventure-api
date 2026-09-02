// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SourceDocumentCaptureTypeSchema } from "./document-capture-type.js";
import { SourceDocumentClientCaptureSchema } from "./document-client-capture.js";
import { SourceDocumentDeletionStateSchema } from "./document-deletion-state.js";
import { SourceDocumentEntityAssociationSchema } from "./document-entity-association.js";
import { SourceDocumentPersonAssociationSchema } from "./document-person-association.js";
import { SourceDocumentStorageStateSchema } from "./document-storage-state.js";
const SourceDocumentSchemaDefinition = z.object({
    archivedAt: z.iso.datetime({ offset: true }).nullish(),
    cacheHitCount: z.int(),
    captureType: SourceDocumentCaptureTypeSchema.nullish(),
    /** Client-capture metadata and accepted-part readback, never payloads */
    clientCapture: SourceDocumentClientCaptureSchema.nullish(),
    /** Legacy compatibility digest projection */
    contentHash: z.string().nullish(),
    createdAt: z.iso.datetime({ offset: true }),
    deletionState: SourceDocumentDeletionStateSchema.nullish(),
    documentType: z.string(),
    /** Domain server-derived from url at write */
    domain: z.string().nullish(),
    /** Role-tagged entity associations for this document */
    entityAssociation: z.array(SourceDocumentEntityAssociationSchema),
    /** Freshness horizon after which refetch is allowed — never row deletion */
    expiresAt: z.iso.datetime({ offset: true }).nullish(),
    fetchCount: z.int(),
    /** When this content version was first seen */
    fetchedAt: z.iso.datetime({ offset: true }),
    httpStatus: z.int().nullish(),
    /** Document id */
    id: z.uuid(),
    isCurrent: z.boolean(),
    lastAccessedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Bumped when an identical refetch returns the same bytes */
    lastFetchedAt: z.iso.datetime({ offset: true }),
    /** Durable harness run that owns the observation of this version */
    observationRunId: z.uuid().nullish(),
    observedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Role-tagged person associations for this document */
    personAssociation: z.array(SourceDocumentPersonAssociationSchema),
    provider: z.string(),
    providerRequestId: z.string().nullish(),
    rawByteCount: z.number().int().nullish(),
    rawCharset: z.string().nullish(),
    rawMediaType: z.string().nullish(),
    /** SHA-256 hex over the exact application-visible response-body bytes */
    rawSha256: z.string().nullish(),
    rawStorageState: SourceDocumentStorageStateSchema.nullish(),
    /** Canonical fetch identity: canonical URL, query hash, or dataset + external id */
    sourceKey: z.string(),
    sourceRunId: z.string().nullish(),
    updatedAt: z.iso.datetime({ offset: true }),
    /** Content-coding observed on the upstream response, when any */
    upstreamContentEncoding: z.string().nullish(),
    url: z.string().nullish(),
});
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
export const SourceDocumentSchema = SourceDocumentSchemaDefinition;
//# sourceMappingURL=document.js.map