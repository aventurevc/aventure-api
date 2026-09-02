import { z } from "zod/v4";
declare const AuthTokenSchemaDefinition: z.ZodObject<{
    accessToken: z.ZodString;
    refreshToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type AuthTokenDefinition = z.infer<typeof AuthTokenSchemaDefinition>;
/**
 * Auth token
 *
 * @openapiSchema AuthToken
 * @endpoint POST /v1/auth/api/refresh
 * @contractShape auth.token
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthToken.kt
 */
export declare const AuthTokenSchema: z.ZodType<AuthTokenDefinition>;
export type AuthToken = z.infer<typeof AuthTokenSchema>;
export {};
//# sourceMappingURL=token.d.ts.map