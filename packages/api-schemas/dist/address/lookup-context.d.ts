import { z } from "zod/v4";
declare const AddressLookupContextSchemaDefinition: z.ZodObject<{
    addressId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    addressJoinId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    addressRole: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        CURRENT: "CURRENT";
        HQ: "HQ";
        PRIMARY: "PRIMARY";
    }>>>;
    entitySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hasContext: z.ZodBoolean;
    isEntityContext: z.ZodBoolean;
    isPersonContext: z.ZodBoolean;
    owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>>>;
    personSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type AddressLookupContextDefinition = z.infer<typeof AddressLookupContextSchemaDefinition>;
/**
 * Context linking validation to entity/person
 *
 * @openapiSchema AddressLookupContext
 * @endpoint POST /v1/address/validation
 * @usedBySchema AddressValidationResultSchema
 * @contractShape address.lookup-context
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/addressvalidation/AddressValidation.kt
 */
export declare const AddressLookupContextSchema: z.ZodType<AddressLookupContextDefinition>;
export type AddressLookupContext = z.infer<typeof AddressLookupContextSchema>;
export {};
//# sourceMappingURL=lookup-context.d.ts.map