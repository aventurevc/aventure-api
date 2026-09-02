import { z } from "zod/v4";
/**
 * Validation outcome status
 *
 * @openapiSchema AddressValidationStatus
 * @endpoint POST /v1/address/validation
 * @usedBySchema AddressValidationResultSchema
 * @contractShape address.validation-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/addressvalidation/AddressValidation.kt
 */
export declare const AddressValidationStatusSchema: z.ZodEnum<{
    ERROR: "ERROR";
    NOT_FOUND: "NOT_FOUND";
    PARTIAL_MATCH: "PARTIAL_MATCH";
    VALIDATED: "VALIDATED";
}>;
export type AddressValidationStatus = z.infer<typeof AddressValidationStatusSchema>;
//# sourceMappingURL=validation-status.d.ts.map