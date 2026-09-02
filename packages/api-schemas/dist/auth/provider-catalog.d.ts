import { z } from "zod/v4";
declare const AuthProviderCatalogSchemaDefinition: z.ZodObject<{
    clerkPublishableKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type AuthProviderCatalogDefinition = z.infer<typeof AuthProviderCatalogSchemaDefinition>;
/**
 * @openapiSchema AuthProviderCatalog
 * @endpoint GET /v1/auth/api/providers
 * @contractShape auth.provider-catalog
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthProviderCatalog.kt
 */
export declare const AuthProviderCatalogSchema: z.ZodType<AuthProviderCatalogDefinition>;
export type AuthProviderCatalog = z.infer<typeof AuthProviderCatalogSchema>;
export {};
//# sourceMappingURL=provider-catalog.d.ts.map