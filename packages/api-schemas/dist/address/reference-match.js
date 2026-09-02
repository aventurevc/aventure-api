// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressReferenceMatchSourceSchema } from "./reference-match-source.js";
const AddressReferenceMatchSchemaDefinition = z.object({
    cityId: z.int().nullish(),
    /** City ID source */
    cityIdSource: AddressReferenceMatchSourceSchema,
    countryId: z.int().nullish(),
    /** Country ID source */
    countryIdSource: AddressReferenceMatchSourceSchema,
    hasAnyMatch: z.boolean(),
    hasCity: z.boolean(),
    hasCountry: z.boolean(),
    hasState: z.boolean(),
    isFullyResolved: z.boolean(),
    stateId: z.int().nullish(),
    /** State ID source */
    stateIdSource: AddressReferenceMatchSourceSchema,
});
/**
 * Reference table match results for address components
 *
 * @openapiSchema AddressReferenceMatch
 * @endpoint POST /v1/address/validation
 * @usedBySchema AddressValidationResultSchema
 * @contractShape address.reference-match
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/addressvalidation/AddressValidation.kt
 */
export const AddressReferenceMatchSchema = AddressReferenceMatchSchemaDefinition;
//# sourceMappingURL=reference-match.js.map