// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AddressValidationMutationSchemaDefinition = z.object({
    /** Address line 1. */
    addressLine1: z.string().nullish(),
    /** Address line 2 (suite, floor, etc.). */
    addressLine2: z.string().nullish(),
    /** City name. */
    city: z.string().nullish(),
    /** ISO-3166 alpha-2 country code. */
    countryCodeChar2: z.string().nullish(),
    /** Country name. */
    countryName: z.string().nullish(),
    /** Latitude in decimal degrees. */
    latitude: z.number().nullish(),
    /** Longitude in decimal degrees. */
    longitude: z.number().nullish(),
    /** Postal or ZIP code. */
    postalCode: z.string().nullish(),
    /** Validation-only all-in-one address text, not an entity/person URL. */
    rawInputAddress: z.string().nullish(),
    /** State or region name. */
    state: z.string().nullish(),
    /** State or region abbreviation. */
    stateAbbrev: z.string().nullish(),
});
/**
 * Address validation mutation
 *
 * @openapiSchema AddressValidationMutation
 * @endpoint POST /v1/address/validation
 * @usedBySchema AddressValidationResultSchema
 * @contractShape address.validation-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/addressvalidation/AddressValidation.kt
 */
export const AddressValidationMutationSchema = AddressValidationMutationSchemaDefinition;
//# sourceMappingURL=validation-mutation.js.map