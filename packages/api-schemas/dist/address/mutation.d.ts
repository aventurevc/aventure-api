import { z } from "zod/v4";
/**
 * Create or update an entity or person address association. Structured fields are canonical; fullAddress is server-synthesized and cannot be written. City-level rows require researchExhausted=true after address research is exhausted. Placeholder values and URLs in address text are rejected. Text fields are normalized: surrounding whitespace and separators are trimmed and caseless values (all-lowercase or ALL-CAPS) are title-cased. Latitude and longitude are written as a pair: an explicit pair also updates coordinates on the resolved address row, while omitted coordinates derive from the resolved location and never carry over from a previously stored address.
 *
 * @openapiSchema AddressMutation
 * @endpoint POST /v1/entities/{entityId}/addresses
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/people/{personId}/addresses
 * @endpoint PATCH /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint PATCH /v1/people/{personId}/addresses/{addressJoinId}
 * @endpoint PUT /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint PUT /v1/people/{personId}/addresses/{addressJoinId}
 * @usedBySchema EntityFullMutationSchema
 * @contractShape address.mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/AddressMutation.kt
 */
export declare const AddressMutationSchema: z.ZodObject<{
    addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cityName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    countryCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    countryName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    endDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    researchExhausted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    role: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        domicile: "domicile";
        dominant: "dominant";
        origin: "origin";
    }>>>;
    startDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stateName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type AddressMutation = z.infer<typeof AddressMutationSchema>;
//# sourceMappingURL=mutation.d.ts.map