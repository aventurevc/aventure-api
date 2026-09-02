import { z } from "zod/v4";
declare const AuthPasswordResetMutationSchemaDefinition: z.ZodObject<{
    email: z.ZodEmail;
    redirectTo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type AuthPasswordResetMutationDefinition = z.infer<typeof AuthPasswordResetMutationSchemaDefinition>;
/**
 * Auth password reset mutation
 *
 * @openapiSchema AuthPasswordResetMutation
 * @endpoint POST /v1/auth/api/reset-password
 * @contractShape auth.password-reset-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthPasswordResetMutation.kt
 */
export declare const AuthPasswordResetMutationSchema: z.ZodType<AuthPasswordResetMutationDefinition>;
export type AuthPasswordResetMutation = z.infer<typeof AuthPasswordResetMutationSchema>;
export {};
//# sourceMappingURL=password-reset-mutation.d.ts.map