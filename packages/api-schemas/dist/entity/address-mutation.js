// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressAssociationRoleSchema } from "../address/association-role.js";
/**
 * Create or update entity addresses such as headquarters and offices. Structured fields are canonical; fullAddress is server-synthesized and cannot be written. City-level rows require researchExhausted=true after address research is exhausted. Placeholder values and URLs in address text are rejected. Text fields are normalized: surrounding whitespace and separators are trimmed and caseless values (all-lowercase or ALL-CAPS) are title-cased. Latitude and longitude are written as a pair: an explicit pair also updates coordinates on the resolved address row, while omitted coordinates derive from the resolved location and never carry over from a previously stored address.
 *
 * @openapiSchema EntityAddressMutation
 * @endpoint POST /v1/entities/{entityId}/addresses
 * @endpoint POST /v1/entities/detail/full
 * @endpoint PATCH /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint PUT /v1/entities/{entityId}/addresses/{addressJoinId}
 * @usedBySchema EntityFullMutationSchema
 * @contractShape entity.address-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/AddressMutation.kt
 */
export const EntityAddressMutationSchema = z.object({
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
    /** Last known day this address association applied. */
    endDate: z.iso.date().nullish(),
    /** Deprecated legacy flag marking whether the address is currently in use. */
    isCurrent: z.boolean().nullish(),
    /** Deprecated compatibility flag for a legal or registered seat. */
    isHq: z.boolean().nullish(),
    /** Deprecated compatibility flag for the predominant display location. */
    isPrimary: z.boolean().nullish(),
    /** Latitude in decimal degrees */
    latitude: z.number().nullish(),
    /** Longitude in decimal degrees */
    longitude: z.number().nullish(),
    /** Postal or ZIP code. */
    postalCode: z.string().max(20).nullish(),
    /** Allow a city-level or coarser row only when source research proves no address-line, postal, or coordinate-specific address exists. */
    researchExhausted: z.boolean().nullish(),
    /** Address association role. Domicile is a legal or registered seat, dominant is the predominant display location, origin is a founding or historical location; null means unclassified. */
    role: AddressAssociationRoleSchema.nullish(),
    /** First known day this address association applied. */
    startDate: z.iso.date().nullish(),
    /** State or region abbreviation for countries that require one. */
    stateAbbrev: z.string().max(20).nullish(),
    /** State or region name, resolved within the selected country when that country requires one. */
    stateName: z.string().max(50).nullish(),
});
//# sourceMappingURL=address-mutation.js.map