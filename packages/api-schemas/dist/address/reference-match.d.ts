import { z } from "zod/v4";
declare const AddressReferenceMatchSchemaDefinition: z.ZodObject<{
    cityId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    cityIdSource: z.ZodEnum<{
        CREATED: "CREATED";
        EXISTING: "EXISTING";
        NONE: "NONE";
    }>;
    countryId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    countryIdSource: z.ZodEnum<{
        CREATED: "CREATED";
        EXISTING: "EXISTING";
        NONE: "NONE";
    }>;
    hasAnyMatch: z.ZodBoolean;
    hasCity: z.ZodBoolean;
    hasCountry: z.ZodBoolean;
    hasState: z.ZodBoolean;
    isFullyResolved: z.ZodBoolean;
    stateId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    stateIdSource: z.ZodEnum<{
        CREATED: "CREATED";
        EXISTING: "EXISTING";
        NONE: "NONE";
    }>;
}, z.core.$strip>;
type AddressReferenceMatchDefinition = z.infer<typeof AddressReferenceMatchSchemaDefinition>;
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
export declare const AddressReferenceMatchSchema: z.ZodType<AddressReferenceMatchDefinition>;
export type AddressReferenceMatch = z.infer<typeof AddressReferenceMatchSchema>;
export {};
//# sourceMappingURL=reference-match.d.ts.map