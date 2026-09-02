import { z } from "zod/v4";
declare const AddressValidationMutationSchemaDefinition: z.ZodObject<{
    addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    countryCodeChar2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    countryName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rawInputAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    state: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type AddressValidationMutationDefinition = z.infer<typeof AddressValidationMutationSchemaDefinition>;
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
export declare const AddressValidationMutationSchema: z.ZodType<AddressValidationMutationDefinition>;
export type AddressValidationMutation = z.infer<typeof AddressValidationMutationSchema>;
export {};
//# sourceMappingURL=validation-mutation.d.ts.map