import { z } from "zod/v4";
declare const PersonAddressMutationSchemaDefinition: z.ZodObject<{
    addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cityName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    countryCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    countryName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    researchExhausted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stateName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type PersonAddressMutationDefinition = z.infer<typeof PersonAddressMutationSchemaDefinition>;
/**
 * Create a person address association. Structured fields are canonical; fullAddress is server-synthesized and cannot be written. City-level rows require researchExhausted=true after address research is exhausted. Text fields are normalized: surrounding whitespace and separators are trimmed and all-lowercase values are title-cased. Latitude and longitude are written as a pair: an explicit pair also updates coordinates on the resolved address row, while omitted coordinates derive from the resolved location.
 *
 * @openapiSchema PersonAddressMutation
 * @endpoint POST /v1/people/{personId}/addresses
 * @contractShape person.address-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/PersonAddressMutation.kt
 */
export declare const PersonAddressMutationSchema: z.ZodType<PersonAddressMutationDefinition>;
export type PersonAddressMutation = z.infer<typeof PersonAddressMutationSchema>;
export {};
//# sourceMappingURL=address-mutation.d.ts.map