// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const PersonAddressMutationSchemaDefinition = z.object({
    /** Address line 1. */
    addressLine1: z.string().max(255).nullish(),
    /** Address line 2 (suite, floor, etc.) */
    addressLine2: z.string().max(100).nullish(),
    /** City name, resolved within the selected country; include state or region only when that country requires it. */
    cityName: z.string().max(200).nullish(),
    /** ISO-3166 alpha-2 country code. */
    countryCode: z.string().min(2).max(2).nullish(),
    /** Country name lookup. */
    countryName: z.string().nullish(),
    /** Latitude in decimal degrees */
    latitude: z.number().nullish(),
    /** Longitude in decimal degrees */
    longitude: z.number().nullish(),
    /** Postal or ZIP code. */
    postalCode: z.string().max(20).nullish(),
    /** Allow a city-level or coarser row only when source research proves no address-line, postal, or coordinate-specific address exists. */
    researchExhausted: z.boolean().nullish(),
    /** State or region abbreviation for countries that require one. */
    stateAbbrev: z.string().max(20).nullish(),
    /** State or region name, resolved within the selected country when that country requires one. */
    stateName: z.string().max(50).nullish(),
});
/**
 * Create a person address association. Structured fields are canonical; fullAddress is server-synthesized and cannot be written. City-level rows require researchExhausted=true after address research is exhausted. Text fields are normalized: surrounding whitespace and separators are trimmed and all-lowercase values are title-cased. Latitude and longitude are written as a pair: an explicit pair also updates coordinates on the resolved address row, while omitted coordinates derive from the resolved location.
 *
 * @openapiSchema PersonAddressMutation
 * @endpoint POST /v1/people/{personId}/addresses
 * @contractShape person.address-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/PersonAddressMutation.kt
 */
export const PersonAddressMutationSchema = PersonAddressMutationSchemaDefinition;
//# sourceMappingURL=address-mutation.js.map