// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SourceDocumentEntityAssociationSchema } from "./document-entity-association.js";
import { SourceDocumentPersonAssociationSchema } from "./document-person-association.js";
const SourceDocumentMutationSchemaDefinition = z.object({
    /** Governed source-document type token */
    documentType: z.string().nullable(),
    /** Role-tagged entity associations to attach insert-if-absent */
    entityAssociation: z.array(SourceDocumentEntityAssociationSchema).optional(),
    /** Freshness horizon override; omitted = the registry TTL for the type */
    expiresAt: z.iso.datetime({ offset: true }).nullish(),
    /** HTTP status observed on the upstream response */
    httpStatus: z.int().nullable(),
    /** Role-tagged person associations to attach insert-if-absent */
    personAssociation: z.array(SourceDocumentPersonAssociationSchema).optional(),
    /** Governed provider token allowed for documentType */
    provider: z.string().nullable(),
    /** Provider request or snapshot id for replay and billing correlation. */
    providerRequestId: z.string().nullish(),
    /** Base64 of the exact application-visible response-body bytes */
    rawBody: z.string().nullable(),
    /** Upstream-declared charset observed at capture. */
    rawCharset: z.string().nullish(),
    /** Upstream Content-Type media type observed at capture. */
    rawMediaType: z.string().nullish(),
    /** Canonical fetch identity: canonical URL, query hash, or dataset + external id */
    sourceKey: z.string().nullable(),
    /** Harness run id, app-job key, or request id that produced the fetch. */
    sourceRunId: z.string().nullish(),
    /** Content-coding observed on the upstream response, when any. */
    upstreamContentEncoding: z.string().nullish(),
    /** Source URL when the fetch identity is URL-shaped. */
    url: z.string().nullish(),
});
/**
 * Flat source-document write shape
 *
 * @openapiSchema SourceDocumentMutation
 * @endpoint POST /v1/research/source-documents
 * @contractShape source.document-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocument.kt
 */
export const SourceDocumentMutationSchema = SourceDocumentMutationSchemaDefinition;
//# sourceMappingURL=document-mutation.js.map