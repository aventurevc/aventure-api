import { z } from "zod/v4";
/**
 * External identifier type that maps an owner to a registry id: ein, secCik, ticker, lei, duns, isin, cusip, crd, or orcid.
 *
 * @openapiSchema UniqueIdType
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/unique-ids/lookup
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @endpoint GET /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @endpoint POST /v1/entities/{entityId}/unique-ids
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/{personId}/unique-ids
 * @endpoint POST /v1/sec/entities/{entityId}/identifiers
 * @endpoint PATCH /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint DELETE /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint DELETE /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @usedBySchema UniqueIdSchema
 * @contractShape unique.id-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/uniqueid/UniqueIdType.kt
 */
export declare const UniqueIdTypeSchema: z.ZodEnum<{
    crd: "crd";
    cusip: "cusip";
    duns: "duns";
    ein: "ein";
    isin: "isin";
    lei: "lei";
    orcid: "orcid";
    secCik: "secCik";
    ticker: "ticker";
}>;
export type UniqueIdType = z.infer<typeof UniqueIdTypeSchema>;
//# sourceMappingURL=id-type.d.ts.map