import { z } from "zod/v4";
declare const AuthLoginMutationSchemaDefinition: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
type AuthLoginMutationDefinition = z.infer<typeof AuthLoginMutationSchemaDefinition>;
/**
 * Auth login mutation
 *
 * @openapiSchema AuthLoginMutation
 * @endpoint POST /v1/auth/api/login
 * @contractShape auth.login-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthLoginMutation.kt
 */
export declare const AuthLoginMutationSchema: z.ZodType<AuthLoginMutationDefinition>;
export type AuthLoginMutation = z.infer<typeof AuthLoginMutationSchema>;
export {};
//# sourceMappingURL=login-mutation.d.ts.map