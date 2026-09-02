// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const AddressValidationStatusSchema = z.enum([
    "VALIDATED",
    "PARTIAL_MATCH",
    "NOT_FOUND",
    "ERROR",
]);
//# sourceMappingURL=validation-status.js.map