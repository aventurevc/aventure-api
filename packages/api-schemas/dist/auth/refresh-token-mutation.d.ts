import { z } from "zod/v4";
declare const AuthRefreshTokenMutationSchemaDefinition: z.ZodObject<{
    refreshToken: z.ZodString;
}, z.core.$strip>;
type AuthRefreshTokenMutationDefinition = z.infer<typeof AuthRefreshTokenMutationSchemaDefinition>;
/**
 * Auth refresh token mutation
 *
 * @openapiSchema AuthRefreshTokenMutation
 * @endpoint POST /v1/auth/api/refresh
 * @contractShape auth.refresh-token-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthRefreshTokenMutation.kt
 */
export declare const AuthRefreshTokenMutationSchema: z.ZodType<AuthRefreshTokenMutationDefinition>;
export type AuthRefreshTokenMutation = z.infer<typeof AuthRefreshTokenMutationSchema>;
export {};
//# sourceMappingURL=refresh-token-mutation.d.ts.map