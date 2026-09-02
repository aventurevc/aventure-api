import { z } from "zod/v4";
/**
 * Source of a reference match
 *
 * @openapiSchema AddressReferenceMatchSource
 * @endpoint POST /v1/address/validation
 * @usedBySchema AddressReferenceMatchSchema
 * @contractShape address.reference-match-source
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/addressvalidation/AddressValidation.kt
 */
export declare const AddressReferenceMatchSourceSchema: z.ZodEnum<{
    CREATED: "CREATED";
    EXISTING: "EXISTING";
    NONE: "NONE";
}>;
export type AddressReferenceMatchSource = z.infer<typeof AddressReferenceMatchSourceSchema>;
//# sourceMappingURL=reference-match-source.d.ts.map