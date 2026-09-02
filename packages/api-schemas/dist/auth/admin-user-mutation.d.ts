import { z } from "zod/v4";
declare const AuthAdminUserMutationSchemaDefinition: z.ZodObject<{
    email: z.ZodEmail;
    metadata: z.ZodObject<{
        firstName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fullName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        linkedinUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        twitterUsername: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        userPhotoUploadPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        userTimezone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        userType: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    password: z.ZodString;
}, z.core.$strip>;
type AuthAdminUserMutationDefinition = z.infer<typeof AuthAdminUserMutationSchemaDefinition>;
/**
 * Admin auth-user create request. Creates a Supabase auth user, auto-confirms the email immediately, stores supplied metadata as Supabase user_metadata, syncs the matching contact row, and returns the created AuthUser. This path does not send an invite or verification email.
 *
 * @openapiSchema AuthAdminUserMutation
 * @endpoint POST /v1/user/create
 * @contractShape auth.admin-user-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthAdminUserMutation.kt
 */
export declare const AuthAdminUserMutationSchema: z.ZodType<AuthAdminUserMutationDefinition>;
export type AuthAdminUserMutation = z.infer<typeof AuthAdminUserMutationSchema>;
export {};
//# sourceMappingURL=admin-user-mutation.d.ts.map