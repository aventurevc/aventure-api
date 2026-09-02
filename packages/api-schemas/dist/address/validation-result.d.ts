import { z } from "zod/v4";
declare const AddressValidationResultSchemaDefinition: z.ZodObject<{
    canonicalAddress: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        address: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        association: z.ZodOptional<z.ZodArray<z.ZodType<{
            endDate?: string | null | undefined;
            id: number;
            isCurrent: boolean;
            role?: "domicile" | "dominant" | "origin" | null | undefined;
            startDate?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            endDate?: string | null | undefined;
            id: number;
            isCurrent: boolean;
            role?: "domicile" | "dominant" | "origin" | null | undefined;
            startDate?: string | null | undefined;
        }, unknown>>>>;
        city: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
        }, z.core.$strip>>>;
        country: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            countryCodeChar2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            countryCodeChar3: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
            unRegion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            unSubregion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        countryAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        fullAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isHq: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        state: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
            stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        street: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    hasCanonicalAddress: z.ZodBoolean;
    id: z.ZodUUID;
    inputAddress: z.ZodType<{
        addressLine1?: string | null | undefined;
        addressLine2?: string | null | undefined;
        city?: string | null | undefined;
        countryCodeChar2?: string | null | undefined;
        countryName?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
        postalCode?: string | null | undefined;
        rawInputAddress?: string | null | undefined;
        state?: string | null | undefined;
        stateAbbrev?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        addressLine1?: string | null | undefined;
        addressLine2?: string | null | undefined;
        city?: string | null | undefined;
        countryCodeChar2?: string | null | undefined;
        countryName?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
        postalCode?: string | null | undefined;
        rawInputAddress?: string | null | undefined;
        state?: string | null | undefined;
        stateAbbrev?: string | null | undefined;
    }, unknown>>;
    isFailure: z.ZodBoolean;
    isSuccess: z.ZodBoolean;
    lookupContext: z.ZodType<{
        addressId?: number | null | undefined;
        addressJoinId?: number | null | undefined;
        addressRole?: "CURRENT" | "HQ" | "PRIMARY" | null | undefined;
        entitySlug?: string | null | undefined;
        hasContext: boolean;
        isEntityContext: boolean;
        isPersonContext: boolean;
        owner?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        personSlug?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        addressId?: number | null | undefined;
        addressJoinId?: number | null | undefined;
        addressRole?: "CURRENT" | "HQ" | "PRIMARY" | null | undefined;
        entitySlug?: string | null | undefined;
        hasContext: boolean;
        isEntityContext: boolean;
        isPersonContext: boolean;
        owner?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        personSlug?: string | null | undefined;
    }, unknown>>;
    previousAddress: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        address: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        association: z.ZodOptional<z.ZodArray<z.ZodType<{
            endDate?: string | null | undefined;
            id: number;
            isCurrent: boolean;
            role?: "domicile" | "dominant" | "origin" | null | undefined;
            startDate?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            endDate?: string | null | undefined;
            id: number;
            isCurrent: boolean;
            role?: "domicile" | "dominant" | "origin" | null | undefined;
            startDate?: string | null | undefined;
        }, unknown>>>>;
        city: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
        }, z.core.$strip>>>;
        country: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            countryCodeChar2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            countryCodeChar3: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
            unRegion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            unSubregion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        countryAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        fullAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isHq: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        state: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
            stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        street: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    provider: z.ZodEnum<{
        APPLE_MAPS: "APPLE_MAPS";
    }>;
    providerMetadata: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        confidenceScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        formattedAddress: z.ZodString;
        matchType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        providerPlaceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    referenceMatch: z.ZodType<{
        cityId?: number | null | undefined;
        cityIdSource: "CREATED" | "EXISTING" | "NONE";
        countryId?: number | null | undefined;
        countryIdSource: "CREATED" | "EXISTING" | "NONE";
        hasAnyMatch: boolean;
        hasCity: boolean;
        hasCountry: boolean;
        hasState: boolean;
        isFullyResolved: boolean;
        stateId?: number | null | undefined;
        stateIdSource: "CREATED" | "EXISTING" | "NONE";
    }, unknown, z.core.$ZodTypeInternals<{
        cityId?: number | null | undefined;
        cityIdSource: "CREATED" | "EXISTING" | "NONE";
        countryId?: number | null | undefined;
        countryIdSource: "CREATED" | "EXISTING" | "NONE";
        hasAnyMatch: boolean;
        hasCity: boolean;
        hasCountry: boolean;
        hasState: boolean;
        isFullyResolved: boolean;
        stateId?: number | null | undefined;
        stateIdSource: "CREATED" | "EXISTING" | "NONE";
    }, unknown>>;
    validatedAt: z.ZodISODateTime;
    validationStatus: z.ZodEnum<{
        ERROR: "ERROR";
        NOT_FOUND: "NOT_FOUND";
        PARTIAL_MATCH: "PARTIAL_MATCH";
        VALIDATED: "VALIDATED";
    }>;
}, z.core.$strip>;
type AddressValidationResultDefinition = z.infer<typeof AddressValidationResultSchemaDefinition>;
/**
 * Complete address validation result - top-level API response
 *
 * @openapiSchema AddressValidationResult
 * @endpoint POST /v1/address/validation
 * @contractShape address.validation-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/addressvalidation/AddressValidation.kt
 */
export declare const AddressValidationResultSchema: z.ZodType<AddressValidationResultDefinition>;
export type AddressValidationResult = z.infer<typeof AddressValidationResultSchema>;
export {};
//# sourceMappingURL=validation-result.d.ts.map